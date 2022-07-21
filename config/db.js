const mongoose = require("mongoose")
var uri = "mongodb+srv://demdem:demdem@cluster0.wgy4fcy.mongodb.net/?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(uri, options).then(() => {
    console.log("Database connected!");
}, err => {
    {
        console.log("Error connecting due to: ", err)
    }
})