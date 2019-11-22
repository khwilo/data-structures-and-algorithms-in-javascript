const Stack = function () {
  this.count = 0;
  this.storage = {};

  // Add a value onto the end of the stack
  this.push = value => {
    this.storage[this.count] = value;
    this.count += 1;
  };

  // Remove and return the value at the end of the stack
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count -= 1;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.size = () => {
    return this.count;
  };

  // Return the value at the end of the stack
  this.peek = () => {
    return this.storage[this.count - 1];
  };
};

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(`Current size: ${myStack.size()}`);
console.log(`Last item is: ${myStack.peek()}`);
console.log(`Pop: ${myStack.pop()}`);
console.log(`Last item is: ${myStack.peek()}`);
console.log(`Current size is: ${myStack.size()}`);
myStack.push('Free Code Camp');
console.log(`Last item is: ${myStack.peek()}`);
console.log(`Current size: ${myStack.size()}`);
