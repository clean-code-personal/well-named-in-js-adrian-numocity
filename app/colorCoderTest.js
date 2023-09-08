
let ColorPair = require('./colorPair');
let conversion = require('./conversion');
const print_manual = require('./manual');

function test(){
    pairNumber = 4;
    let testPair1 = conversion.getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "BROWN");

    pairNumber = 5;
    testPair1 = conversion.getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "WHITE");
    console.assert(testPair1.minorColor == "SLATE");

    pairNumber = 23;
    testPair1 = conversion.getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
    console.assert(testPair1.majorColor == "VIOLET");
    console.assert(testPair1.minorColor == "GREEN");

    let testPair2 = new ColorPair();
    testPair2.majorColor="YELLOW";
    testPair2. minorColor ="GREEN";
    pairNumber = conversion.getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber==18);

    testPair2 = new ColorPair();
    testPair2.majorColor="RED";
    testPair2. minorColor ="BLUE";
    pairNumber = conversion.getPairNumberFromColor(testPair2);
    console.log(`[In]Colors: ${testPair2}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber==6);
}
test();
print_manual();