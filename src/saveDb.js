

const db  = require("./firebase_connect")

module.exports = {
    savedata: function(req, callback){
        let testId = req.testId;
        
        db.database().ref("testUsers/" + testId).set({
            testName: req.testName,
            testAge: req.testAge,
            testSchool: req.testSchool
        });
        callback(null,{"statuscode":200,"message":"Inserted succesfully"});
    }
}
