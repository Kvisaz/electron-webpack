import {remote} from 'electron'
import {WindowGlobal} from './WindowGlobal';

const app = remote.app;

console.log('Preload start...');
console.log('App path...', app.getAppPath());


WindowGlobal.appPath = app.getAppPath();
