function DoublyLinkedList() {

    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
    let length = 0;
    let head = null;
    let tail = null;


    this.removeAt = function (position) {

        //verify if the number is not a mad one.
        if (position > -1 && position < length) {
            let current = head,
                previous,
                index = 0;

            // the first position?
            if (position == 0) {
                head = current.next;
                if (length == 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position == length) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                previous.next ? previous.next.prev = previous.next : null;
            }
            this.head = previous;
            length--;
            return "element removed: " + current.element;
        } else {
            return 'removed: no one';
        }
    };

    this.insert = function (position, element) {


        //just get in if the number is not a mad one.
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) {
                if (!head) {
                    //list is empty so it is just bind 'head' and 'tail' with new node
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
                // set number into the last position
            } else if (position == length - 1) {

                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.prev = current;
                current.next = node;
                this.head = current;

                //insert number in desired position
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                updateList(previous, current, node);
            }
            length++;
            return element + ' was added successfully';
        } else {
            return 'the position ' + position + ' is not valid.Position between 0 until ' + length + ' it is a good one.' + 'so the ' + element + ' was not added!';
        }
    }
    this.toString = function () {
        // this show the first element until the last.
        let current = head;
        string = '';
        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        console.log("iteration with list- " + string);
    }
    function updateList(pr, cur, no) {

        pr.next = no;
        no.prev = pr;

        no.next = cur;
        cur ? cur.prev = no : cur = no;
        this.head = cur;
    }
}


flamengonPlayersList = new DoublyLinkedList();
console.log(flamengonPlayersList.insert(0, 'Diego'));
console.log(flamengonPlayersList.insert(1, 'Paqueta'));
console.log(flamengonPlayersList.insert(2, 'Vini Junior'));
console.log(flamengonPlayersList.insert(1, 'Lincoln'));
console.log(flamengonPlayersList.insert(5, 'rene'));
console.log(flamengonPlayersList.insert(3, 'vitinho'));
console.log(flamengonPlayersList.removeAt(0));
console.log(flamengonPlayersList.insert(0, 'Leo Duarte'));
console.log(flamengonPlayersList.insert(10, 'berrio'));
console.log(flamengonPlayersList.insert(4, 'Cuellar'));
console.log(flamengonPlayersList.insert(6, 'Diego Alves'));
console.log(flamengonPlayersList.removeAt(6));
console.log(flamengonPlayersList.removeAt(3));
flamengonPlayersList.toString();
