const express = require('express');
const router = express.Router();
const Contact = require('../db/models/Contact');

router.get('/', async (req, res) => {

    try {
        
        const contacts = await Contact.find().lean();

        res.status(200).json({
            status: true,
            content: {
                data: contacts
            }
        });

    } catch (error) {
        
        console.error(error);

        res.status(500).json({
            status: false,
            errors: [{
                message: "Some Internal Server Error Occured!"
            }]
        });
    }
});

router.post('/', async (req, res) => {

    try {
        
        const contact = await Contact.findOne({ $or: [{ Name: req.body.Name }, { Contact: req.body.Contact }]}).lean();

        if(contact) {

            res.status(400).json({
                status: false,
                errors: [{
                    param: "Name, Contact",
                    message: "Contact with the same Name or Number already exist!"
                }]
            });

            return;
        }

        const createdContact = await Contact.create(req.body);

        res.status(200).json({

            status: true,
            content: {
                data: createdContact
            }
        });

    } catch (error) {
        
        console.error(error);

        res.status(500).json({
            status: false,
            errors: [{
                message: "Some Internal Server Error Occured!"
            }]
        });
    }

});

router.delete('/', async (req, res) => {

    try {

        await Contact.deleteOne({ Name: req.body.Name });

        res.status(200).json({
            status: true,
        });

    } catch (error) {
        
        console.error(error);

        res.status(500).json({
            status: false,
            errors: [{
                message: "Some Internal Server Error Occured!"
            }]
        });
    }

});

module.exports = router;
