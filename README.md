# Записки


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
