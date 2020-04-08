const fs = require('fs');
const path = require('path');
const {BrowserWindow, app} = require('electron');
const isDev = require('electron-is-dev');
const ProjectConstants = require('../ProjectConstants.js');

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

    loadWin(win, 'render/win_main/index.html');
}

function getWinPath(relativePath: string) {
    if (!isDev) return path.join(app.getAppPath(), relativePath);
    else return `http://localhost:${ProjectConstants.devPort}/${relativePath}`;
}

function loadWin(browserWindow, relativePath: string) {
    if (!isDev) {
        browserWindow.loadFile(path.join(app.getAppPath(), relativePath));
    } else {
        browserWindow.loadURL(`http://localhost:${ProjectConstants.devPort}/${relativePath}`)
    }
}


