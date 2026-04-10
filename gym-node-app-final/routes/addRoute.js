const express = require("express");
const router = express.Router();
const mysql = require("mysql2");

router.get("/add-member", (req, res) => {
    res.send(`
        <h2>Add Gym Member</h2>
        <form method="POST" action="/add-member">
            <input type="text" name="name" placeholder="Enter Name" required/><br/><br/>
            <input type="text" name="plan" placeholder="Enter Plan" required/><br/><br/>
            <input type="text" name="phone" placeholder="Enter Phone" required/><br/><br/>
            <button type="submit">save</button>
        </form>
    `);
});

// Route to insert member into DB (POST)
router.post("/add-member", (req, res) => {
    const { name, plan, phone } = req.body;

    const sql = "INSERT INTO members (name, plan, phone) VALUES (?, ?, ?)";
    
    db.query(sql, [name, plan, phone], (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error adding member");
        } else {
            res.send("Member added successfully!");
        }
    });
});

module.exports = router;