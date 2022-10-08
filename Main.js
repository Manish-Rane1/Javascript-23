
function one(){
let count=0
while (count<5){
    let num=prompt("Enter a value");
    document.write(num+"<br>")
    count++
}
}

function two(){
    var total=0
var count=0
while(count<5){
    var marks=prompt("Enter marks")
    total+= parseInt(marks)
    count++
}
document.write("Total marks are: "+total)
}

function three(){
    const arr=[23,45,78,90,100]
    document.write("Array is: "+arr+"<br>"+"<br>")
    document.write("Using for loop: <br>")
    for (var i in arr)
{
    document.write(arr[i]+"<br>")
}}
