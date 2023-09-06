const colorCode = require('./color_code');
const conversion = require('./conversion');

function print_manual(){
    let manual = "\n\nColor Coding Reference Manual:\n\n";
	let minorSize = colorCode.MinorColorNames.length;
	let majorSize = colorCode.MajorColorNames.length;
	
	for (let i = 1; i <= minorSize * majorSize; i++) {
		let colorPair = conversion.getColorFromPairNumber(i);
		manual += `Pair Number: ${i}, Major Color: ${colorPair.majorColor}, Minor Color: ${colorPair.minorColor}\n`;
	}
	
	console.log(manual);
}
module.exports=print_manual;