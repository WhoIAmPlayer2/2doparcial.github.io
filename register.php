<?php
// Conexión a la base de datos
$dbservername = "localhost";
$dbuser = "root"; // Cambiar por tu usuario de la base de datos
$dbpass = ""; // Cambiar por tu contraseña de la base de datos
$db = "projectdb"; // Cambiar por el nombre de tu base de datos
 
$conn = new mysqli($dbservername, $dbuser, $dbpass, $db);

// Verificar la conexión
if (!$conn) {echo"<h1>Conexión no establecida<h1>";}
 
// Recuperar datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['correo'];
 
// Insertar datos en la base de datos
$sql = "INSERT INTO newsusers (nombre, correo) VALUES ('$nombre', '$email')";
$result= $conn->query($sql);

if($result){
    echo'<script type="text/javascript">
    alert("Registro exitoso.");
    window.location.href="index.php";
    </script>';
} else {
    echo "Error";
}
 
$conn->close();
?>