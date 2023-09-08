function ColorPair(){
    this.majorColor;
    this.minorColor;
}

ColorPair.prototype.toString = function () {
    return `MajorColor:${this.majorColor}, MinorColor:${this.minorColor}`;
}

module.exports = ColorPair;