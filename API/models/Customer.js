var db=require('../dbconnection'); // Reference of dbconnection.js
 
var Customer={
    // Method to get the customers list
    getcustomers:function(callback){ 
        return db.query("Select * from customers",callback);
    },

    // Method to get a customer by his Id
    getcustomerById:function(id_client,callback){
        return db.query("select * from customers where id_client=?",[id_client],callback);
    },

    // Method to add a customer on the database
    createcustomer:function(Customer,callback){
        return db.query("Insert into customers values(?,?, ?, ?, ?, ?, ?, ?, ?, ?)",[Customer.id_client, Customer.nom, Customer.prenom, Customer.adresse1, Customer.adresse2, Customer.ville, Customer.codePostal, Customer.mail, Customer.tel, Customer.date],callback);
    },

    // Method to delete a customer from the database
    deletecustomer:function(id_client,callback){
        return db.query("delete from customers where id_client=?",[id_client],callback);
    },

    // Method to modify customers elements on the database
    updatecustomer:function(id_client,Customer,callback){
        return db.query("update customers set nom=?, prenom=?, adresse1=?, adresse2=?, ville=?, codePostal=?, mail=?, tel=?, date=? where id_client=?",[Customer.nom, Customer.prenom, Customer.adresse1, Customer.adresse2, Customer.ville, Customer.codePostal, Customer.mail, Customer.tel, Customer.date, id_client],callback);
    } 
};

module.exports=Customer;