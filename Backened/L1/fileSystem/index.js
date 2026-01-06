// reading and writing in a file using js

const fs = require('fs');
const path = require('path');

const data = "This is temp string data:";

// const loc =

//console.log(__dirname);     //will give u path of the file with  whole directory from c drive to ur file


const loc = path.join(__dirname, 'file1.txt');     // joins any path, useful for creating new file from code

// fs.writeFile(loc, data, (err) => {               // write function to write data in file
//     if (err) {
//         console.log("Error in writing file:", err);
//     } else {
//         console.log("File written successfully")
//     }
// });



// to read a file like temp.txt

const loc1 = path.join(__dirname, 'temp.txt');

fs.readFile(loc1, {encoding: 'utf8'}, (err, data) => {               // read function to read data from file
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        //console.log(data.toString());
    }
})




