var inquirer = require("inquirer");

const shapes = require("./lib/shapes");

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
			if (answers.text.length > 3) {
				console.log("Error: Text Greater Than 3 Characters");
				return;
			}
			shapes.generateSVG(answers);
		}); //pass answers to file generation
}
getUserData();
