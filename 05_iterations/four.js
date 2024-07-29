const myObject = {
    js: 'javaScript ',
    cpp: 'c++',
    rb:'ruby',
    swift:'swift by apple'
}

//for in loop use for object.

for (const key in myObject) { //it use object for loop.
    //console.log(myObject[key]);
    //console.log(`${key} shortcut is for ${myObject}`)
}

const progamming = ["js","rb","py","java","cpp"];
for(const key in progamming){
    console.log(progamming[key]);
}
