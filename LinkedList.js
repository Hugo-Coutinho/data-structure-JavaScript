//dynamic data structure
function LinkedList() {

    //class node
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;

    //add element in the last position
    this.append = function (element) {
        let node = new Node(element),
            current;

        if (head == null) {
            //add the first element for the list.
            head = node;
        } else {
            current = head;
            //iteration until the next current is null.
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };

    this.removeAt = function (position) {

        //verify if the position it is a possible position to remove .
        if ((position >= -1) && (position <= length)) {
            let current = head
            let previous
            let index = 0;
            let removed = false;

            if (position == 0) {
                if (current && current.next) {
                    //remove at first position, so the head will set the next current(passing throught the current "current")
                    head = current.next;
                    removed = true;
                }
            } else {
                //will be road it while the position is not get.
                while (index++ < position) {
                    //the variable "previous" is set to the variable "current" value, so then "current" is set to the next current value
                    previous = current;
                    current = current.next;
                }
                //that way we already have the we want remove it (the current value), 
                //so it is simple, just make the "previous.next" seting to "current.next" passing througt the "current" value
                removed = true;
                previous.next = current.next;
            }
            if (removed) {
                length--;
                console.log("removeAt: successfully- " + current.element);
            } else {
                console.log("removeAt: is empty");
            }
        } else { console.log("removeAt: number is not rigth- " + position); }

    }

    this.appendAt = function (element, position) {

        let node = new Node(element);
        let current = head;
        let index = 0;
        let previous;

        // check is not a crazy position
        if (position > -1 && position <= length) {
            // the list being empty the element will be append at position 0
            if (position == 0) {
                node.next = current;
                head = node;
            } else {
                // rolling until the wished position is found and append the element into it.
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return toString();

        } else { console.log("appendAt: number is not rigth- " + position); }


    }

    this.toString = function () {

        let current = head;
        string = '';
        while (current) {
            string += current.element + (current.next ? ', ' : '');
            current = current.next;
        }
        return "iteration with list- " + string;
    }

    this.remove = function (element) {

        let index = this.indexOf(element);
        return this.removeAt(index);
    }


    this.indexOf = function (element) {

        let current = head;
        let index = 0;

        while (current) {
            if (current.element == element) {
                console.log("indexOf: position = " + index + " element= " + element);
                return index;
            }
            index++;
            current = current.next;
        }
        console.log("indexOf: element does not exist in your linkedList");
    }

    this.isEmpty = function () {
        return length == 0;
    }

    this.size = function () {
        console.log("size of list- " + length);
    }

    this.getHead = function () {
        let getHead = head;
        do {
            console.log("Head: " + getHead.element);
            getHead = getHead.next;
        } while (getHead)
    }
}

let shopList = new LinkedList();
shopList.append("banana");
shopList.append("iphone");
shopList.append("tv");
shopList.appendAt("headPhone", 2);
shopList.removeAt(0);
shopList.indexOf("tv");
shopList.remove("tv");
shopList.size();
console.log("List is really empty? " + shopList.isEmpty());
console.log(shopList.toString());
shopList.getHead();

