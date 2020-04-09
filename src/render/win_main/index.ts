import {appPath} from './test';
import {WindowGlobal} from '../../WindowGlobal';

console.log(`Hello Again. Im live`);

document.body.innerHTML = `
<h1>Hello</h1>
<p>app path: ${WindowGlobal.appPath}</p>
<p>${appPath}</p>
`;
