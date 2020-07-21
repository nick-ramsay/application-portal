
//const db = require("../models");
require('dotenv').config();
const nodemailer = require("nodemailer");
const keys = require("../keys");

const gmailUserId = keys.gmail_credentials.gmailUserId;
const gmailPassword = keys.gmail_credentials.gmailPassword;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUserId,
      pass: gmailPassword // naturally, replace both with your real credentials or an application-specific password
    }
  });
  

module.exports = {
    sendTestEmail: function (req, res) {

        let mailOptions = {
           from: 'applications.nickramsay@gmail.com',
           to: req.body[0].recipientEmail,
           subject: '"' + req.body[0].subject + '" from ' + req.body[0].senderName,
           text: req.body[0].message
         };
   
        transporter.sendMail(mailOptions, function(error, info){
           if (error) {
             console.log(error);
           } else {
             console.log('Email sent: ' + info.response);
           }
         });
   
         return console.log("Called send dummy e-mail controller...");
   
       }
    /*
    //sendTwilioSMS: function(req,res) {
    console.log(req.body);
    client.messages
      .create({body: req.body.text, from: '+61488839145', to: '+61' + req.body.customerPhone})
      .then(message => console.log(message.sid));
    },
    createAccount: function (req, res) {
        db.Accounts
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    editAccount: function (req, res) {
        console.log("Edit customer controller called...");
        console.log(req.body);
        db.Accounts
            .updateOne({ _id: req.body.businessID }, {
                businessName: req.body.businessName,
                ownerName: req.body.ownerName,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                postcode: req.body.postcode,
                hourlyRate: req.body.hourlyRate,
                specialty: req.body.specialty
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    getAccountData: function (req, res) {
        db.Accounts
            .find({ _id: req.body.contextID }, { hourlyRate: 1, specialty: 1, businessName: 1, phone: 1, ownerName: 1, email: 1, address: 1, address: 1, city: 1, state: 1, postcode: 1 }).sort({ lastName: 1, firstName: 1 })
            .then(dbModel => res.json(dbModel[0]))
            .catch(err => res.status(422).json(err));
    },
    login: function (req, res) {
        db.Accounts
            .find({ email: req.body.loginEmail, password: req.body.loginPassword })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //START: Customer controllers...
    getCustomers: function (req, res) {
        console.log(req.body);
        db.Customers
            .find({ contextID: req.body.contextID }).sort({ lastName: 1, firstName: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createCustomer: function (req, res) {
        console.log("Create customer controller called...");
        db.Customers
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    editCustomer: function (req, res) {
        console.log("Edit customer controller called...");
        console.log(req.body);
        db.Customers
            .updateOne({ _id: req.body.customerID }, {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                postcode: req.body.postcode
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    cancelCustomer: function (req, res) {
        console.log("Cancel customer controller called...");
        console.log(req.body);
        db.Customers
            .updateOne({ _id: req.body.customerID }, { cancelled: req.body.cancelledDate })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    reactivateCustomer: function (req, res) {
        console.log("Reactivate customer controller called...");
        console.log(req.body);
        db.Customers
            .updateOne({ _id: req.body.customerID }, { $unset: { cancelled: "" } })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    //END: ...Customer controllers
    //START: Inventory controllers...
    createInventoryItem: function (req, res) {
        console.log("Create inventory controller called...");
        console.log(req.body);
        db.Inventory
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    getInventory: function (req, res) {
        db.Inventory
            .find({ contextID: req.body.contextID }).sort({ itemName: 1, manufacturer: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    editInventory: function (req, res) {
        console.log("Edit inventory controller called...");
        console.log(req.body);
        db.Inventory
            .updateOne({ _id: req.body.inventoryID }, {
                itemName: req.body.itemName,
                manufacturer: req.body.manufacturer,
                price: req.body.price
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    inventoryTransaction: function (req, res) {
        console.log("Purchase inventory controller called...");
        console.log(req.body);
        db.Inventory
            .updateOne({ _id: req.body.inventoryID }, {
                $inc: { quantity: req.body.quantity }
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    cancelInventory: function (req, res) {
        console.log("Cancel inventory controller called...");
        console.log(req.body);
        db.Inventory
            .updateOne({ _id: req.body.inventoryID }, { cancelled: req.body.cancelledDate })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    cancelInventory: function (req, res) {
        console.log("Cancel inventory controller called...");
        console.log(req.body);
        db.Inventory
            .updateOne({ _id: req.body.inventoryID }, { cancelled: req.body.cancelledDate })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    reactivateInventory: function (req, res) {
        console.log("Reactivate inventory controller called...");
        console.log(req.body);
        db.Inventory
            .updateOne({ _id: req.body.inventoryID }, { $unset: { cancelled: "" } })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    //END:...Inventory controllers

    //START:Transaction controllers...

    getTransactions: function (req, res) {
        db.Transactions
            .find({ contextID: req.body.contextID })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    postTransaction: function (req, res) {
        console.log("Post transaction controller called...");
        console.log(req.body);
        db.Transactions
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },

    //END:...TransactionControllers
    //START: Project controllers...

    createProject: function (req, res) {
        console.log("Create project controller called...");
        console.log(req.body);
        db.Projects
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    editProject: function (req, res) {
        console.log("Edit project controller called...");
        console.log(req.body);
        db.Projects
            .updateOne({ _id: req.body.projectID }, {
                name: req.body.name,
                status: req.body.status,
                customer: req.body.customer,
                completedDate: req.body.completedDate,
                hours: req.body.hours,
                hourlyRate: req.body.hourlyRate,
                items: req.body.items,
                comments: req.body.comments,
                totalInventoryFees: req.body.totalInventoryFees,
                totalHourlyFees: req.body.totalHourlyFees,
                billed: req.body.billed
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    getProjects: function (req, res) {
        console.log(req.body);
        db.Projects
            .find({ contextID: req.body.contextID }).sort({ createdDate: 1, name: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getCompleteProjects: function (req, res) {
        console.log(req.body);
        db.Projects
            .find({ contextID: req.body.contextID, completedDate: { $exists: true }, completedDate: {$ne:null}, billed: false }).sort({ createdDate: 1, name: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    markProjectBilled: function (req, res) {
        console.log("Mark project billed controller called...");
        console.log(req.body);
        db.Projects
            .updateOne({ _id: req.body.projectID }, {
                billed: true
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    //END:...ProjectControllers
    //Start: BillingControllers...
    getBills: function (req, res) {
        console.log(req.body);
        db.Bills
            .find({ contextID: req.body.contextID }).sort({ createdDate: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createBill: function (req, res) {
        console.log("Create bill controller called...");
        console.log(req.body);
        db.Bills
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    },
    billTransaction: function (req, res) {
        console.log("Purchase inventory controller called...");
        console.log(req.body);
        db.Bills
            .updateOne({ _id: req.body.billID }, {
                $inc: { revenueCollected: req.body.amount }
            })
            .then(dbModel => res.json(dbModel))
            .then(console.log(req.body))
            .catch(err => res.status(422).json(err));
    }
    //END: ...BillingControllers
    */
};