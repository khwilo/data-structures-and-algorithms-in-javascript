function PriorityQueue() {
  const collection = [];

  this.printCollection = () => {
    console.log(collection);
  };

  this.enqueue = element => {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      let added = false;
      for (let index = 0; index < collection.length; index += 1) {
        if (element[1] < collection[index][1]) { // check the priorities
          collection.splice(index, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };

  this.dequeue = () => {
    const value = collection.shift();
    return value[0];
  };

  this.front = () => {
    return collection[0];
  };

  this.size = () => {
    return collection.length;
  }

  this.isEmpty = () => {
    return collection.length === 0;
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(['Khwilo Kabaka', 2]);
priorityQueue.enqueue(['Bruce Wayne', 3]);
priorityQueue.enqueue(['Tom Hardy', 1]);
priorityQueue.enqueue(['Emma Stone', 2]);
priorityQueue.printCollection();
priorityQueue.dequeue();
console.log(priorityQueue.front());
priorityQueue.printCollection();
