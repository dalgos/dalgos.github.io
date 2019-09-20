---
path: '/2019-09-20-configure-vscode-debugger'
date: '2019-09-20T10:00:00.000Z'
title: 'VSCode Debugger 설정하기'
featuredImage: ''
---

## 필요 extension

* Debugger for Chrome

## launch.json

vscode debugger 탭을 이용해 debugging 할 수 있다.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch WDS",
      "program": "${workspaceFolder}/node_modules/webpack-dev-server/bin/webpack-dev-server.js",
      "cwd": "${workspaceFolder}",
      "args": [
        "--config",
        "webpack/webpack.config.dev.js",
        "--color",
        "--inline"
      ],
      "sourceMaps": true
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Launch JSON-SERVER",
      "program": "${workspaceFolder}/node_modules/json-server/lib/cli/bin.js",
      "cwd": "${workspaceFolder}",
      "args": [
        "--watch",
        "./mock/db.json",
        "--port",
        "6060"
      ]
    },
    {
      "type": "chrome",
      "request": "attach",
      "name": "Attach to Chrome",
      "port": 9222,
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true
    },
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:8080/admin/media/list",
      "runtimeArgs": [
        "--new-window",
        "--remote-debugging-port=9222"
      ],
      "webRoot": "${workspaceFolder}",
      "sourceMaps": true
    }
  ],
  "compounds": [
    {
      "name": "Debug Local",
      "configurations": [
        "Launch JSON-SERVER",
        "Launch WDS",
        "Launch Chrome",
        "Attach to Chrome"
      ]
    }
  ]
}
```
