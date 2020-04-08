const fs = require('fs');
const path = require('path');
const {BrowserWindow, app} = require('electron');

console.log('Hello from main')
const isExist = fs.existsSync(__filename);

app.whenReady().then(createWindow)

/***************
 *  FUNCTIONS
 *****************/

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    const appPath = path.join(app.getAppPath(), 'render/win_main/index.html');

    win.loadFile(appPath);
}


