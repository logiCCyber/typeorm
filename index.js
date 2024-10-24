import express from "express";
import crypte from "crypto";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

const people = [
    { id: '44bb9df64e096d51f6966733281ac6c8', name: "Иван", age: 30, national: "русский" },
    { id: '0d8ca9bb9711c668a34cf460af23c8ae', name: "Мария", age: 25, national: "немка" },
    { id: 'b2c7b98a357e80ea354154ca516013ab', name: "Алексей", age: 28, national: "украинец" },
    { id: 'f3df547184c0632ebcb6c75b1bc5c6bf', name: "Ольга", age: 22, national: "белоруска" },
    { id: '3df0c83c2e08ee92d97bae04a8eb6321', name: "Дмитрий", age: 35, national: "казах" },
    { id: '720178a6f32a53f59fdfb6633daaa0b7', name: "Анна", age: 27, national: "армянка" },
    { id: '1bd7267cb05219dd00bee6657b4ca991', name: "Сергей", age: 40, national: "грузин" }
];

app.get("/people", (req, res) => {
    res.send(people);
});

app.get("/people/:id", (req, res) => {
    try {
        const result = people.find(item => item.id === req.params.id);
        if(result) {
            res.status(200).send(result);
        } else {
            res.status(404).send("Person not Found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete("/people/:id", (req, res) => {
    try {
        const index = people.findIndex(item => item.id === req.params.id);
        if(index > -1) {
            people.splice(index, 1);
            res.status(200).send(`Object deleted`);
        } else {
            res.status(404).send("Person not Found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put("/people/:id", (req, res) => {
    try {
        const index = people.findIndex(item => item.id === req.params.id);
        if(index > -1) {
            people[index] = {...people[index] ,...req.body};
            res.status(200).send(people[index]);
        } else {
            res.status(404).send("Person not Found");
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/people", (req, res) => {
    try {
        const id = crypte.randomBytes(16).toString("hex");
        people.push({id: id, ...req.body});
        res.status(200).send(req.body);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});