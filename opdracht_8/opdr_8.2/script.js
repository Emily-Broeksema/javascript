function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;

        if(Number>0){
            alert("Het getal is te goed")
        }
        else{
            alert("Het getal is laag!")
        }

}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;

if(Number>0){
        alert("Het getal is goed")
    }
    else{
        alert("Het getal is laag!")
    }
}

function addBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 + num2;

if(Number>0){
        alert("Het getal is goed")
    }
    else{
        alert("Het getal is laag!")
    }
}

function minusBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;

if(Number>0){
        alert("Het getal is goed")
    }
    else{
        alert("Het getal is laag!")
    
    }
}