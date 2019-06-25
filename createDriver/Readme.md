# Deploy Resolver

## Build docker image

```sh
docker build --rm -it create-driver-resolver:latest -p 8080:8080 .
```

## Push to registry

```sh
docker push ...
```

## Deploy to minikub

```sh
kubectl apply -f Deployment.yaml
```