// How to create a basic map object

let num = new Map([
    [1,10],[2,10],
    [3,30],[4,40]
])

console.log(num);

// how to set map key and value /

num.set(5,50);

console.log(num);


/*
                    Methods of JavaScript Map
1.set(key, value): Adds or updates an element with a specified key and value.
2.get(key): Returns the value associated with the specified key.
3.has(key): Returns a boolean indicating whether an element with the specified key exists.
4.delete(key): Removes the element with the specified key.
5.clear(): Removes all elements from the Map.
6.size: Returns the number of key-value pairs in the Map.
*/

// for example;- 

let map1 = new Map();

map1.set("first name", "sumit");
map1.set("last name", "ghosh");
map1.set("website", "geeksforgeeks")
    .set("friend 1","gourav")
    .set("friend 2","sourav");

console.log(map1);
    
console.log("map1 has website ? "+ 
                    map1.has("website"));

console.log("map1 has friend 3 ? " + 
                    map1.has("friend 3"));

console.log("get value for key website "+
                    map1.get("website"));

console.log("get value for key friend 3 "+
                    map1.get("friend 3"));
console.log("delete element with key website " 
                    + map1.delete("website"));
    
console.log("map1 has website ? "+ 
                    map1.has("website"));

console.log("delete element with key website " +
                    map1.delete("friend 3"));

map1.clear();

console.log(map1);



/*

                                    #Advantages of Map
Map object provided by ES6. A key of a Map may occur once, which will be unique in the map’s collection. There are slight advantages to using a map rather than an object.

1. Unique Keys: A key can occur only once, ensuring uniqueness within the collection.
2. Security: No default keys are stored; only what is explicitly added, making it safer.
3. Flexible Key Types: Any value (object, function, etc.) can be used as a key.
4. Order: Maintains the order of entry insertion.
5. Size Property: The size property makes it easy to retrieve the number of elements.
6. Performance: Operations on Maps can be performed efficiently.
7. Serialization and Parsing: Custom serialization and parsing support using JSON.stringify() and JSON.parse() methods.

*/