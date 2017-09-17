const currentYear = 2017;

class townElement {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class park extends townElement {
    constructor(name, buildYear, area, numberOfTree) {
        super(name, buildYear);
        this.area = area;
        this.numberOfTree = numberOfTree;
    }
    calculateDensityTree() {
        return this.numberOfTree/ this.area;
    }
    // static sumAge = 0;
    // static sumPark = 0;
    static getAverageAge() {
        return this.sumAge / this.sumPark;
    }
}

class street extends townElement {
    constructor(name, buildYear, len, size) {
        size === undefined ? size = 'normal' : size = size
        super(name, buildYear);
        this.len = len;
        this.size = size;
    }
}

list_park = [];
list_street = [];

printReport = function() {
    console.log("--------REPORT---------");
}()