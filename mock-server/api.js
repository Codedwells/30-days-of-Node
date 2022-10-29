const getData = async () => {
	try {
		const res = await fetch("http://localhost:8000/");
		if (res.ok) {
			return res.json();
		} else {
			throw new Error(`${res.status}`);
		}
	} catch (err) {
		console.error(err);
	}
};

const naming = document.querySelector("#name");
var description = document.querySelector("#des");
const tips = document.querySelector("#tips");

const promise = getData();
promise.then((data) => {
        description.textContent += data[0]["description"];
        naming.textContent += data[0]["name"];
        tips.textContent += data[0]["brewers_tips"];
	console.log(data[0]["brewers_tips"]);
});



// const createList = ()=>{
//         data.array.forEach(item => {

//         });
// }
