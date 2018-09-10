//JavaScript code for data structure - queue
//fifo - first in, first out

function Queue() {

    let items = new Array();

    this.enqueue = function (element) {
        items.push(element);
    }

    this.dequeue = function () {
        //remove de first element in array
        return 'first element in array was removed: ' + items.shift();
    }

    this.front = function () {
        return 'front: ' + items[0];
    }

    this.isEmpty = function () {
        var bol = items.length == 0;
        return 'is empty? ' + bol;
    }

    this.size = function () {

        // here we have a problem, in this method my goal is return the size of the queue,
        // but in no one minute we think about push method problem, yes,
        //  because is if the user wanna pushing in queue a array of family rather than one person?? 
        // the better solution i find is using the experimental tech 'flat', 
        // using it i can get the length inside the array pushed and the length of persons in the queue.
        let size = items.flat().length;
        return 'length: ' + size;

        //other good solution with methods (filter,reduce) already supported by browsers it is:
            // var sizeInsideArray=0;
            // var length=0;
            // var total=0;
    
            // sizeInsideArray= items.filter(item=> item instanceof Array? true: false)
            // .reduce((acc,array)=> acc+array.length,0);
    
            // length = items.filter(item => item instanceof Array? false:true).
            // reduce((acc)=>acc+=1,0);
            // total = length + sizeInsideArray;
            // return 'length: ' + total;
        }
    }

    this.print = function () {
        console.log('to string: ' + items.toString());
    }

}

// here it is a experimental tech , i am using it to get the size of the queue.how it is a 
// experimental,so, I need to have my own function instead. and then that it is.
Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) {
        return this.reduce(function (flat, toFlatten) {
            return flat.concat((Array.isArray(toFlatten) && (depth - 1)) ? toFlatten.flat(depth - 1) : toFlatten);
        }, []);
    }
});

//into terminal type "node"
//console - 
bankQueue = new Queue();
var family = ['Hugo', 'Gabi', 'Levi', 'July', 'Maria'];
bankQueue.enqueue('ronaldinho');
bankQueue.enqueue('romario');
bankQueue.enqueue(family);
bankQueue.enqueue('neymar');

bankQueue.print();
console.log(bankQueue.size())
console.log(bankQueue.isEmpty())
console.log(bankQueue.front())
console.log(bankQueue.dequeue())
bankQueue.print();
