let resultBox = document.getElementById("result-box");
function display(num){
    resultBox.value += num
}

function Calculate(){
    try{
        resultBox.value = eval(resultBox.value);
    }
    catch(err)
    {
        alert("Invalid")
    }
}
function Clear(){
    resultBox.value = " ";
}
function del(){
    resultBox.value = resultBox.value.slice(0,-1);
}
