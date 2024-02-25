const fs = require("fs");

console.log(fs);

console.log('Starting');
// fs.writeFileSync("aniket.txt","hello Node");
fs.writeFile("aniket.txt","hello world2",()=>{
    console.log('done..!');
    
});



