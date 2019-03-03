//Set- A collection with numbers unordered and cannot be duplicated
// there is too a idea the 'null set', a set without elements. 

function Set() {

    //we could use array too, but with an object in JS we cannot set two different properties, so this resolves the duplicate problem.
    let items = {};

    this.has = function (value) {
        // hasOwnProperty method returns true if has value we passed through the param.
        return items.hasOwnProperty(value);
    };

    this.add = function (value) {
        //if the value is not in items so we add to it.
        if (!this.has(value)) {
            //we are adding value like the key and value, because adding it like key can help us to find it (hasOwnProperty).
            items[value] = value;
            return true;
        }
        return false;
    };

    this.delete = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    this.size = function () {
        //keys () method brings to us all the properties of the specified array, and then we can use the property length to see the size of this item.
        return Object.keys(items).length;
    };

    //method for extracting all the item values in array form
    this.values = function () {
        let values = [];
        for (let i = 0, keys = Object.keys(items); i < keys.length; i++) {
            values.push(items[keys[i]]);
        }
        return values;
    };

    //union - two set data, return a new set with all the all set's elements.
    this.union = function (otherSet) {
        let unionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        values = otherSet.values();
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }

        return unionSet;

    };

    //two sets data, return a new set with just elements presents in all sets.
    this.intersection = function (otherSet) {
        let intersectionSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };

    //two set data, return a new set with all different element between then.
    this.difference = function (otherSet) {
        let differenceSet = new Set();

        let values = this.values();
        for (let i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    };

    // subset - current set has all your values in the other set who you will compare too.
    this.subset = function (otherSet) {
        if (this.size() > otherSet.size()) {
            return false;
        } else {

            let values = this.values();
            //compare the current values with the values the other set,
            // if not there any value in another set, so in this way, 
            //it means the current set is not a subset of the other set.
            for (let i = 0; i < values.length; i++) {
                if (!otherSet.has(values[i])) {
                    return false;
                }
            }
            return true;
        }
    };

}


let set = new Set();

set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size());

set.add(2);
console.log(set.values());
console.log(set.has(2));
console.log(set.size());

set.delete(1);
console.log(set.values());

set.delete(2);
console.log(set.values());

let setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

let setB = new Set();
setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

let unionAB = setA.union(setB);
console.log('union- ' + (unionAB.values()));

let intersectionAB = setA.intersection(setB);
console.log('intersection- ' + (intersectionAB.values()));

let differenceAB = setA.difference(setB);
console.log('difference- ' + (differenceAB.values()));

console.log('subSet- ' + setA.subset(setB));

