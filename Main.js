
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
