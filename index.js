import express from 'express';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});