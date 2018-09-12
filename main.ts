

class MyFirstProgram {
    constructor(...argArray: Array<any>) {
    this.printArgs(argArray);
    }
    printArgs(argArray) {
        console.log(argArray);
    }
    runFirst(callback: Function) {
        console.log('This method runs first...');
    }
    rundlast() {
        console.log('This method runs last');
    }
}

const newInstance = new MyFirstProgram("a", "b", "c");

