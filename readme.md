To run locally ensure db is up:
```
docker run --name dev -e POSTGRES_USER=appuser -e POSTGRES_PASSWORD=secret -e POSTGRES_DB=store -p 5432:5432 -d postgres:latest
```