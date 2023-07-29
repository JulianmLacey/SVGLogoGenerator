var fs = require("fs");
class shape {
	constructor(userconfig) {
		this.config = userconfig;
		this.content = `<svg height="300" width="200">`;

		this.shapeConfig = `<circle cx="100" cy="150" r="75"`;
	}

	render() {
		this.text = ` fill="${this.config.Scolor}"/><text x="100" y="150" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.config.Tcolor}">${this.config.text}</text></svg>`;
		this.content += this.shapeConfig + this.text;
		fs.writeFile("logo.svg", this.content, (err) => (err ? console.error(err) : console.error("Generated logo.svg")));
		//console.log(this.content);
		return this.content;
	}
}

class triangle extends shape {
	constructor(userconfig) {
		super(userconfig);
		this.shapeConfig = `<polygon points="100,50 10,200 190,200"`;
	}
}

class circle extends shape {
	constructor(userconfig) {
		super(userconfig);
		this.shapeConfig = `<circle cx="100" cy="150" r="75"`;
	}
}

class square extends shape {
	constructor(userconfig) {
		super(userconfig);
		this.shapeConfig = `<rect x="10" y="60" width="180" height="180"`;
	}
}

const generateSVG = (userData) => {
	var newIMG = {
		Circle: new circle(userData),
		Triangle: new triangle(userData),
		Square: new square(userData),
	};
	var IMGconfig = newIMG[userData.shape];

	return IMGconfig.render();
};
exports.generateSVG = generateSVG;
/*
shape.prototype.setColor = function (col) {
	this.config.Scolor = col;
};

shape.prototype.setTextColor = function (col) {
	this.config.Tcolor = col;
};

shape.prototype.setText = function (txt) {
	this.config.text = txt;
};
shape.prototype.setShape = function (shape) {
	this.config.shape = shape;
};
module.exports = shape;
*/
