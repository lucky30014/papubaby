<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="/logo/papu/ios/Icon-Small-20.png">

    <title>PAPU!</title>

    <!-- Bootstrap core CSS -->
    <link href="content/css/bootstrap.css" rel="stylesheet">
    <link href="content/css/papu.css" rel="stylesheet">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="content/js/bootstrap.js"></script>
    <!-- Custom styles for this template -->
    <link href="content/css/starter-template.css" rel="stylesheet">
    <link href="content/css/changePicture.css" rel="stylesheet"/>
    <script src="content/js/mapAnimation.js"></script>

	<!-- Fotorama -->
	<link href="//fotorama.s3.amazonaws.com/fotorama.css" rel="stylesheet">
	<script src="//fotorama.s3.amazonaws.com/fotorama.js"></script><style type="text/css"></style>
      
  </head>
  <body style="overflow-x: auto; overflow-y: hidden;">
    <style type=text/css> 
        body { font-family: 微軟正黑體,Times New Roman,新細明體;}
        A{color:black}
        A:hover {color: gray}
        h1,h2,h3,h4,h5{ font-family: 微軟正黑體,Times New Roman,新細明體;}
    </style>
      <!--link database-->
    <?
        session_start();
        $dbconn = pg_connect("host=clip.csie.org port=5432 dbname=postgres user=postgres password=tmuecs503")or die('Could not connect: ' . pg_last_error());
            if (!$dbconn) {
                echo "An error occurred.\n";
                exit;
        }
    ?> 
      <?php
        require_once('src/facebook.php');
        require_once('utils.php');
    
            
        $config = array(
            'appId' => '599502590123242',
            'secret' => '9cddb4ed5631ae8a5cb28291ea8324f4',
            //'allowSignedRequest' => false // optional but should be set to false for non-canvas apps
        );
            
        $facebook = new Facebook($config);
        $user_id = $facebook->getUser();
        if ($user_id) {
            try {
            // Fetch the viewer's basic information
            $user_profile = $facebook->api('/me','GET');
            } catch (FacebookApiException $e) {
                $params = array(
                  'scope' => 'read_stream, friends_likes',
                  'redirect_uri' => 'http://papu.herokuapp.com/main.php'
                );
                
                $login_url = $facebook->getLoginUrl($params);
                //$login_url = $facebook->getLoginUrl(); 
                echo '<center><div class="fotorama">
                    <img src="./content/picture/doc00.png">
                    <img src="./content/picture/doc001.png">
                    <img src="./content/picture/doc003.png">
                    <img src="./content/picture/doc004.png">
                    <img src="./content/picture/doc005.png">
                    </div>';
                echo "<h2 style='color:white;font-family:微軟正黑體'>Hey, 快來跟大家一起PAPU!</h2><br>";
                echo '<a class="btn btn-primary" href="'.$login_url.'">Login with Facebook</a>';
                
                error_log($e->getType());
                error_log($e->getMessage());
            }
            $app_using_friends = $facebook->api(array(
                'method' => 'fql.query',
                'query' => 'SELECT uid, name FROM user WHERE uid IN(SELECT uid2 FROM friend WHERE uid1 = me()) AND is_app_user = 1'
              ));
        }else {
            // No user, print a link for the user to login
            $params = array(
                  'scope' => 'read_stream, friends_likes',
                  'redirect_uri' => 'http://papu.herokuapp.com/main.php'
                );
                
            $login_url = $facebook->getLoginUrl($params);
            //$login_url = $facebook->getLoginUrl();
            echo '<center><div class="fotorama">
                  <img src="./content/picture/doc00.png">
                  <img src="./content/picture/doc001.png">
                  <img src="./content/picture/doc003.png">
                  <img src="./content/picture/doc004.png">
                  <img src="./content/picture/doc005.png">
                </div>';
            echo "<h2 style='color:white;font-family:微軟正黑體'>Hey, 快來跟大家一起PAPU!</h2><br>";
            echo '<a class="btn btn-primary" href="'.$login_url.'">Login with Facebook</a>';   
        }
    
        $uid =  $user_id;
        $uname = he(idx($user_profile, 'name'));
        $useradd = pg_query ($dbconn,"INSERT INTO papu(user_id,user_name) VALUES ('$uid','$uname')");

        $search = pg_query ($dbconn, "SELECT * FROM papu WHERE user_id = '$user_id';");
        if(!$search){
            echo "query did not execute";
            exit;
        }
        $users =  pg_fetch_row($search);
        $_SESSION['uid'] = $user_id;

        if($users[4] == null)
        {
            echo "<script type='text/javascript'>";
            echo "window.location.href='signup/signup.php'";
            echo "</script>"; 
        }

        //auto update
        date_default_timezone_set("Asia/Taipei");
        $t = time(); //now time

        $hr = $t - ($t % 3600); //On the hour
    
        $d = date("Y-m-d");
        $today = strtotime($d); //today 0:00
        $utime = $users[10]; //DB user time
        if($utime < $hr)
        {
            $getIdtmp = pg_query ($dbconn, "SELECT user_id FROM papu ORDER BY random() LIMIT 1;");
            $getId =  pg_fetch_row($getIdtmp);
            $papu_update = pg_query ($dbconn, "UPDATE papu SET (user_pa,user_pu,user_time,user_pufri) = ('1','1','$t','$getId[0]') WHERE (user_id = '$uid');");
            header("Location: http://sna-papu.herokuapp.com/"); 
        }
    ?>
      </body>
    </html>