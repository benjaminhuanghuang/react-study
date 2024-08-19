const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});