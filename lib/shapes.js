var fs = require("fs");
class shape{
    constructor(userconfig){
        this.content = `<svg height="300" width="200">`;
        this.text = ` fill="${userconfig.Scolor}"/><text x="100" y="150" dominant-baseline="middle" text-anchor="middle" font-size="40" color="${userconfig.Tcolor}">${userconfig.text}</text></svg>`;
        this.config = userconfig;
    }
    render(){
    fs.writeFile("logo.svg", this.content, (err) =>
    err ? console.error(err) : console.error("Generated logo.svg"));
    console.log(this.content);
    }
}

class triangle extends shape{
    constructor(userconfig){
        super(userconfig);
        this.content += `<polygon points="100,50 10,200 190,200"` + this.text;
    }
}



class circle extends shape{
    constructor(userconfig){
        super(userconfig);
        this.content += `<circle cx="100" cy="150" r="75"`+this.text; 
    }
}

class square extends shape{
    constructor(userconfig){
        super(userconfig);
        this.content += `<rect x="10" y="60" width="180" height="180"`+this.text;
    }
}
const generateSVG = (userData)=>{
    var newIMG = {
        "Circle": new circle(userData),
        "Triangle":new triangle(userData),
        "Square":new square(userData),
    }
    var IMGconfig = newIMG[userData.shape];
    IMGconfig.render();
    return "";
}
exports.generateSVG = generateSVG;