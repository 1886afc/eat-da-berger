var express = require("express");
//importing from burger.js
var burger = require("../models/burger.js")

var router = express.Router();

router.get("/", function (req, res) {
	res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    
    burger.selectAll(function (data) {
    	//test
        console.log(data);
        var hbsObject = {
            burgers: data
        };
        //test
        //console.log("hbsObject " + JSON.stringify(hbsObject));
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne([
            "burger_name"
        ],
        [
            req.body.name
        ], function() {
            res.redirect("/burgers")
        });

});

router.put("/:id", function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect("/burgers");
    });
});



module.exports = router;