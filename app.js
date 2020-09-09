let codes=document.getElementById("codes");
let run=document.getElementById("run");
let remove=document.getElementById("remove");
let results=document.getElementById("results");
run.onclick=()=>{
    results.innerHTML=codes.value;
    localStorage.setItem("Result",codes.value)
}
remove.onclick=()=>{
    codes.value= alert(" ?!سيتم حذف الكود بالكامل ");
    codes.value="";
    
}
result_id.onclick=()=>{
    results.innerHTML= alert(" ?!سيتم حذف الكود بالكامل ");
    results.innerHTML="";
}
// onload=()=>{
//     codes.value=localStorage.getItem("Result");
//     results.innerHTML=codes.value;
// }