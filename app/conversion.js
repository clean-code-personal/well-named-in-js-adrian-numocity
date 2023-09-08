const colorCode = require('./colorCode');
let ColorPair = require('./colorPair');

function getColorFromPairNumber(pairNumber)
{
	let minorSize = colorCode.MajorColorNames.length;
	let majorSize = colorCode.MinorColorNames.length;

	if (pairNumber < 1 || pairNumber > minorSize * majorSize)
 	{
 		throw `Argument PairNumber:${pairNumber} is outside the allowed range` 
	}
	let zeroBasedPairNumber = pairNumber - 1;
    let majorIndex = parseInt (zeroBasedPairNumber / minorSize);
    let minorIndex = parseInt(zeroBasedPairNumber % minorSize);
	let  pair = new ColorPair();
	pair.majorColor = colorCode.MajorColorNames[majorIndex];
	pair.minorColor = colorCode.MinorColorNames[minorIndex];
	return pair;
}


function getPairNumberFromColor(pair) {
    let majorIndex = -1;
    for (let i = 0; i < colorCode.MajorColorNames.length; i++) {
        if (colorCode.MajorColorNames[i] == pair.majorColor) {
            majorIndex = i;
            break;
        }
    }

    let minorIndex = -1;
    for (let i = 0; i < colorCode.MinorColorNames.length; i++) {
        if (colorCode.MinorColorNames[i] == pair.minorColor) {
            minorIndex = i;
            break;
        }
    }

    if (majorIndex == -1 || minorIndex == -1) {
        throw `Unknown Colors:${pair.toString()}`;
    }

    return (majorIndex * colorCode.MinorColorNames.length) + (minorIndex + 1);
}

 module.exports = {getColorFromPairNumber,getPairNumberFromColor};