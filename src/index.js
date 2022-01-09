// require('dotenv').config({path: './config.env'});
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const port = process.env.PORT || 4002
// const productRoute = require("./routes/productRoute");
// const app = express();
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// app.use("/product", productRoute);
// // routing table
// app.get("/",(req, res)=>{
//     // console.log("Hello from index");
//     res.send("Hello from index");
// });
// app.get("/login",(req, res)=>{
//     res.send("Hello from login");
// });
// app.post("/register",(req, res)=>{
//     res.send(req.body.name);
//     res.send(req.body.gmail);
//     res.send("Hello from register");
// });

// app.listen(port,()=>{
//     console.log(`App is running on port ${port}`);
// });

// console.log(port);

require('dotenv').config({ path:'./config.env'});
const express  = require('express');
const bodyParser  = require('body-parser');
const cors  = require('cors');
const res = require('express/lib/response');
const req = require('express/lib/request');
const port = process.env.PORT || 4002 ;

const app =express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

// const productRoute = require("./routes/productRoute");
const employeeRoute = require("./routes/employeeRoute");
// app.use("/product",productRoute);
app.use("/employee", employeeRoute);

//app.post();
// app.put();
// app.patch();
// app.delete();



app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});