const mongoose =require("mongoose")

// const addressSchema = new mongoose.Schema({
//          street: String,
//         city: String,

// })

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        validate : {
            validator: v => v%2 ===0,
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type:String,
        // required: true, 
        lowercase: true,
        minLength: 10
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"User"},
    hobbies: [String],
    // address: addressSchema,
})

// userSchema.methods.sayHi = function(){
//     console.log(`Hi! Name is ${this.name}`)
// }

module.exports = mongoose.model("User", userSchema)