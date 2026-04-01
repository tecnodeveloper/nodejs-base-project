# Template Repository

- The repository is template setup for nodejs project that have setup of eslint, prettier, eslint+prettier, husky, docker, swagger Api, .gitignore, rules of eslint, separate folder inside src, services and prisma ORM setup.

## Eslint + prettier

- Their is eslint + prettier setup of rules which warn unused variable and noUnd. and reformat code when saved the file.

## husky

- When we try to commit with errors in project or the hook that return before commit will not do commit before task that are written in husky file.

## Docker Setup

- The docker is already setup in project if three or five developers working on same project then they have all to install software, dependency. By using docker you containerize your application and you can easily put on production container.

## Swagger Api

- The swagger api provide documentation of https request.

## src Folder

- There is different folder for controllers, model, routes and service.

## Prisma ORM setup

- Object Relational Model is bridge between database and the javascript language. Model is like language of bridge. Schema is translator language.
  `npx prisma init` : For intializing of prisma in project.

  `npx prisma migrate dev` : For generating migration of database

### 1. Build the image

```bash
docker build -t nodejs-base-project .
```

---

### 2. Run the container

```bash
docker run -p 3000:3000 --name bookstore-backend nodejs-base-project
```

---

### 3. Verify it’s running

Open:

```
http://localhost:3000/health
```

## Cleanup

Stop container:

```bash
docker ps
docker stop <container_id>
```

Remove container:

```bash
docker rm <container_id>
```

Remove image:

```bash
docker rmi nodejs-base-project
```
