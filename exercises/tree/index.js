// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }
  remove(data) {
    this.children = this.children.filter(element => {
      return element.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift(); // takes out first ellement of arr
      arr.push(...node.children); // is equivalent to below.
      // for (let child of node.children) {
      //   arr.push(child);
      // }
      fn(node);
    }
  }
  traverseDF(fn) {
    let arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children); // add on to front of array
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
