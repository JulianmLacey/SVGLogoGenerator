//prompt inquirer
    //text - up too 3 char
    //text color
    //list of shapes (circle, color, square)
    //shape color


    var inquirer = require("inquirer");

    const shapes = require('./lib/shapes');

    function getUserData(){
        //Prompt User
        inquirer.prompt([
            {type: "input",message: "Text: ",name: "text", },
            {type: "input",message: "Text Color: ",name: "Tcolor", },
            {type: "input",message: "Shape Color: ",name: "Scolor", },
            {type: "list", message: "Shape: ", name: "shape", 
            choices: ["Circle", "Triangle", "Square"] }])
            .then(answers => { shapes.generateSVG(answers);});//pass answers to file generation

            
    }
    getUserData();