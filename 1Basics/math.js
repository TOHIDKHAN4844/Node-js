function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

module.exports={
    add,
    sub
}

// Other ways

exports.add1= (a,b)=> a+b;
exports.sub1= (a,b)=> a-b;