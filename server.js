const express=require('express');
const http=require('http');
const app=express();
const path=require('path');
const fs= require('fs');
const bodyParser = require('body-parser');
// const moongoose = require('mongoose');

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Tampai:jZUX55Hnv5uGxsV2@cluster0.tx8qfml.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("sample_airbnb").collection("listingsAndReviews");
//   // perform actions on the collection object
//   client.close();
// });
//app.use(cors())
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(__dirname+'/dist/MyApp'));
app.use(express.json({extended: false})); 
app.listen(process.env.PORT || 3001);
app.get('/index',function(req,res)
{
    res.sendFile(path.join(__dirname+'/dist/MyApp/index.html'));
})
app.get('/api/getProducts',function(req,res){
   fs.readFile('user.json',function(err,data){
       console.log("data",data)
       //res.write(data);
       res.send(data)
       res.end();
   })
})
app.get('/api/cartDetails',function(req,res){
    fs.readFile('cartDetails.json',function(err,data){
        console.log("data",data)
        //res.write(data);
        res.send(data)
        res.end();
    })
 })
 app.post('/api/getUserCartDetails',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('cartDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        newData2={products:[]}
        for(i of myObject.products){
            console.log("check i",i)
            if(i.userID==req.body.userID){
                console.log("inside productID",req.body.userID)
                newData2.products.push(i);
            }
        }
            res.write(JSON.stringify(newData2));
            res.end();
        
    })
 })
 app.get('/api/wishListDetails',function(req,res){
    fs.readFile('wishList.json',function(err,data){
        console.log("data",data)
        //res.write(data);
        res.send(data)
        res.end();
    })
 })
 app.post('/api/getUserWishListDetails',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('wishList.json',function(err,data){
        var myObject = JSON.parse(data);
        newData2={products:[]}
        for(i of myObject.products){
            console.log("check i",i)
            if(i.userID==req.body.userID){
                console.log("inside productID",req.body.userID)
                newData2.products.push(i);
            }
        }
            res.write(JSON.stringify(newData2));
            res.end();
        
    })
 })
 app.get('/api/orders',function(req,res){
    fs.readFile('orderDetails.json',function(err,data){
        console.log("data",data)
        //res.write(data);
        res.send(data)
        res.end();
    })
 })
 app.post('/api/getUserOrderDetails',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('orderDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        newData2={orders:[]}
        for(i of myObject.orders){
            console.log("check i",i)
            if(i.userID==req.body.userID){
                console.log("inside productID",req.body.userID)
                newData2.orders.push(i);
            }
        }
            res.write(JSON.stringify(newData2));
            res.end();
        
    })
 })
 app.get('/api/products',function(req,res){
    fs.readFile('products.json',function(err,data){
        console.log("data",data)
        //res.write(data);
        res.send(data)
        res.end();
    })
 })
app.get('/getStudent',function(req,res){
    fs.readFile('db1.json',function(err,data){
        console.log("data",JSON.stringify(data))
        res.write((data.toString()));
        res.end();
    })
 })
