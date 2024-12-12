export interface Ram {
  total: number;
  free: number;
}

export interface Cpu {
  model: string;
  speed: number;
  times: {
    user: number;
    nice: number;
    sys: number;
    idle: number;
    irq: number;
  };
}
export interface Process {
  user: string;
  pid: string;
  cpu: string;
  mem: string;
  vsz: string;
  rss: string;
  tty: string;
  stat: string;
  start: string;
  time: string;
  command: string;
}

export interface SystemResources {
  ram: Ram;
  cpu: Cpu[];
  disk: Disk;
  processes: Process[];
}

export interface Disk {
  total: number;
  free: number;
}
