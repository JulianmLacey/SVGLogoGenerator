const Shape = require("./shapes");

describe("shape", () => {
	describe("textColor", () => {
		it("should set the text color to white", () => {
			var conf = { text: "Hi", Tcolor: "Red", Scolor: "Blue", shape: "Circle" };
			const shape = new Shape(conf);
			shape.setTextColor("white");
			// Assert
			expect(shape.config.Tcolor).toEqual("white");
		});
	});
});

describe("shape", () => {
	describe("Color", () => {
		it("should set the color to white", () => {
			var conf = { text: "Hi", Tcolor: "Red", Scolor: "Blue", shape: "Circle" };
			const shape = new Shape(conf);
			shape.setColor("white");
			// Assert
			expect(shape.config.Scolor).toEqual("white");
		});
	});
});

describe("shape", () => {
	describe("shape", () => {
		it("should set the shape to a triangle", () => {
			var conf = { text: "Hi", Tcolor: "Red", Scolor: "Blue", shape: "Circle" };
			const shape = new Shape(conf);
			shape.setShape("Triangle");
			// Assert
			expect(shape.config.shape).toEqual("Triangle");
		});
	});
});

describe("shape", () => {
	describe("Text", () => {
		it("should set the text to yes", () => {
			var conf = { text: "Hi", Tcolor: "Red", Scolor: "Blue", shape: "Circle" };
			const shape = new Shape(conf);
			shape.setText("Yes");
			// Assert
			expect(shape.config.text).toEqual("Yes");
		});
	});
});
