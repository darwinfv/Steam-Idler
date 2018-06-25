
  // const {app, BrowserWindow} = require('electron');

  // function createWindow () {
  //  win = new BrowserWindow({width: 800, height: 600});
  //  win.loadFile('index.html');
  // }

  // app.on('ready', createWindow);

  const {app, BrowserWindow} = require('electron');
  
  let win;
  
  function createWindow () {
    win = new BrowserWindow({width: 380, height: 400, resizable: true});
    win.loadFile('index.html');
  
    win.webContents.openDevTools();
    win.on('closed', () => {
      win = null;
    });
  }
  
  app.on('ready', createWindow);
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
  
  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });