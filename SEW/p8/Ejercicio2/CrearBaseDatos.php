<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Iván González Mahagamage"/>
    <meta name="description"
          content="Ejercicio 2 de la práctica 08 asignatura Software y Estándares para la Web"/>
    <meta name="keywords" content="SEW,Práctica08,ejercicio2,Software,Estándares,Web"/>
    <title>Práctica 08 | Software y Estándares para la Web</title>
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet"/>
    <link rel="icon" type="image/x-icon"
          href="https://unioviedo-my.sharepoint.com/personal/uo239795_uniovi_es/_layouts/15/guestaccess.aspx?docid=1b184fdc380484a7bbdad079aa2a52135&amp;authkey=ATTjsDQ1WDwFg-XqhaEbSF4&amp;e=168190abc0264416a06fc92675ca41aa"/>
    <link rel="stylesheet" type="text/css" href="Ejercicio2.css"/>
</head>
<body>
<header>
    <h1>Ejercicio 2 - Práctica 08 </h1>
</header>
<main>
    <form method="POST">
        <?php
        require 'Conexion.php';

        $cadenaSQL = "CREATE DATABASE IF NOT EXISTS heroes COLLATE utf8_spanish_ci";
        if ($db->query($cadenaSQL) === TRUE) {
            echo "<h2>Base de datos heroes creada con éxito (o ya existe)</h2>";
        } else {
            echo "<h2>ERROR en la creación de la Base de Datos heroes</h2>";
            exit();
        }
        $db->close();
        ?>
    </form>
</main>
<footer>
    <address>
        <p>Autor: Iván González Mahagamage</p>
        <p>Contacto: <a href="mailto:uo239795@uniovi.es">uo239795@uniovi.es</a></p>
    </address>
    <p>
        <a href="https://validator.w3.org/check?uri=referer">
            <img src="https://unioviedo-my.sharepoint.com/personal/uo239795_uniovi_es/_layouts/15/guestaccess.aspx?docid=1dc29309c5f484ddbb0d9db5b1c80c434&amp;authkey=ARFq9i5Nm2QpUmJj55IcDgQ&amp;e=705a58700abd4191a586e91989da4a0e"
                 alt="HTML5 Válido" longdesc="https://validator.w3.org/check?uri=referer"/>
        </a>
        <a href="http://jigsaw.w3.org/css-validator/check/referer">
            <img src="https://unioviedo-my.sharepoint.com/personal/uo239795_uniovi_es/_layouts/15/guestaccess.aspx?docid=190f4b784428a40a2b969ae7f977a3d85&amp;authkey=AegPExwjY0qZ80NLtEpPmYo&amp;amp;e=41cf2c002341476e8abb088bc7c0a15b"
                 alt="¡CSS Válido!"/>
        </a>
    </p>
</footer>
</body>
</html>