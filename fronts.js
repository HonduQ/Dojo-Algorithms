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
    viewHead() {
        var currentNode = this.head;
        // while(currentNode) {
            console.log(`the value of the head node is ${currentNode.value}`)
            currentNode = currentNode.next
    }
    viewAll() {
        var currentNode = this.head;
        while(currentNode) {
            console.log(`the value of the current node is ${currentNode.value}`)
            currentNode = currentNode.next
        }
    }
    removeFront() {
        if (this.next == null){
            return null;
        }
        this.head = this.next;
        return this.head
    }
    // something wrong with removeFront, I will come back to it later
}
myList = new SLL()
myList.addFront("blue")
myList.addFront("red")
myList.addFront("orange")
console.log(myList.removeFront())
myList.viewHead()
myList.viewAll()
console.log(myList)