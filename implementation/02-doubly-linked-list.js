// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length >= 1) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
        } else {
            let oldTail = this.tail;
            oldTail.next = newNode;
            this.tail = newNode;
            newNode.prev = oldTail;
            this.length++;
            return this;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head
        let oldHead = this.head;
        if (this.length === 1) {
            this.length--;
            this.head = null;
            return oldHead.value;
        }
        else if (this.length > 1) {
            let newHead = this.head.next;
            this.head = newHead;
            this.head.prev = null;
            this.length--;
            return oldHead.value;
        } else {
            return undefined;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        let oldTail = this.tail;
        if (!this.tail) return undefined;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
            this.length--;
            return oldTail.value;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            this.length--;
            return oldTail.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) return undefined;
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node
        if (!this.tail) return undefined;
        return this.tail.value;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
