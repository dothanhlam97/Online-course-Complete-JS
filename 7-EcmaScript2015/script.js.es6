const currentYear = 2017;

class townElement {
    constructor (name, buildYear) {
        this.buildYear = buildYear;
        this.name = name;
        this.age = currentYear - buildYear;
    }
}

class park extends townElement {
    constructor(name, buildYear, area, numberOfTree) {
        super(name, buildYear);
        this.area = area;
        this.numberOfTree = numberOfTree;
    }
    calculateDensityTree() {
        return this.numberOfTree * 1.0 / this.area;
    }
    printReport() {
        var treeDensity = this.calculateDensityTree();
        console.log(this.name + ' has a tree density of ' + treeDensity + ' trees per square km.');
    }
}

class street extends townElement {
    constructor(name, buildYear, len, size) {
        size === undefined ? size = 3 : size = size
        super(name, buildYear);
        this.len = len;
        this.size = size;
    }
    printReport() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(this.name + ', build in ' + this.buildYear + ', is a ' + classification.get(this.size) + ' street.');
    }
}

var allParks = [new park('Green Park', 1987, 0.2, 215),
                new park('National Park', 1894, 2.9, 3541),
                new park('Oak Park', 1953, 0.4, 949)];

var allStreets = [new street('Ocean Avenue', 1999, 1.1, 4),
                  new street('Evergreen Street', 2008, 2.7, 2),
                  new street('4th Street', 2015, 0.8),
                  new street('Sunset Boulevard', 1982, 2.5, 5)];


printReportPark = function() {
    console.log("--------REPORT PARK---------");
    allParks.forEach(cur => {
       cur.printReport();
    });
    const numberPark = allParks.length;
    let sumAge = 0;
    allParks.forEach(cur => {
        sumAge += cur.age;
    });
    console.log('Our ' + numberPark + ' parks have an average of ' + sumAge * 1.0 / numberPark + ' years.');
    const index = allParks.findIndex(cur => cur.numberOfTree >= 1000);
    console.log(allParks[index].name + ' has more than 1000 trees.');
}()

printReportStreet = function() {
    console.log("--------REPORT STREET---------");
    const [totalLength, avgLength] = function() {
        let totalLength = 0;
        allStreets.forEach(cur=>{
            totalLength+= cur.len;
        });
        return [totalLength, totalLength * 1.0 / allStreets.length];
    }();
    console.log('Our ' + allStreets.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + avgLength + ' km.');
    allStreets.forEach(cur => cur.printReport());
}()