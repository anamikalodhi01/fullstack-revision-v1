// data lena hai input1.txt se or input2.txt se data merge krna hai or sort krna hai or ek output.txt file main output dena hai wo output file create honi chiye data file ke <i class="fa fa-android
// asynchronous code likhna pdega is task ke liye
// jab ek task dusre task pe dpend krta hai to use callback hell kehte hai
// ise avoid krne ke liye promises or async await ka use krte hai

// file system main bs read or write ananchiye" 


const fs = require('fs');
const path = require('path');

function getData(fileName){
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname, 'data', fileName);
        fs.readFile(loc, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

getData('input1.txt')

.then((x) =>{
    getData('input2.txt')
    .then((y) => {
        let data1 = x.split('\r\n')
        let data2 = y.split('\r\n')

        let finalData = data1.concat(data2);
        //let finalData = [...data1, ...data2];        // spread operator
        finalData.sort((a,b) => a-b);
        //console.log(finalData);
        finalData.sort((a, b) => a - b);
        let loc = path.join(__dirname, 'data', 'output.txt');
        finalData = finalData.join('\r\n');
        fs.writeFile(loc, finalData, (err) => {
            if (err) {
                console.log('Error writing file', err);
            } else {
                console.log('File written successfully');
            }
        })
    })
})
.catch((err) =>{

})