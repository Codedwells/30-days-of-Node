//Routes are basically the same as before the diffrence is that here we use Router
// then router is exported. It is imported in app and used with app.use with the
// base route
 
const express = require('express')
const router = express.Router();
const {
	getPeople,
	addPerson,
	updatePerson,
	deletePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", addPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);

module.exports = router;
