const express = require("express");
const multer = require("multer");
const Item = require("../models/item");
const router = express.Router();
const mongoose = require("mongoose");

const MIME_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/jpg": "jpg"
};

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "backend/images");
    },
    filename: function(req, file, cb) {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext);
    }
});

router.post(
    "",
    multer({ storage: storage }).single("image"),
    (req, res, next) => {
        const url = req.protocol + "://" + req.get("host");
        let fileName;

        if (!req.file) {

            console.log('No file')
            fileName = 'noImage.jpg';
        } else {
            fileName = req.file.filename
        }
        const item = new Item({
            _id: mongoose.Types.ObjectId(),
            title: req.body.title,
            disc: req.body.disc,
            category: req.body.category,
            price: req.body.price,
            image: url + "/images/" + fileName
        });
        console.log(item.disc);
        item.save().then(createdItem=> {
            res.status(201).json({
                message: "Item added successfully",
                item: createdItem
            });
        });
    }
);


router.get("", (req, res, next) => {
    Item.find().then(documents => {
        res.status(200).json({
            message: "Items fetched successfully!",
            Items: documents
        });
    });
});

router.get("/:id", (req, res, next) => {
    Item.findById(req.params.id).then(Item => {
        if (Item) {
            res.status(200).json(Item);
        } else {
            res.status(404).json({ message: "Item not found!" });
        }
    });
});

router.delete("/:id", (req, res, next) => {
    console.log(Item.toString())
    Item.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Item deleted!" });
    });
});

module.exports = router;
