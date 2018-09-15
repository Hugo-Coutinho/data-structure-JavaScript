// the main goal of hashtable is find the value soon as possible. 

// using hash method to get some value in a array 
// it is not necessary to do a iteration across all the array to find the value,
//  because they already know where it is every value in every key.

function HashTable() {
    var table = [];


    var valuePair = function (key, value) {
        this.key = key;
        this.value = value;
    }

    //sum all the ASCII value from key
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    this.put = function (key, value) {
        var position = loseloseHashCode(key);

        if (table[position] == undefined) {
            table[position] = new valuePair(key, value);
        } else {
            var index = ++position;
            while (table[index] != undefined) {
                index++;
            }
            table[index] = new valuePair(key, value);
        }
        console.log(position + ' - ' + key);
    }

    this.get = function (key) {
        var position = loseloseHashCode(key);
        if (table[position] != undefined) {
            if (table[position].key == key) {
                return table[position].value;
            } else {
                var index = ++position;
                while (table[index] != undefined && (table[index].key != key)) {
                    index++;
                }
                if (table[index] && table[index].key) {
                    return table[index].value;
                }
            }
        }
        return undefined;
    };

    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    }

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i].value);
            }
        }
    }
}

var hash = new HashTable();
hash.put('Flamengo', 'Paqueta');
hash.put('Barcelona', 'Arthur');
hash.put('Real Madrid', 'Vini JR');

console.log(hash.get('Flamengo'));

hash.remove('Flamengo');
console.log(hash.get('Flamengo'));
hash.print();
