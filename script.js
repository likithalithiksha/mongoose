const mongoose =require("mongoose")
const User = require('./User')

main().catch(err=>console.log(err.message));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

// const user = await User.({name: "kokila",})
// user.sayHi()
// console.log(user)
// }

const user = await User
.where("name")
.equals("kavitha")
// .where("age")
// .equals(30)
.limit(1)
.populate("bestFriend")

//  const user = await User.create({
//    name: "deepa",
  
//   age: 32,
//   email: "deepu@gmail.com ",
//    job: "Student",
// //    address: { street: "A1street", city: "Erode", pincode: 455 },
// });

// user[0].bestFriend = '6544b0a936411d2401fc7705'
// await user[0].save();
console.log(user);
}
