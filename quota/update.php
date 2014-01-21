<?
    $uid = $_COOKIE["userid"];
    $dbconn = pg_connect("host=clip.csie.org port=5432 dbname=postgres user=postgres password=tmuecs503")or die('Could not connect: ' . pg_last_error());
        if (!$dbconn) {
            echo "An error occurred.\n";
            exit;
    }

    //$upa = $_GET['upa'];

    //pa_quota--
    $pa_uptmp = "UPDATE papu SET user_pa = '0' WHERE (user_id = '$uid');";
    $pa_update = pg_query ($pa_uptmp);

    //pa_num++
    $pa_ntmp = pg_query ($dbconn, "SELECT pa_num FROM papu WHERE (user_id = '$uid');");
    $getpa_n =  pg_fetch_row($pa_ntmp);
    $getpa_n[0] += 1;
    $pa_update = pg_query ($dbconn, "UPDATE papu SET pa_num = '$getpa_n[0]' WHERE (user_id = '$uid');");

    //set new location
    //$uloca = $_GET['uloca'];
    $backValue = $_POST['trans_data'];
    echo $backValue;
    $uloca_uptmp = "UPDATE papu SET user_location_app = '$backValue' WHERE (user_id = '$uid');";
    //$uloca_uptmp = "UPDATE papu SET user_location_app = '$uloca' WHERE (user_id = '$uid');";
    $uloca_update = pg_query ($uloca_uptmp);

    pg_close($dbconn);
    //header("Location: https://sna-papu.herokuapp.com/"); 
?>