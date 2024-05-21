const mongoose = require('mongoose');

// mongodb+srv://gyanendrajsp2001:*****@gyanendra.bqtyfro.mongodb.net/
// .env
mongoose.connect("mongodb+srv://gyanendrabbsr2001:gyana123@gyanendra.thh2c8i.mongodb.net/todos");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo
}
