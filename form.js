<!DOCTYPE html>
<html>
<style>
input{
width:40% ;
border:2px solid beige;
line-height:5px;
z-index:100;}
#x{
background:black;
color:white;
padding:20px;
height:100px;
width:60%;}

button{
background:black;
color:white;
border-radius:10%;
font-weight:300px;
font-size:16px;
padding:10px;}

</style>
<script>
function add() {
    var fnam = document.getElementById('fnam').value;
    var lnam = document.getElementById('lnam').value;
    var age = document.getElementById('age').value;

    var table = document.getElementsByTagName('table')[0];
    var newrow = table.insertRow(1);

    var cel1 = newrow.insertCell(0); // Corrected index to 0
    var cel2 = newrow.insertCell(1); // Corrected index to 1
    var cel3 = newrow.insertCell(2); // Corrected index to 2

    cel1.innerHTML = fnam;
    cel2.innerHTML = lnam;
    cel3.innerHTML = age;
}
</script>
<body>
 <h2>FORM DE SIGN UP</h2>
first name : <input type="text" name="fnam" id="fnam"> <br> <br>
last name : <input type="text" name="lnam" id="lnam"> <br>  <br>
age : <input type="number" name="age" id="age">  <br>  <br>
 
<button type="button" onclick="add()"> AJOUTER </button>  <br> <br>

<table border="1" id='x' >
<tr> <th>FIRST NAME</th>  <th>LAST NAME</th> <th>AGE</th> </tr>

<tr> <td>AMIN</td>   <td>ABBAS</td>   <td>23</td>  </tr>

</table>
</body>
</html>
