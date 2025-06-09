var num1 = prompt("Enter Divident  : ");
var num2=prompt("Enter Divisor :")
function divide(num1,num2){
    num1=parseFloat(num1);
    num2=parseFloat(num2)
    if((num1==='')||(num2==='')){
        throw new Error("Invalid input");
    }
    else if(num2===0){
            throw new Error("Cant divide by Zero");
        };
    return num1/num2;
    }
try{
    var r=divide(num1,num2)
    window.alert(r);
}catch(error){
    window.alert(error);
}
