## Description

Example react grpc client + golang grpc server with `envoy proxy`

## Run

1. Make sure .env is configured at root directory, server-golang, and at server-golang-http.

2. At root directory run to run gRPC API + envoy + postgres:

```
docker-compose build
docker-compose up
```

3. Then go to http folder to run REST API + postgres:

```
cd server-golang-http
docker-compose build
docker-compose up
```

4. Now you can run the client:

```
cd ../client
npm install
npm run start
```

<!-- Then, in a browser, open [`http://localhost:8081`](http://localhost:8081) (the client using gRPC-web to call Envoy). -->

## Generate protos

Will generate protos for `TypeScript` and `Golang`

### WSL

1. Run this

```
protoc -I=. ./proto/{YOUR_PROTO}.proto \
  --js_out=import_style=commonjs:./client/src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src
```

### Windows

2. Run this

```
protoc --proto_path=. ./proto/{YOUR_PROTO}.proto \
  --js_out=import_style=commonjs:./client/src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src
```
