<!--link database-->
<?
    $dbconn = pg_connect("host=clip.csie.org port=5432 dbname=postgres user=postgres password=tmuecs503")or die('Could not connect: ' . pg_last_error());
        if (!$dbconn) {
            echo "An error occurred.\n";
            exit;
    }
    $ulocation = $_GET[ulocation];
    $uhometown = $_GET[uhometown];

    $uid = $_COOKIE["userid"];

    $uplocation = "UPDATE papu SET user_location = '$ulocation' WHERE user_id ='$uid'"; 
    $useradd = pg_query ($uplocation);
    $uphometown = "UPDATE papu SET user_hometown = '$uhometown' WHERE user_id ='$uid'"; 
    $useradd = pg_query ($uphometown);
    $uplocation_app = "UPDATE papu SET user_location_app = '$ulocation' WHERE user_id ='$uid'"; 
    $useradd = pg_query ($uplocation_app);

    pg_close($dbconn);
    header("Location: https://sna-papu.herokuapp.com/"); 
?> 