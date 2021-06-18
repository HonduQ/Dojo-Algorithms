class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this
    }
    display() {
        var currentNode = this.head;
        var count = 1;
        while(currentNode) {
            console.log(`The value of node # ${count} is ${currentNode.value}.`)
            currentNode = currentNode.next
            count++;
        }
    }
}
myList = new SLL()
myList.addFront("blue")
myList.addFront("red")
myList.addFront("orange")
myList.display()