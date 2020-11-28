const express = require("express");
const Item = require("../models/item");
var Cart = require("../models/cart");
// const { CLIENT_RENEG_LIMIT } = require("tls");
const router = express.Router();
let newarr = [];
// const items = [];
router.post("", (req, res, next) => {
    console.log(req.body);
    console.log(req.body._id);
    Item.findById(req.body._id).then(Item2 => {
        if (Item2) {
            console.log(Item2.id);
            Cart.push(Item2);
            res.status(200).json({ message: "Item added to cart", item: Item2 });
            console.log(res)
        } else {
            res.status(404).json({ message: "Item not found!" });
        }
    });
});

router.get("", (req, res, next) => {
    res.status(200).json({
        message: "cart fetched successfully!",
        Items: Cart
    });
    console.log(res)
});

router.delete("/:id", (req, res, next) => {
    console.log(req.params.id);
    console.log(Cart.toString())
    let cartx = Cart;

    newarr = [];

    cartx.forEach(element => {
        console.log(element._doc._id.toString());
        if (element._doc._id.toString() !== req.params.id) {
            console.log("2");
            newarr.push(element);
        }
        else {
            console.log("1");

        }

    })

    console.log(newarr)
    Cart = newarr
    res.status(200).json({
        message: "item removed from cart!",
        Items: newarr
    });

});

module.exports = router;
