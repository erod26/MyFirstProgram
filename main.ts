

class MyFirstProgram {
    constructor(...argArray: Array<any>) {
    this.printArgs(argArray);
    }
    printArgs(argArray) {
        console.log(argArray);
    }
    runFirst(callback: Function) {
        console.log('This method runs first!...');
    }
    rundlast() {
        console.log('This method runs last!');
    }
    runMiddle() {
        console.log('This code runs in between the other two functions....!')
    }
}

const newInstance = new MyFirstProgram("a", "b", "c");

