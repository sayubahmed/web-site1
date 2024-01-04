let showButton=document.querySelector(".show");
let clearButton=document.querySelector(".clear");
let table=document.querySelector("table");
let flag=0;
let arr=[
    {name:"Aiman",id:102332},
    {name:"Ayub",id:1023232},
    {name:"stack",id:1032332},
    {name:"rohit",id:102332},
    {name:"kholi",id:1032332},
    {name:"siraj",id:1089332},
    {name:"bumra",id:1090332},
    {name:"ajit",id:1020932},
    {name:"kapil",id:1029032},
    {name:"salman",id:1098332},
    {name:"hritik",id:7738920},
    {name:"shami",id:34342223}
]
 
showButton.addEventListener("click",()=>{
    if(flag){
         return;
    }
       
      let something="";
     for(let i=0;i<arr.length;i++){
           something=something+`<tr><td>${arr[i].name}</td><td>${arr[i].id}</td></tr>`   
     }
    table.innerHTML=table.innerHTML+something;
     flag=1;
})
clearButton.addEventListener("click",()=>{
      table.innerHTML=`<tr><th>Name</th><th>Id</th></tr>`;
     flag=0;
    
})