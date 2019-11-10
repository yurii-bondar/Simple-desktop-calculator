function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}

function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp) // eval виконує код переданий у вигляді стрінги та повертає результат
    }
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1); // substring() - повертає підрядок рядка між двома індексами, або від одного індексу і до кінця рядка.
}