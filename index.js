const path = require("path");
const fs = require("fs");
const os = require("os");
// const url = require("url");
const eventEmitter = require("events");
const http = require("http");
const express = require("express");
const publicPath = path.join(__dirname, "public");
// create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("floder created");
// });

// create file and write
// fs.rename(
//   path.join(__dirname, "/test", "hello.txt"),
//   path.join(__dirname, "/test", "helloWorld.txt"),
//   (err) => {
//     if (err) throw err;
//   }
// );

// console.log(os.totalmem());

// const myurl = new URL("http://mywebsite.com/hellow.html?id=100&status=active");

// console.log(myurl.pathname);

// myurl.searchParams.append("abc", "123");

// console.log(myurl.searchParams);

// loop through params
// myurl.searchParams.forEach((val, name) => console.log({ name, val }));

// class myemitter extends eventEmitter {}

// const emitter = new myemitter();

// emitter.on("event", () => console.log("event fired"));

// emitter.emit("event");

// http
//   .createServer((req, res) => {
//     res.write("hello world!");
//     res.end();
//   })
//   .listen(5000, () => console.log("server"));

// const arr = [2, 3, 4, 5, 6, 76, 10];

// console.log(arr.map((item) => item));

// http
//   .createServer((req, res) => {
//     res.write("hello world");
//     res.end();
//   })
//   .listen(5000);
// let a = 20;
// let b = 0;

// let data = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(39);
//   }, 2000);
// });
// data.then(() => {
//   b = data;
//   console.log(b);
//   console.log(a + b);
// });

const reqFilter = require("./middleware");
const dbConnect = require("./mongodb");
const app = express();
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const productSchema = require("./productSchema");
const multer = require("multer");
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/local");
require("./config");
const Product = require("./product");
// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// app.set("view engine", "ejs");

// const route = express.Router();
// route.use(reqFilter);

// app.get("", (req, res) => {
//   res.send({ name: "hello world", email: "text@gmail.com" });
// });
// app.get("/about", (req , res) => {
//   console.log(req.query);
//   res.send("<h1>hello world about us page</h1>");
// });
// app.get("/help", (req, res) => {
//   res.send(`<input type="text" placeholder="hello world help us page"/>
//   <a href='/about'>go to about</a>
//   `);
// });

// app.use(express.static(publicPath));

// app.get("", (_, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/about", (_, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/home", (_, res) => {
//   res.sendFile(`${publicPath}/home.html`);
// });
// app.get("/profile", (_, res) => {
//   const user = {
//     name: "hitesh",
//     email: "test@gmail.com",
//     city: "Dombivali",
//     skills: [
//       "react",
//       "react native",
//       "javascript",
//       "typescript",
//       "html",
//       "css",
//     ],
//   };
//   res.render(`profile`, { user });
// });
// app.get("/login", (_, res) => {
//   res.render("login");
// });
// app.get("*", (_, res) => {
//   res.sendFile(`${publicPath}/pageNotFound.html`);
// });

// middlewares

// const reqFilter = (req, resp, next) => {
//   if (!req.query.age) {
//     resp.send("please provide age");
//   }
//   if (req.query.age < 18) {
//     resp.send("you can not access provide age");
//   } else {
//     next();
//   }
// };
// application level middleware
// app.use(reqFilter);

// router level middleware
// route.get("/", (req, res) => {
//   res.send({ name: "hello world", email: "text@gmail.com" });
// });
// app.get("/about", (req, res) => {
//   res.send({ name: "hello world", email: "text@gmail.com" });
// });

// route.get("/contact", (req, res) => {
//   res.send({ name: "hello world", email: "text@gmail.com" });
// });

// app.use("/", route);
// app.listen(5000);

// const dbConnect = async () => {
//   let result = await client.connect();
//   let db = result.db("local");
//   return db.collection("products");
//   // let res = await collection.find({}).toArray();
//   // console.log({ res });
// };
// dbConnect();

// dbConnect()
//   .then((res) => {
//     res
//       .find({})
//       .toArray()
//       .then((data) => {
//         console.log({ data }, "after new file ");
//       });
//   })
//   .catch((err) => console.log({ err }));

// const main = async () => {
//   let db = await dbConnect();
//   db = await db.find().toArray();
//   console.log({ db });
// };

// main();

// const dbConnect = require("./mongodb");

// const insert = async () => {
//   let db = await dbConnect();
//   const result = await db.insertOne({
//     name: "hitesh",
//     qty: 1,
//     mobile: 9999999999,
//   });
//   console.log({ result });
//   if (result.acknowledged) {
//     console.log("inserted");
//   }
// };

