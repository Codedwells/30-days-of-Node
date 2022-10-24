//This is a more cleaner Promise base file Read and Write
//This is cleaner and more in use

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
	try {
		const file1 = await readFile("./path/hello/world.txt", "utf-8");
		await writeFile(
			"./path/hello/written.txt",
			"Hello this is written in NodeJs....",
			"utf-8",
			{ flag: "a" }
		);
		const file2 = await readFile("./path/hello/written.txt", "utf-8");
		console.log(file1, file2);
	} catch (error) {
		console.log(error);
	}
};

//Invoke the asynchronous function
start();
