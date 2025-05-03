let v1=document.getElementById("num1")
let v2=document.getElementById("num2")
function add(){
    let num1=parseInt(v1.value)
    let num2=parseInt(v2.value)
    let result=num1+num2
    document.getElementById("result").innerText="Result:"+result
}
function subtract(){
    let num1=parseInt(v1.value)
    let num2=parseInt(v2.value)
    let result=num1-num2
    document.getElementById("result").innerText="Result:"+result
}
function multiply(){
    let num1=parseInt(v1.value)
    let num2=parseInt(v2.value)
    let result=num1*num2
    document.getElementById("result").innerText="Result:"+result
}
function divide(){
    let num1=parseInt(v1.value)
    let num2=parseInt(v2.value)
    let result=num1/num2
    document.getElementById("result").innerText="Result:"+result
}