# todo-app_data-interaction
 RESTful API in a Node.js environment that runs on an Express server and uses a PostgreSQL database
## Tech-Stack
+ [Sequlize](https://sequelize.org/)
+ postgres database
+ express

## REST APIs table

| Methods       | Urls          | Actions          |
| ------------- |---------------| -----------------|
| GET           | api/tasks     | get all tasks    |
| GET           | api/tasks/:id      | get task by `id`        |
| POST  | api/tasks      | add  new task           |
| PUT | api/tasks/:id      | Update task by `id `    |
| DELETE | api/tasks/:id     | Delete task by `id`   |
| DELETE | api/tasks      | Delete all tasks    |
