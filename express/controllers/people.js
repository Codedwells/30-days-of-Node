//Controllers include functions that contain the logic of the routes 
// They  are exported and imported in the routes files and passed with their specific
// route 
const people = require("../people");
const getPeople = (req, res) => {
	res.status(200).json({ status: "success", data: people });
}

const addPerson = (req, res) => {
	const { names , id ,age } = req.body;
	res.status(200).send({ status: "success", data: [...people, {id:id, name:names, age:age }] });
}

const updatePerson = (req, res) => {
	const { names } = req.body;
	const { id } = req.params;

	let newPeople = [...people];

	if (newPeople.length < id) {
		return res.status(200).send(`We did not find ${names} of id ${id}`);
	}
	var elem = newPeople.filter((curr) => curr.id == id);
	var index = newPeople.indexOf(elem[0]);
	elem[0].name = names;
	var currObj = elem[0];
	newPeople[index] = currObj;
	res.status(200).json(newPeople);
}

const deletePerson = (req, res) => {
	const included = people.find((curr) => curr.id == req.params.id);
	if (included) {
		var newPeoples = people.filter((curr) => curr.id !== Number(req.params.id));
		return res.status(200).json(newPeoples);
	} else {
		res.status(404).send("The person was not found");
	}
}


module.exports = {
    getPeople,
    addPerson,
    updatePerson,
    deletePerson
}

