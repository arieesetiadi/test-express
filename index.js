import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.json({
        status: "connected",
        message : "Hello from Express 😍"
    })
})

app.listen(3000, () => {
    console.log(`Listening on http://localhost:3000`);
})