<?
    $uid = $_COOKIE["userid"];
    $dbconn = pg_connect("host=clip.csie.org port=5432 dbname=postgres user=postgres password=tmuecs503")or die('Could not connect: ' . pg_last_error());
        if (!$dbconn) {
            echo "An error occurred.\n";
            exit;
    }
    //$upu = $_GET['upu'];
    //$pu_uptmp = "UPDATE papu SET user_pu = '$upu' WHERE (user_id = '$uid');";
    //$pu_update = pg_query ($pu_uptmp);

    $backValue = $_POST['trans_data'];
    if($backValue > 0)
        $backValue--;
   
    $pu_ntmp = pg_query ($dbconn, "SELECT pu_num FROM papu WHERE (user_id = '$uid');");
    $getpu_n =  pg_fetch_row($pu_ntmp);
    $getpu_n[0] += 1;
    $pu_update = pg_query ($dbconn, "UPDATE papu SET pu_num = '$getpu_n[0]' WHERE (user_id = '$uid');");
    
    $pu_update = pg_query ($dbconn, "UPDATE papu SET user_pu = '$backValue' WHERE (user_id = '$uid');");
    $get = pg_query ($dbconn, "SELECT user_pu FROM papu WHERE (user_id = '$uid');");
    $getPu =  pg_fetch_row($get);
    $backValue = $getPu[0];
    echo $backValue;


    pg_close($dbconn);
    //header("Location: https://sna-papu.herokuapp.com/"); 
?>