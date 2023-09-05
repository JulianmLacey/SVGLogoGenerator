var inquirer = require("inquirer");

const shape = require("./lib/shapes");

function getUserData() {
	//Prompt User
	inquirer
		.prompt([
			{ type: "input", message: "Text: ", name: "text" },
			{ type: "input", message: "Text Color: ", name: "Tcolor" },
			{ type: "input", message: "Shape Color: ", name: "Scolor" },
			{
				type: "list",
				message: "Shape: ",
				name: "shape",
				choices: ["Circle", "Triangle", "Square"],
			},
		])
		.then((answers) => {
			console.log(answers);
			if (answers.text.length > 3) {
				console.log("Error: Text Greater Than 3 Characters");
				return;
			}
			console.log("Generating SVG...");
			const shp = new shape();
			shp.generateSVG(answers);
		}); //pass answers to file generation
}

getUserData();
