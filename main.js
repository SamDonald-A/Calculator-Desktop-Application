const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 350,
    height: 500,
    resizable: false
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);