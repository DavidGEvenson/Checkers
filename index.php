<?php
require 'format.inc.php'
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Checkers</title>
    <link rel="stylesheet" href="main.css" type="text/css"/>
</head>
<body>
    <h1>Checkers</h1>
    <div id="game">
        <?php createBoard(); ?>
    </div>
</body>
</html>