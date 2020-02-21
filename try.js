function hello(){
    
}

try{
    hello();
} catch(e){
    console.log("function does not exist...");
}finally{
    console.log("this block will always execute");
}