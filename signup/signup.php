<!--link database-->
    <?
        $dbconn = pg_connect("host=clip.csie.org port=5432 dbname=postgres user=postgres password=tmuecs503")or die('Could not connect: ' . pg_last_error());
            if (!$dbconn) {
                echo "An error occurred.\n";
                exit;
        }
    
    $uid = $_COOKIE["userid"];
    $user_data_init = pg_query ($dbconn, "SELECT user_name FROM papu WHERE user_id = '$uid';");
    $user_row =  pg_fetch_row($user_data_init);

    ?>
<html>
    <title>PAPU! signup*</title>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="shortcut icon" href="../logo/papu/ios/Icon-Small-20.png">
        <!-- Bootstrap core CSS -->
        <!--<link href="../../dist/css/bootstrap.css" rel="stylesheet">-->
        <link href="../content/css/bootstrap.css" rel="stylesheet">
        <link href="../content/css/papu.css" rel="stylesheet">
        
        <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
        <script src="../content/js/bootstrap.js"></script>
        <!-- Custom styles for this template -->
        <link href="../content/css/starter-template.css" rel="stylesheet"/>
        <link href="../content/css/changePicture.css" rel="stylesheet"/>
    </head>
    <body>
        <style type=text/css> 
            body { font-family: 微軟正黑體,Times New Roman,新細明體;}
            A{color:black}
            A:hover {color: gray}
            h1,h2,h3,h4,h5{ font-family: 微軟正黑體,Times New Roman,新細明體;}
        </style>
        <script>
            function changeText(location) 
            { 
                document.userform.ulocation.value = location;
            }
            function changeTextb(hometown) 
            { 
                document.userform.uhometown.value = hometown;
            }
        
        </script>
        <center>
        <h1 style="color:white">Hello, <? echo $user_row[0]; ?> :</h1><br>
        <h2 style="color:white">請選擇你現在的所在地及家鄉 XD</h2>
            
     <div>      
        <div class="col-md-3"></div>  
        <div class="col-md-2">
            <div class="dropdown" style="center">
            <a class="dropdown-toggle" id="l_drop" role="button" data-toggle="dropdown" href="#"><button class="btn" type="button">所在地▼</button></a>
            <ul id="menu1" class="dropdown-menu" role="menu" aria-labelledby="l_drop">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Taipei')">Taipei(台北)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Taoyuan')">Taoyuan(桃園)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Hsinchu')">Hsinchu(新竹)</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Ilan')">Ilan(宜蘭)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Hualien')">Hualien(花蓮)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Taitung')">Taitung(台東)</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Miaoli')">Miaoli(苗栗)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Taichung')">Taichung(台中)</a></li>        
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Changhua')">Changhua(彰化)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Nantou')">Nantou(南投)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Yunlin')">Yunlin(雲林)</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Chiayi')">Chiayi(嘉義)</a></li>        
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Tainan')">Tainan(台南)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Kaohsiung')">Kaohsiung(高雄)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeText('Pingtung')">Pingtung(屏東)</a></li>
            </ul>
            </div>
        </div>
        <div class="col-md-2">
            <div class="dropdown" style="center">
            <a class="dropdown-toggle" id="h_drop" role="button" data-toggle="dropdown" href="#"><button class="btn" type="button">家鄉▼</button></a>
            <ul id="menu2" class="dropdown-menu" role="menu" aria-labelledby="h_drop">
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Taipei')">Taipei(台北)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Taoyuan')">Taoyuan(桃園)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Hsinchu')">Hsinchu(新竹)</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Ilan')">Ilan(宜蘭)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Hualien')">Hualien(花蓮)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Taitung')">Taitung(台東)</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Miaoli')">Miaoli(苗栗)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Taichung')">Taichung(台中)</a></li>        
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Changhua')">Changhua(彰化)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Nantou')">Nantou(南投)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Yunlin')">Yunlin(雲林)</a></li>
                <li role="presentation" class="divider"></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Chiayi')">Chiayi(嘉義)</a></li>        
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Tainan')">Tainan(台南)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Kaohsiung')">Kaohsiung(高雄)</a></li>
                <li role="presentation"><a role="menuitem" tabindex="-1" href="javascript:changeTextb('Pingtung')">Pingtung(屏東)</a></li>
            </ul>
            </div>
        </div>
    </div>
        <br><br>
        <form class="form-inline" role="form" name="userform" method="get" action="send.php">
          <div class="form-group">
            <label style="color:white">所在地</label>
            <input class="form-control" name="ulocation" placeholder="Select location" readonly="true" value="Taipei">
          </div>
          <div class="form-group">
            <label style="color:white">家鄉</label>
            <input class="form-control" name="uhometown" placeholder="Select hometown" readonly="true" value="Taipei">
          </div>
          <button type="submit" class="btn btn-default">註冊</button>
        </form>
        </center>
    </body>
</html>