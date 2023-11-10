# Assignment-3
## Instructions
To run the project
- Ensure a Docker daemon is running
- `cd` to the root of the project
- In a terminal run:
  * `docker-compose up`, or,
  * `docker-compose up -d` to run in detached mode

Access the application in a web browser at the URL `127.0.0.1:8080`.

To elevate a user to an `admin` role
- Execute the following commands in the integrated terminal of the running `user-db` container (On Docker Desktop, go to "Containers" > "user-db" > "Exec"):
  * `mongosh`
  * `use user_db`
  * `var adminid = db.roles.findOne({name:'admin'}, {_id:1})._id`
  * `db.users.updateOne({ username: '<CREATED_USERNAME>' }, { $set: { roles: [adminid] } })`

(_where_ `<CREATED_USERNAME>` _is the username of an existing user to be elevated to an `admin` role_)

To tear down the project
- In a terminal, run:
  * `docker-compose down`