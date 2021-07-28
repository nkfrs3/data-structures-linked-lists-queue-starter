// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let head = new SinglyLinkedNode(val);
        // console.log(this);
        if (this.head === null){
          this.head = head;
          // this.tail = head;
          this.length ++;
          return this;
        }
        else {
          let oldHead = this.head;
          this.head = head;
          this.head.next = oldHead;
          this.length++;
          return this;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {return undefined;}
        let oldHead = this.head;
        this.head = this.head.next;
        this.length --;
        return oldHead;
        // Write your hypothesis on the time complexity of this method here
    }


    removeFromTail() {
        // Remove node at tail
        if (!this.head) {return undefined;}
        if (this.length === 1){
            this.head = null;
            this.length--;
            return this.head;
        }
        let oldTail;
        this.length --;

        let secondToLast = this.head;
        while (secondToLast.next.next) {
            secondToLast = secondToLast.next;
        }
        let last = secondToLast.next;
        secondToLast.next = null;
        return last;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head){return undefined;}
        return this.head.value;
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if (!this.head){return}
        let current = this.head;

        while (current) {
          console.log(`${current.value}`);
          current = current.next;
        }

        console.log("NULL");
      }
        // Write your hypothesis on the time complexity of this method here
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
