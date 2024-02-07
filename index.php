<!DOCTYPE html>
<html lang="en">
    <head>
        <title>My app</title>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="dist/css/app.css" />
    </head>
    <body>
        <?php 
            include('components/header.php');
            include('components/home.php');
            include('components/footer.php');
        ?>
        <script src="dist/js/app.js"></script>

        <!-- Uncomment the script below to see live changes while running "npm mix watch" on development.-->
        <!-- <script src="http://localhost:35729/livereload.js"></script> -->
    </body>
</html>