// app.get('/addStudent',function(req,res){
//     fs.readFile('db.json',function(err,data){
//         var myObject = JSON.parse(data);
//         let newData = {
//              "id": 5, "name":"product5", "amount": 4000 
//         };
//         console.log("test",myObject["students"]);
//         myObject["expense"].push(newData);
//         var newData2 = JSON.stringify(myObject);
//         fs.writeFile("db.json", newData2, (err) => {
//         if (err) throw err;
//         console.log("New data added");
//         fs.readFile('db.json',function(err,data){
//             console.log("data",JSON.stringify(data))
//             res.write((data.toString()));
//             res.end();
//         })
//         });
//     })
// })
app.post('/api/addTocart',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('cartDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        
        let newData = {
        "userID":req.body.userID,
        "name": req.body.name,
        "price": req.body.price,
        "size": req.body.size,
        "image":req.body.image,
        "cartID": myObject["products"].length +1,
        "productID":req.body.productID,
        "count":req.body.count,
        "sizesAvailable":req.body.sizesAvailable
        };
        myObject["products"].push(newData);
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("cartDetails.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data added successfully");
        fs.readFile('cartDetails.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/api/addToWishList',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('wishList.json',function(err,data){
        console.log("reading")
        var myObject = JSON.parse(data);
        
        let newData = {
            "userID":req.body.userID,
            "name": req.body.name,
            "price": req.body.price,
            "image":req.body.image,
            "wishListID": myObject["products"].length +1,
            "productID":req.body.productID,
            "sizesAvailable":req.body.sizesAvailable
        };
        myObject["products"].push(newData);
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("wishList.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data added successfully");
        fs.readFile('wishList.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/addProduct',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('db.json',function(err,data){
        var myObject = JSON.parse(data);
        
        let newData = {
             "id": req.body.id, "name":req.body.name, "amount": req.body.cost 
        };
        myObject["expense"].push(newData);
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("db.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data added successfully");
        fs.readFile('db.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/api/getTotalCartPrice',function(req,res){
    fs.readFile('cartDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        console.log("myObject",myObject)
        var totalprice=0.0;
        for(i of myObject.products){
            if(i.userID==req.body.userID){
                console.log("myObject.products",i.price)
                totalprice=totalprice+parseFloat(i.price)*i.count;
            }
        }
        console.log("totalprice",totalprice)
        res.write((totalprice.toString()));
        res.end();
    })
})
app.post('/api/incrementProductCount',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('cartDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        newData2={products:[]}
        for(i of myObject.products){
            console.log("check i",i)
            if(i.cartID==req.body.cartID && i.userID==req.body.userID){
                console.log("inside productID",req.body.cartID)
                i.count=parseInt(i.count)+1;
                console.log()
                newData2.products.push(i);
            }
            newData2.products.push(i);
        }
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("cartDetails.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data added successfully");
        fs.readFile('cartDetails.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/api/decrementProductCount',function(req,res){
    console.log("inside request",(req.body))
    fs.readFile('cartDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        newData2={products:[]}
        for(i of myObject.products){
            console.log("check i",i)
            if(i.cartID==req.body.cartID && i.userID==req.body.userID){
                console.log("inside cartID",req.body.cartID)
                i.count=parseInt(i.count)-1;
                console.log()
                newData2.products.push(i);
            }
            newData2.products.push(i);
        }
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("cartDetails.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data added successfully");
        fs.readFile('cartDetails.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/api/deleteProductFromCart',function(req,res){
    console.log("outside req id",(req.body))
    fs.readFile('cartDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        console.log("myObject",myObject)
        var newData2={products:[]};
        console.log("req cartID",req.body.cartID)
        //delete myObject["expense"][myObject["expense"].length-1];
        // myObject["orders"].splice(myObject["expense"].length-1,myObject["expense"].length-1)
        for(i of myObject.products){
            console.log("check i",i)
            if(i.cartID!=req.body.cartID){
                newData2.products.push(i);
            }
        }
        console.log("newData2",newData2);
        newData2 = JSON.stringify(newData2);
        fs.writeFile("cartDetails.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data deleted");
        fs.readFile('cartDetails.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/api/deleteProductFromWishList',function(req,res){
    console.log("outside req id",(req.body))
    fs.readFile('wishList.json',function(err,data){
        var myObject = JSON.parse(data);
        console.log("myObject",myObject)
        var newData2={products:[]};
        console.log("req cartID",req.body.wishListID)
        //delete myObject["expense"][myObject["expense"].length-1];
        // myObject["orders"].splice(myObject["expense"].length-1,myObject["expense"].length-1)
        for(i of myObject.products){
            console.log("check i",i)
            if(i.wishListID!=req.body.wishListID){
                newData2.products.push(i);
            }
        }
        console.log("newData2",newData2);
        newData2 = JSON.stringify(newData2);
        fs.writeFile("wishList.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data deleted");
        fs.readFile('wishList.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.post('/api/cancelOrder',function(req,res){
    console.log("outside req id",(req.body))
    fs.readFile('orderDetails.json',function(err,data){
        var myObject = JSON.parse(data);
        console.log("myObject",myObject)
        var newData2={orders:[]};
        console.log("req id",req.body.id)
        //delete myObject["expense"][myObject["expense"].length-1];
        // myObject["orders"].splice(myObject["expense"].length-1,myObject["expense"].length-1)
        for(i of myObject.orders){
            console.log("check i",i)
            if(i.id!=req.body.id){
                newData2.orders.push(i);
            }
        }
        console.log("newData2",newData2);
        newData2 = JSON.stringify(newData2);
        fs.writeFile("orderDetails.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data deleted");
        fs.readFile('orderDetails.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
app.get('/deleteStudent',function(req,res){
    fs.readFile('db.json',function(err,data){
        var myObject = JSON.parse(data);
        //delete myObject["expense"][myObject["expense"].length-1];
        myObject["expense"].splice(myObject["expense"].length-1,myObject["expense"].length-1)
        var newData2 = JSON.stringify(myObject);
        fs.writeFile("db.json", newData2, (err) => {
        if (err) throw err;
        console.log("New data deleted");
        fs.readFile('db.json',function(err,data){
            console.log("data",JSON.stringify(data))
            res.write((data.toString()));
            res.end();
        })
        });
    })
})
console.log("server listenning");
