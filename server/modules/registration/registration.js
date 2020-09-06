var express = require('express');

class Registration {
    constructor() {}

    async doRegisterUser(obj)  {
        // try {
            
         
        // } catch (e) {
        //     console.error(e);
        //     console.log('Error in DB Connection', error_res);
        //     var errorObj = { error: true, message: "Error in DB Conenction"};
        //     return errorObj; 
        // }

        dbClient.connect().then((dbObj)=>{
            console.log('DB Connected Successfully!');
            var db = dbObj.db(dbName);
            var role;
            if(obj.user_role.toLowerCase() === 'tutor'){
                role = 2;//Admin:1, Tutor: 2, Student:3
            }
            var doc = {
                email: obj.email,
                mobile: obj.mobile,
                password: obj.password,
                user_role: 3,
            };
            db.collection('auth_users').insertOne(doc, function (error, response) {
                dbObj.close();
                if(error) {
                    console.log('Error occurred while inserting');
                    var errorObj = { error: true, message: "Error in document insert"};
                    return errorObj; 
                } else {
                    var successObj = { error: false, message: "Successfully Inserted"};
                    console.log('inserted record', response.ops[0]);
                    return successObj;
                  // return 
                }
            });
        }).catch((error_res) => {
            console.log('Error in DB Connection', error_res);
            var errorObj = { error: true, message: "Error in DB Conenction"};
            return errorObj; 
          });

    }
}


module.exports = Registration;