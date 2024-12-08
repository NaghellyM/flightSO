const os = require('os');
const diskusage = require('diskusage');
const { exec } = require('child_process');

class SystemResources {
    constructor() {}

    async getAll() {
        try {
            const totalRam = os.totalmem();
            const freeRam = os.freemem();

            const cpus = os.cpus();

            const diskInfo = await new Promise((resolve, reject) => {
                diskusage.check('/', (err, info) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(info);
                    }
                });
            });

            return {
                ram: {
                    total: totalRam,
                    free: freeRam
                },
                cpu: cpus,
                disk: {
                    total: diskInfo.total,
                    free: diskInfo.free
                }
            };
        } catch (error) {
            console.error('Error obteniendo los recursos del sistema:', error);
            throw error;
        }
    }

    async getRam() {
        const totalRam = os.totalmem();
        const freeRam = os.freemem();
        return { total: totalRam, free: freeRam };
    }

    async getCPU() {
        return os.cpus();
    }

    async getElectronProcesses() {
        return new Promise((resolve, reject) => {
            exec('ps aux | grep electron', (error, stdout, stderr) => {
                if (error) {
                    console.error('Error obteniendo los procesos de Electron:', error);
                    return reject(error);
                }
                if (stderr) {
                    console.error('Error en el comando:', stderr);
                    return reject(stderr);
                }
                const processes = stdout.split('\n').filter(line => line.includes('electron')).map(line => {
                    const columns = line.trim().split(/\s+/);
                    return {
                        user: columns[0],
                        pid: columns[1],
                        cpu: columns[2],
                        mem: columns[3],
                        vsz: columns[4],
                        rss: columns[5],
                        tty: columns[6],
                        stat: columns[7],
                        start: columns[8],
                        time: columns[9],
                        command: columns.slice(10).join(' ')
                    };
                });
                resolve(processes);
            });
        });
    }
}

module.exports = SystemResources;