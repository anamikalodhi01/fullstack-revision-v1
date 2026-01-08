// express is a framework of node js
// diff between framework and library - koi project framework se bana hai to wo full framework use krta hai lekin lib use karte hain to wo 100 percent use nhi hoti 10 percent ya kuch use hoti hai , can customise in lib but not in framework
// in actual react is library but we use it as framework
// framework - set of rules we have to follow
// string can be made in j susign three types of quotes - '', "", ``




const express = require('express');                   // require express module
const app = express();                                // express ka instance create kro 

app.get('/', (req, res) =>{
    res.send('this is my home page');            // response bhejna hai browser ko
})                                         // home page ke liye only /, phla parameter routes ke name then function pass krenge call back function


app.get('/about', (req, res) =>{
    res.send('this is my about page');
})                        

app.get('/cat', (req, res) =>{
    res.send('Meoww');
})  


// app.get('/products/1', (req, res) =>{
//     res.send('ok');
// })

// to handle upper products jese hi koi aur id aayegi to wo 404 pe chala jayega
// handle dynamically 

app.get('/products/:id', (req, res) =>{          // :id means dynamic id , koi bhi id aa sakti hai
    //console.log(req.params);               // req.params se hum id ko access kr skte hain
    //res.send('ok');
    res.send(`you want to view product with id ${req.params.id}`);      // template string use krke id ko bhej skte hain

})

app.get('/users/:username/:password', (req, res) => {              // to handle dynamic put colon
    //let username = req.params.username;
    //let password = req.params.password;
    let {username, password} = req.params;          // object destructuring
    console.log(username,password);
    res.send('ok');

})


app.get(/.*/, (req, res) =>{            // regular expression use krke bhi handle kr skte hain , ye bhi sab kuch catch kr lega
    res.send('404 error page, page not found');                // it is written in end only because it will handle if no route matches
})                                                                  // * means koi bhi route jo upar nhi mila uske liye ye chalega


app.use((req, res) => {
    res.send('404 page not found');
})                     // ye middleware hai , agar upar koi route match nhi hua to ye chalega

app.listen(4000);              // can use any port number 3000 - 8000         // server ko listen krna hai kis port pe 4000 pe sun rha hai

