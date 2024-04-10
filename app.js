const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) =>{
    res.send("this is a my node application for cicd demo")
})

app.listen(port, () =>{
    console.log(`Application is listening at http://loscalhost:${port}`)
})
