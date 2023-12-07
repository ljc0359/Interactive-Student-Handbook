const express = require('express')
const app = express()

// Set up DB connection here

//Example API
app.get("/api", (req, res) => {
    res.json({"test": ["testA", "testB", "testC"]})
})

app.listen(5000, () => {console.log("Server started on port 5000!")})
