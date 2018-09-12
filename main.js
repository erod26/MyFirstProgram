var MyFirstProgram = /** @class */ (function () {
    function MyFirstProgram() {
        var argArray = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argArray[_i] = arguments[_i];
        }
        this.printArgs(argArray);
    }
    MyFirstProgram.prototype.printArgs = function (argArray) {
        console.log(argArray);
    };
    MyFirstProgram.prototype.runFirst = function (callback) {
        console.log('This method runs first!...');
    };
    MyFirstProgram.prototype.rundlast = function () {
        console.log('This method runs last!');
    };
    MyFirstProgram.prototype.runMiddle = function () {
        console.log('This code runs in between the other two functions....');
    };
    return MyFirstProgram;
}());
var newInstance = new MyFirstProgram("a", "b", "c");
