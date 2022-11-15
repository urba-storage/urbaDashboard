// install express
const express = require("express")
const app = express()
//connect mongoose
const mongoose = require('mongoose')
const UserModel = require('./models/Users')

const cors = require("cors");

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb+srv://urba_storage:sanfrancisco@endmodels.rytvtoj.mongodb.net/models?retryWrites=true&w=majority")

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/createUser", async (req, res) => {
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.get("/getUnit", (req, res) => {
    UnitModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        }
    });
});

app.post("/createUnit", async (req, res) => {
    const unit = req.body
    const newUnit = new UnitModel(unit);
    await newUnit.save()

    res.json(unit)
});

app.get("/getProvider", (req, res) => {
    ProviderModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        }
    });
});

app.post("/createProvider", async (req, res) => {
    const provider = req.body
    const newProvider = new ProviderModel(provider);
    await newProvider.save()

    res.json(provider)
});

app.get("/getItem", (req, res) => {
    ItemModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        }
    });
});

app.post("/createItem", async (req, res) => {
    const item = req.body
    const newItem = new ItemModel(item);
    await newItem.save()

    res.json(item)
});

app.get("/getDelivery", (req, res) => {
    DeliveryModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        }
    });
});

app.post("/createDelivery", async (req, res) => {
    const delivery = req.body
    const newDelivery = new DeliveryModel(delivery);
    await newDelivery.save()

    res.json(delivery)
});

app.listen(3001, () => {
    console.log("Server Runs Perfect!!")
    console.log(typeof (32))
});