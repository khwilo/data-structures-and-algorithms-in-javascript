function mySet() {
  let collection = []; // the collection to hold the set

  // check the presence of an element and return true or false
  this.has = element => {
    return (collection.indexOf(element) !== -1);
  };

  // return all the values in the set
  this.values = () => {
    return collection;
  };

  // add an element to the set
  this.add = element => {
    let result = false;

    if (!this.has(element)) {
      collection.push(element);
      result = true;
    }

    return result;
  };

  // remove an element from the set
  this.remove = element => {
    let result = false;

    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      result = true;
    }

    return result;
  };

  // return the size of the collection
  this.size = () => {
    return collection.length;
  };

  // return the union of two sets
  this.union = otherSet => {
    const unionSet = new mySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();

    firstSet.forEach(element => unionSet.add(element));
    secondSet.forEach(element => unionSet.add(element));

    return unionSet;
  };

  // return the intersection of two sets as a new set
  this.intersection = otherSet => {
    const intersectionSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach(element => {
      if (otherSet.has(element)) {
        intersectionSet.add(element);
      }
    });

    return intersectionSet;
  };

  // return the difference of two sets as a new set
  this.difference = otherSet => {
    const differenceSet = new mySet();
    const firstSet = this.values();

    firstSet.forEach(element => {
      if (!otherSet.has(element)) {
        differenceSet.add(element);
      }
    });

    return differenceSet;
  };

  // test if the set is a subset of a different set
  this.subset = otherSet => {
    const firstSet = this.values();

    return firstSet.every(value => otherSet.has(value));
  };
}

const setA = new mySet();
const setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());
