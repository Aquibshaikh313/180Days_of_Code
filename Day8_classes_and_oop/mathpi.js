const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(descripter);

const chai = {
    name : 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai : function(){
        console.log('chai nai bani');
        
    }

}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,"name",{
    // writable : false,
    enumerable : true,
    // configurable: false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for (let [key,val] of Object.entries(chai)) {
    if(typeof val !== 'function'){
        
        console.log(`${key} : ${val}`);

    }
   
    
    
}
