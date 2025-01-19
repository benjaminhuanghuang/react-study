1. CMD + Shift + D : open the debug panel in the vscode

2. Create a launch.json, select Web App (Chrome)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome against localhost",
      "url": "http://localhost:8080",
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

It will create .vscode/launch.json at the root folder project

3. Add break pointer in the vs code

4. Launch debugger, vs code will bind to the "url": "http://localhost:8080",
