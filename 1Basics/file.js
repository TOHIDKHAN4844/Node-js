const fs = require("fs");

// sync...

// fs.writeFileSync("./test.txt", "Hello Tohid New file is Created");

// Async
 // fs.writeFile("./test2.txt", "Hello Tohid New file is Created by Async",(err)=>{});


// Read the file

// sync... Blocking

const result = fs.readFileSync("./read.txt", "utf-8");
console.log(result);

// Async... Non-Blocking

fs.readFile("./read.txt", "utf-8", (err,result)=>{
    if(err){
        console.log("Error ",err);
    }else{
        console.log(result);
    }
})

// appending

fs.appendFileSync("./test.txt", `${Date.now()} Hey Tohid \n`)


// fs.cpSync("./test.txt", "./copy.txt");

fs.unlinkSync("./copy.txt");

const os= require("os");

console.log(os.cpus().length);


