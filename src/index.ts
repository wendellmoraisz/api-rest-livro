import express from "express";

const app = express();
app.use(express.json());

const PORT = 3333;
app.listen(3333, () => {
    console.log(`Server is running at Port ${PORT}`);
});