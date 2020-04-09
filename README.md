# Записки

## Preload

В текущей конфигурации, если отключить nodeIntegration, то надо ставить в webpack - targets 
- preload.js как 'electron-renderer'
- окна как 'web'
- main как 'electron-main'

Только так preload будет иметь доступ и к ноде, и к окну, а клиентские скрипты не будут вываливаться с криком "require is not defined".

Но все это можно упростить если отказаться от preload.js и позволить в окнах интеграцию с нодой (тогда им надо поставить target='electron-renderer')

## Electron-builder

Требует в корневой папке `package.json` для приложения.
``{
  "appId": "com.example.app",
  "name": "sampleName",
  "version": "0.0.1"
}
``
Тут еще иконки надо указать.

По умолчанию упаковывает в asar всю директорию. Включая исходники.

Чтобы он компилировал только `dist`, надо указать в npm package: 
```
"build": {
    "appId": "com.app.my",
    "copyright": "Copyright © 2020 Kvisaz",
    "directories": {
      "app": "dist",
      "output": "build"
    },
    "win": {
      "target": [
        {
          "target": "dir"
        }
      ]
    }
  },
```
