let arr=[{id:1,name:"john",age:"18",profession:"developer"},
{id:2, name:"jack",age:"20", profession:"developer"},
{id:3, name:"karen", age:"19",profession:"admin"}];

let arr1=[{id:5,name:"hdd",age:"8",profession:"developer"},
{id:6, name:"jackil",age:"20", profession:"developer"},
{id:7, name:"karan", age:"19",profession:"admin"}];


// PrintDeveloperbyMap() ;
let printdevmap=arr.map((e)=>{
    if(e.profession=="developer"){
        console.log(e);
    }
})

//PrintDeveloperbyForEach() 
let printdev=arr.forEach((e)=>{
    if(e.profession=="developer"){
        console.log(e);
    }
})

//addData() 
let newdata={id:4,name:"susan",age:"20",profession:"intern"} ;
arr.push(newdata);
console.log(arr);

//remove admin; by use of filter fxn
let arrfil=arr.filter((e,i)=>{
    return e.profession != "admin";
})
console.log(arrfil);

//ConcatinateArray() 

console.log(arr.concat(arr1));
