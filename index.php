<?php
require 'format.inc.php'
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Checkers</title>
    <link rel="stylesheet" href="main.css" type="text/css"/>
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="site.con.js"></script>
    <script>
        $(document).ready(function() {
            new Game();
        })
    </script>
</head>
<body>
    <h1>Checkers</h1>
    <div id="game">
        <div id="inside_game">
            <?php echo createBoard(); ?>
        </div>
    </div>
</body>
</html>