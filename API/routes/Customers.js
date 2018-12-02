var express = require('express');
var router = express.Router();
var Customer=require('../models/Customer');

// Add headers
router.use(function(req, res, next) {
    // Website you wish to allow to connect. Here "*" mean all.
    res.header("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Set to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware;
    next();
  });

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        Customer.getcustomerById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
    
    else{
        Customer.getcustomers(function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }
});
    
router.post('/',function(req,res,next){ 
    Customer.createcustomer(req.body,function(err,count){
        if(err){
            res.json(err);
        }

        else{
            res.json(req.body);//or return count for 1 &amp;amp;amp; 0
        }
    });
});

router.delete('/:id?',function(req,res,next){  
    Customer.deletecustomer(req.params.id,function(err,count){
        if(err){
            res.json(err);
        }
        
        else{
            res.json(count);
        }
    });
});

router.put('/:id?',function(req,res,next){
    Customer.updatecustomer(req.params.id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;