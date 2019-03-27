wss parrot
=================

Websocket frontend for testing wss servers

In script.js set your websocket server url. Remember to set protocol to ws if you don't have ssl cert installed on your test server. Also always set connection port explicitly:

```
  const url='ws://10.144.45.142:8080'
```

Then save files locally and point browser to index.html and watch the magic happen (or actually open detools and watch output in console)