// 1. Set up a new Express.js application.
// 2. Implement the following routes using express.Router:

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.
// 3. Create a JSON file (e.g., tasks.json) to store task data. Initialize it with an empty array [].
// 4. Use appropriate validation to ensure the user provides necessary data when creating or updating tasks.
// 5. Implement error handling for file read/write operations and route validation.
// 6. Test your API using tools like Postman or curl.
const express = require('express')
const cors = require('cors')

const { taskRouter } = require('./routes/taskRouter.js')

const app = express()

app.use(express.urlencoded({extended: true})) // to parse urlencoded data
app.use(express.json()) // to parse json data

app.use(express.static(__dirname + '/public'))

app.use(cors())


const PORT = 5000

app.listen(PORT, () => {
    console.log(`server on port ${PORT}`);
})

app.use('/tasks',taskRouter)
