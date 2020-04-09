const PACKAGE = require('../package.json');
const fs = require('fs');
const path = require('path');
const url = require('url');
const {BrowserWindow, app} = require('electron');
const isDev = require('electron-is-dev');

console.log('Hello from main')

app.whenReady().then(createWindow)

/***************
 *  FUNCTIONS
 *****************/

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(app.getAppPath(), 'preload.js')
        }
    })

    const relPath = 'render/win_main/index.html';

    win.loadURL(getWinUrl(relPath));
}

function getWinUrl(relPath: string) {
    const startUrl = isDev
        ? `http://localhost:${PACKAGE.devPort}/${relPath}`
        : url.format({
            pathname: path.join(app.getAppPath(), relPath),
            protocol: 'file:',
            slashes: true
        })

    return startUrl;
}


