## Description

Example react grpc client + golang grpc server with `envoy proxy`

<!-- This is an example repo to call a grpc service from a react client, inspired by [this repo](https://github.com/norbjd/grpc-web-nginx-envoy) -->

1. client is on port `8081` and calls Envoy proxy on port `8000`
2. envoy proxy on port `8000` calls grpc service on port `50051`

## Run

To run the stack:

```
docker-compose build
docker-compose up
```

Then, in a browser, open [`http://localhost:8081`](http://localhost:8081) (the client using gRPC-web to call Envoy).

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
