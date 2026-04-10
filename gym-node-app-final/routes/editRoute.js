const express = require("express");
const router = express.Router();
const mysql = require("mysql2");
const Member = require("../models/member");

router.get("/edit-member/:id", (req, res) => {
    const id = req.params.id;

    const sql = "SELECT * FROM members WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            return res.send("Error fetching data");
        }

        if (result.length === 0) {
            return res.send("Member not found");
        }

        const member = result[0];

        res.send(`
            <h2>update Member</h2>
            <form method="POST" action="/edit-member/${member.id}">
            <br>
                <input type="text" name="name" value="${member.name}" required/>
            </br>
            <br>
                <input type="text" name="plan" value="${member.plan}" required/>
            </br>
            <br>
                <input type="text" name="phone" value="${member.phone}" required/>
            </br>
                <button class="btn-update>Update</button>
            </form>
        `);
    });
});

router.post("/edit-member/:id", async (req, res) => {
    try{
	const id = req.params.id;
        const { name, plan, phone } = req.body;
	await Member.update(
	    {name, plan, phone},
	    { where: {id}}
	);
	res.redirect("/");
        }catch(err) {
            console.log(err);
            res.send("Error updating member");
        }
});

module.exports = router;