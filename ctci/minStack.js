class Stack { 
    constructor() {
        this.data = [];
        this.min = Number.MAX_SAFE_INTEGER;
    }

    push(data) {
        if(data < this.min) {
            this.min = data;
        }

        this.data.push(data);
    }

    pop() {
        var returnValue = -1;
        returnValue = this.data.pop();

        if(this.data.length === 0) {
            this.min = Number.MAX_SAFE_INTEGER;
        } else {
            this.min = Math.min(...this.data);
        }
        
        return returnValue;
    }

    min() {
        return this.min;
    }
}

var testStack = new Stack();
testStack.push(2);
testStack.push(6);
testStack.push(4);
testStack.push(1);
testStack.push(10);

// bottom [2,6,4,1,10] top

console.log(testStack); // min is 1
console.log(testStack.pop()); // returns 10, [2,6,4,1], min is still 1
console.log(testStack.pop()); // returns 1, [2,6,4], min is now 2
console.log(testStack.pop()); // return 4, min is still 2
console.log(testStack.pop()); // return 6, min is still 2
console.log(testStack.pop()); // return 2, min is now -1 (means non existent in this case)
console.log(testStack); // returns an empty []
