const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
  // Obtén la información de la pantalla
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Crea la ventana con el tamaño de la pantalla
  win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile('dist/electron-app/browser/index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