// insert();
// const insertManyData = async () => {
//   let db = await dbConnect();
//   const result = await db.insertMany([
//     {
//       title: "Post Title 2",
//       body: "Body of post.",
//       category: "Event",
//       likes: 2,
//       tags: ["news", "events"],
//       date: Date(),
//     },
//     {
//       title: "Post Title 3",
//       body: "Body of post.",
//       category: "Technology",
//       likes: 3,
//       tags: ["news", "events"],
//       date: Date(),
//     },
//     {
//       title: "Post Title 4",
//       body: "Body of post.",
//       category: "Event",
//       likes: 4,
//       tags: ["news", "events"],
//       date: Date(),
//     },
//   ]);
//   console.log({ result });
//   if (result.acknowledged) {
//     console.log("inserted");
//   }
// };

// insertManyData();

// const updateData = async () => {
//   let db = await dbConnect();
//   let result = await db.updateOne(
//     { name: "hitesh", qty: 1 },
//     { $set: { name: "max pro ultra" } }
//   );
//   console.log({ result });
// };

// updateData();

// const updateManyData = async () => {
//   let db = await dbConnect();
//   let result = await db.updateMany(
//     { name: "hitesh", qty: 1 },
//     { $set: { name: "max pro ultra" } }
//   );
//   console.log({ result });
// };

// updateManyData();

// const deleteData = async () => {
//   let db = await dbConnect();
//   let result = await db.deleteOne({ name: "max pro 5" });
//   console.log({ result });
// };

// deleteData();

// const deleteDataMany = async () => {
//   let db = await dbConnect();
//   let result = await db.deleteMany({ name: "max pro ultra" });
//   console.log({ result });
// };

// deleteDataMany();

// get api with mongodb connection
// app.get("/", async (req, res) => {
//   let db = await dbConnect();
//   db = await db.find().toArray();
//   res.send(db);
// });

// post api with mongodb connection

// app.post("/", async (req, res) => {
//   let db = await dbConnect();
//   console.log(req.body);
//   const result = await db.insertOne(req.body);
//   res.send(result);

//   console.log({ result });
//   if (result.acknowledged) {
//     console.log("inserted");
//   }
// });

// app.put("/", async (req, res) => {
//   console.log(req.body);
//   let db = await dbConnect();
//   const result = await db.updateOne(
//     { title: "pokemon go" },
//     { $set: { ...req.body } }
//   );

//   res.send({ result: "put method" });
// });
// app.put("/:title", async (req, res) => {
//   console.log(req.body);
//   let db = await dbConnect();
//   const result = await db.updateOne(
//     { title: "pokemon go" },
//     { $set: { ...req.params } }
//   );

//   res.send({ result: "put method" });
// });

// app.delete("/:id", async (req, res) => {
//   let db = await dbConnect();
//   const result = await db.deleteOne({
//     id: new mongodb.ObjectId(req?.params?.id),
//   });
//   console.log({ result });
//   if (result?.acknowledged) {
//     res.send({ message: "Product deleted successfully" });
//   } else {
//     res.send({ message: "Product delete failed" });
//   }
// });
// app.listen(5000);

// const saveInDB = async () => {
//   const prodcutModel = mongoose.model("products", productSchema);
//   let data = new prodcutModel({
//     title: "nexus event disaster",
//     body: "loki season 2 episode 3 : Out off the time loop",
//     category: "Movies",
//     likes: 143,
//     tags: ["web series", "triller", "time travel", "multiverse"],
//     date: new Date(),
//   });
//   let result = await data.save();
//   console.log({ result });
// };
// saveInDB();

// const updateDb = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.updateOne(
//     { title: "nexus" },
//     { $set: { category: "Web Series", likes: 178 } }
//   );
// };
// updateDb();

// const deleteDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.deleteOne({ title: "nexus", likes: 123 });
//   console.log({ data });
// };
// deleteDB();

// const findDB = async () => {
//   const Product = mongoose.model("products", productSchema);
//   let data = await Product.find({ title: "nexus" });
//   console.log({ data }, data.length);
// };
// findDB();

// app.post("/create", async (req, res) => {
//   console.log(req.body);
//   let data = new Product(req.body);
//   let result = await data.save();
//   console.log({ result });
//   res.send(result);
// });

// app.get("/list", async (req, res) => {
//   let result = await Product.find({ title: "nexus event" });
//   console.log({ result });
//   res.send(result);
// });

// app.delete("/delete/:id", async (req, res) => {
//   console.log(req.params);
//   let result = await Product.deleteOne(req.params);
//   console.log({ result });
//   res.send(result);
// });

// app.put("/update", async (req, res) => {
//   let result = await Product.updateOne(
//     {
//       title: "nexus",
//       likes: 143,
//     },
//     {
//       $set: req.body,
//     }
//   );
//   console.log({ result });
//   res.send(result);
// });

// app.get("/search/:title", async (req, res) => {
//   // console.log(req.params.title);
//   let data = await Product.find({
//     $or: [
//       { title: { $regex: req.params.title } },
//       { body: { $regex: req.params.title } },
//     ],
//   });
//   res.send(data);
// });

const upload = multer({
  storage: multer.diskstorage({}),
});
app.post("/upload", async (req, res) => {});
app.listen(5000);
