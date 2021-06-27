# `Getting started`

1). clone repo

2). npm install

3). add `.env.development `

```
REACT_APP_API_HOST='http://localhost:4000'
REACT_APP_WS_HOST='ws://localhost:8080'
REACT_APP_WS_RECONNECT_THROTTEL = 3000
```
add `.env.production `

```
REACT_APP_API_HOST='https://api.peers.in'
REACT_APP_WS_HOST=wss://api.peers.in/ws
REACT_APP_WS_RECONNECT_THROTTEL = 3000
```
4). development:```npm start```

production:```npm build```


# `module patches`

### peer-js(front-end)
1). add `{ credentials: 'include' }` in every fetch request,  it will attach cookie to every fetch request otherwise server will attach a new cookie.

2). make token global so it can be access outside of the module (in app)[```window.peerToken = token``` in socket start function ]
