function Queue() {
  collection = [];

  this.print = () => {
    console.log(collection);
  }

  this.enqueue = element => {
    collection.push(element);
  };

  this.dequeue = element => {
    return collection.shift(element);
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  };

  this.empty = () => {
    return collection.length === 0;
  };
}

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.print();
queue.dequeue();
console.log(queue.front());
queue.print();