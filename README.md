# catzy007.github.io
```
docker run --rm -d -v "$(pwd):/usr/share/caddy" -p 127.0.0.1:8888:80 caddy
```
```
docker run --rm -v "$(pwd):/app" -p 8888:80 caddy sh -c 'cd /app; caddy file-server --browse'
```
