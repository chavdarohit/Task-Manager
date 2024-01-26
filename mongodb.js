require("dotenv").config();
const { MongoClient, Collection } = require("mongodb");
const client = new MongoClient(process.env.MONGO_URI);

const database = client.db("task-manager");
const collection = database.collection("users");

try {
  client.connect();
  console.log("Successfully connected to MongoDb");
} catch (err) {
  console.log("Error connecting MongoDB ", err);
}

// collection.insertOne({
//   name: "rohit chavda",
//   age: 23,
// });
// collection.deleteMany({});

// collection.insertMany(
//   [{ name: "mayank" }, { name: "suresh" }, { name: "mono" }],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert many");
//     }
//     console.log(result.ops);
//   }
// );

// const user = collection.findOne({name:"mayank"});
// console.log("outside",user);
collection.findOne({name:"mayank"},(error,user)=>{
    if(error)
    {
        console.log("error");
    }
    console.log(user);
})