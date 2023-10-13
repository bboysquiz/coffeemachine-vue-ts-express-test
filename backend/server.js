const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

app.use(cors())
const defaultConfigurations = [
    {
        id: "size",
        options: ["стандартный", "увеличенный"]
    },
    {
        id: "drinksCount",
        options: [6, 8, 12]
    },
    {
        id: "coffeeTypes",
        options: ["Эспрессо", "Латте", "Капучино", "Американо"],
    }
];

app.use(express.json());


app.get('/api/default-configurations', (req, res) => {
    res.json(defaultConfigurations);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

