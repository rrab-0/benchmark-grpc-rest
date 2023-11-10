## Benchmark

For now gRPC wins,

### Method

##### Method One

1.  Do create request 1000 times
2.  Go to network tab of Firefox
3.  Look at the "Finish" time

-   (with cache) ~19-20s (gRPC) vs ~24-25s (REST)

##### Method One

1.  Do create request 1000 times
2.  Go to network tab of Chrome
3.  Look at the "Finish" time

-   (with cache) ~4-4,50s (gRPC) vs ~5-5,50s (REST)

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

<!-- ### WSL

1. Run this

```
protoc -I=. ./proto/{YOUR_PROTO}.proto \
  --js_out=import_style=commonjs:./client/src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./client/src
``` -->

### Windows

1. Go to proto folder

```
cd proto
```

2. Run this

```
protoc --proto_path=. todo.proto `
  --js_out=import_style=commonjs:../client/src/proto `
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:../client/src/proto `
  --go_out=../server-golang/app/generated-proto-todo `
  --go_opt=paths=source_relative `
  --go-grpc_out=../server-golang/app/generated-proto-todo `
  --go-grpc_opt=paths=source_relative
```

<!-- protoc --go_out=generated-proto-todo --go_opt=paths=source_relative \
> --go-grpc_out=generated-proto-todo --go-grpc_opt=paths=source_relative \
> todo.proto -->
