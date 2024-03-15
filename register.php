<?php
// Conexión a la base de datos
$servername = "localhost";
$username = "tu_usuario"; // Cambiar por tu usuario de la base de datos
$password = "tu_contraseña"; // Cambiar por tu contraseña de la base de datos
$database = "tu_base_de_datos"; // Cambiar por el nombre de tu base de datos
 
$conn = new mysqli($servername, $username, $password, $database);
 
// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
 
// Recuperar datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];
 
// Insertar datos en la base de datos
$sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$nombre', '$email', '$contrasena')";
 
if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
 
$conn->close();
?>