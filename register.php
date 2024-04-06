<?php
// Conexión a la base de datos
$dbservername = "localhost";
$dbuser = "root"; // Cambiar por tu usuario de la base de datos
$dbpass = ""; // Cambiar por tu contraseña de la base de datos
$db = "projectdb"; // Cambiar por el nombre de tu base de datos
 
$conn = new mysqli($dbservername, $dbuser, $dbpass, $db);

// Verificar la conexión
if ($conn) {
    echo"<h1>Conexión establecida<h1>";
} else{
    echo"<h1>Conexión no establecida<h1>";
}
 
// Recuperar datos del formulario
$nombre = $_POST['name'];
$email = $_POST['email'];
$contrasena = $_POST['pass'];
 
// Insertar datos en la base de datos
$sql = "INSERT INTO usuarios (name, email, password) VALUES ('$nombre', '$email', '$contrasena')";
 
$result= $conn->query($sql);

if($result){
    echo "Registro exitoso";
} else {
    echo "Error";
}
 
$conn->close();
?>