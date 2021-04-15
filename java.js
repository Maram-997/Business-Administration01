var userName = prompt('Welcome, please enter your name.');
alert('Welcome ' + userName);
console.log('userName');
 
/* var x = prompt('Are you a business administration student? please enter yes or no.');
 if( x === 'yes')
{alert ('You Are a FOOL');
}
else if( x === 'no' )
{alert ('You Are SMART');
} */
 
var x = Number(prompt ("How Many Are The Business Administration Function? "));

while (x != 4)
{
 x = Number(prompt("How Many Are The Business Administration Function? "));
}
alert (" Good Job. ");
 
var y = Number(prompt("How Many Number Of Copies Do You Need?"));

for (i = 1; i<=y;i++){
 
var image ='<img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLfjSlUMy0Si7uwtaU6mApFcLo_ni544YoQ&usqp=CAU " alt =" "/>'
  document.write(image);
}