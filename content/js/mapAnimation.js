var canPa = 0;

function checkQuota(chooseLocation, quota){   
  if(quota == 1 && canPa == 1) {
    switch(chooseLocation) {
      case 'Taipei':
        taipei();
        appearTrans();
        savaData(quota, 'Taipei','台北');
        break;
      case 'Taoyuan':
        taoyuan();
        appearTrans();
        savaData(quota, 'Taoyuan','桃園');
        break;
      case 'Ilan':
        ilan();
        appearTrans();
        savaData(quota, 'Ilan','宜蘭');
        break;
      case 'Hsinchu':
        hsinchu();
        appearTrans();
        savaData(quota, 'Hsinchu','新竹');
        break;
      case 'Miaoli':
        miaoli();
        appearTrans();
        savaData(quota, 'Miaoli','苗栗');
        break;
      case 'Taichung':
        taichung();
        appearTrans();
        savaData(quota, 'Taichung','台中');
        break;
      case 'Hualien':
        hualien();
        appearTrans();
        savaData(quota, 'Hualien','花蓮');
        break;
      case 'Changhua':
        changhua();
        appearTrans();
        savaData(quota, 'Changhua','彰化');
        break;
      case 'Nantou':
        nantou();
        appearTrans();
        savaData(quota, 'Nantou','南投');
        break;
      case 'Yunlin':
        yunlin();
        appearTrans();
        savaData(quota, 'Yunlin','雲林');
        break;
      case 'Chiayi':
        chiayi();
        appearTrans();
        savaData(quota, 'Chiayi','嘉義');
        break;
      case 'Tainan':
        tainan();
        appearTrans();
        savaData(quota, 'Tainan','台南');
        break;
      case 'Kaohsiung':
        kaohsiung();
        appearTrans();
        savaData(quota, 'Kaohsiung','高雄');
        break;
      case 'Pingtung':
        pingtung();
        appearTrans();
        savaData(quota, 'Pingtung','屏東');
        break;
      case 'Taitung':
        taitung();
        appearTrans();
        savaData(quota, 'Taitung','台東');
        break;
    }
  }if(quota == 0){
        savaData(quota, 'Taitung','台東');
    }
}

function taipei(){
  if(document.getElementById("Taipei").style.opacity==1||document.getElementById("Taipei").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Taipei").offsetTop+(document.getElementById("Taipei").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Taipei").offsetLeft+(document.getElementById("Taipei").offsetWidth/3)+"px";
  }
}

function taoyuan(){
  if(document.getElementById("Taoyuan").style.opacity==1||document.getElementById("Taoyuan").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Taoyuan").offsetTop+(document.getElementById("Taoyuan").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Taoyuan").offsetLeft+(document.getElementById("Taoyuan").offsetWidth/3)+"px";
  }
}

function ilan(){
  if(document.getElementById("Ilan").style.opacity==1||document.getElementById("Ilan").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Ilan").offsetTop+(document.getElementById("Ilan").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Ilan").offsetLeft+(document.getElementById("Ilan").offsetWidth/3)+"px";
  }
}

function hsinchu(){
  if(document.getElementById("Hsinchu").style.opacity==1||document.getElementById("Hsinchu").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Hsinchu").offsetTop+(document.getElementById("Hsinchu").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Hsinchu").offsetLeft+(document.getElementById("Hsinchu").offsetWidth/3)+"px";
  }
}

function miaoli(){
  if(document.getElementById("Miaoli").style.opacity==1||document.getElementById("Miaoli").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Miaoli").offsetTop+(document.getElementById("Miaoli").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Miaoli").offsetLeft+(document.getElementById("Miaoli").offsetWidth/3)+"px";
  }
}

function taichung(){
  if(document.getElementById("Taichung").style.opacity==1||document.getElementById("Taichung").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Taichung").offsetTop+(document.getElementById("Taichung").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Taichung").offsetLeft+(document.getElementById("Taichung").offsetHeight/3)+"px";
  }
}

function hualien(){
  if(document.getElementById("Hualien").style.opacity==1||document.getElementById("Hualien").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Hualien").offsetTop+(document.getElementById("Hualien").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Hualien").offsetLeft+(document.getElementById("Hualien").offsetWidth/3)+"px";
  }
}

function changhua(){
  if(document.getElementById("Changhua").style.opacity==1||document.getElementById("Changhua").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Changhua").offsetTop+(document.getElementById("Changhua").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Changhua").offsetLeft+(document.getElementById("Changhua").offsetWidth/3)+"px";
  }
}

function nantou(){
  if(document.getElementById("Nantou").style.opacity==1||document.getElementById("Nantou").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Nantou").offsetTop+(document.getElementById("Nantou").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Nantou").offsetLeft+(document.getElementById("Nantou").offsetWidth/3)+"px";
  }
}

function yunlin(){
  if(document.getElementById("Yunlin").style.opacity==1||document.getElementById("Yunlin").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Yunlin").offsetTop+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Yunlin").offsetLeft+(document.getElementById("Yunlin").offsetWidth/3)+"px";
  }
}

function chiayi(){
  if(document.getElementById("Chiayi").style.opacity==1||document.getElementById("Chiayi").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Chiayi").offsetTop+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Chiayi").offsetLeft+(document.getElementById("Chiayi").offsetWidth/3)+"px";
  }
}

function tainan(){
  if(document.getElementById("Tainan").style.opacity==1||document.getElementById("Tainan").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Tainan").offsetTop+(document.getElementById("Tainan").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Tainan").offsetLeft+(document.getElementById("Tainan").offsetWidth/3)+"px";
  }
}

function kaohsiung(){
  if(document.getElementById("Kaohsiung").style.opacity==1||document.getElementById("Kaohsiung").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Kaohsiung").offsetTop+(document.getElementById("Kaohsiung").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Kaohsiung").offsetLeft+(document.getElementById("Kaohsiung").offsetWidth/3)+"px";
  }
}

function pingtung(){
  if(document.getElementById("Pingtung").style.opacity==1||document.getElementById("Pingtung").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Pingtung").offsetTop+(document.getElementById("Pingtung").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Pingtung").offsetLeft+(document.getElementById("Pingtung").offsetWidth/3)+"px";
  }
}

function taitung(){
  if(document.getElementById("Taitung").style.opacity==1||document.getElementById("Taitung").style.opacity=="")
  {
    document.getElementById("myPhoto").style.top = document.getElementById("Taitung").offsetTop+(document.getElementById("Taitung").offsetHeight/3)+"px";
    document.getElementById("myPhoto").style.left = document.getElementById("Taitung").offsetLeft+(document.getElementById("Taitung").offsetWidth/3)+"px";
  }
}

function checkLocation(location) {
  canPa = 1;
  disappearTrans();
  initLocation(location);
  switch(location) {
    case 'Taipei':
      document.getElementById("Taipei").style.opacity = "1.0";
      document.getElementById("Ilan").style.opacity = "1.0";
      document.getElementById("Taoyuan").style.opacity = "1.0";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Taoyuan':
      document.getElementById("Taipei").style.opacity = "1.0";
      document.getElementById("Ilan").style.opacity = "1.0";
      document.getElementById("Taoyuan").style.opacity = "1.0";
      document.getElementById("Hsinchu").style.opacity = "1.0";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Ilan':
      document.getElementById("Taipei").style.opacity = "1.0";
      document.getElementById("Ilan").style.opacity = "1.0";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "1.0";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Hsinchu':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "1.0";
      document.getElementById("Hsinchu").style.opacity = "1.0"
      document.getElementById("Miaoli").style.opacity = "1.0";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Miaoli':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "1.0";
      document.getElementById("Miaoli").style.opacity = "1.0";
      document.getElementById("Taichung").style.opacity = "1.0";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Taichung':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "1.0";
      document.getElementById("Taichung").style.opacity = "1.0";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "1.0";
      document.getElementById("Nantou").style.opacity = "1.0";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Hualien':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "1.0";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "1.0";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "1.0";
      break;
    case 'Changhua':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "1.0";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "1.0";
      document.getElementById("Nantou").style.opacity = "1.0";
      document.getElementById("Yunlin").style.opacity = "1.0";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Nantou':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "1.0";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "1.0";
      document.getElementById("Nantou").style.opacity = "1.0";
      document.getElementById("Yunlin").style.opacity = "1.0";
      document.getElementById("Chiayi").style.opacity = "1.0";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Yunlin':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "1.0";
      document.getElementById("Nantou").style.opacity = "1.0";
      document.getElementById("Yunlin").style.opacity = "1.0";
      document.getElementById("Chiayi").style.opacity = "1.0";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Chiayi':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "1.0";
      document.getElementById("Yunlin").style.opacity = "1.0";
      document.getElementById("Chiayi").style.opacity = "1.0";
      document.getElementById("Tainan").style.opacity = "1.0";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Tainan':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "1.0";
      document.getElementById("Tainan").style.opacity = "1.0";
      document.getElementById("Kaohsiung").style.opacity = "1.0";
      document.getElementById("Pingtung").style.opacity = "0.4";
      document.getElementById("Taitung").style.opacity = "0.4";
      break;
    case 'Kaohsiung':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "1.0";
      document.getElementById("Kaohsiung").style.opacity = "1.0";
      document.getElementById("Pingtung").style.opacity = "1.0";
      document.getElementById("Taitung").style.opacity = "1.0";
      break;
    case 'Pingtung':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "1.0";
      document.getElementById("Pingtung").style.opacity = "1.0";
      document.getElementById("Taitung").style.opacity = "1.0";
      break;
    case 'Taitung':
      document.getElementById("Taipei").style.opacity = "0.4";
      document.getElementById("Ilan").style.opacity = "0.4";
      document.getElementById("Taoyuan").style.opacity = "0.4";
      document.getElementById("Hsinchu").style.opacity = "0.4";
      document.getElementById("Miaoli").style.opacity = "0.4";
      document.getElementById("Taichung").style.opacity = "0.4";
      document.getElementById("Hualien").style.opacity = "1.0";
      document.getElementById("Changhua").style.opacity = "0.4";
      document.getElementById("Nantou").style.opacity = "0.4";
      document.getElementById("Yunlin").style.opacity = "0.4";
      document.getElementById("Chiayi").style.opacity = "0.4";
      document.getElementById("Tainan").style.opacity = "0.4";
      document.getElementById("Kaohsiung").style.opacity = "0.4";
      document.getElementById("Pingtung").style.opacity = "1.0";
      document.getElementById("Taitung").style.opacity = "1.0";
      break;
  }
}

function initLocation(location) {  
  document.getElementById("myPhoto").style.top = document.getElementById(location).offsetTop+(document.getElementById(location).offsetHeight/3)+"px";
  document.getElementById("myPhoto").style.left = document.getElementById(location).offsetLeft+(document.getElementById(location).offsetWidth/3)+"px";
}

function appearTrans() {
    document.getElementById("trans").style.zIndex = 30;   
}

function disappearTrans() {
    document.getElementById("trans").style.zIndex = 0;   
}
function Pu(){
    document.getElementById("my-friend-button").disabled = true; 
    var my_data = 0 ;
    $.ajax({
        url: "./quota/updatePu.php",  
        type: "POST",
        data:{trans_data:my_data},
        //dataType: "json",
        error: function(){  
            alert('Error loading XML document');  
        },  
        success: function(data,status){  
            //alert(data);
        }
    });
}
function Pa(){
    document.getElementById("show").style.display = "block";
    var my_data = document.getElementById("upa").value;
    document.getElementById("blockOK").disabled = true; 
    $.ajax({
        url: "./quota/update.php",  
        type: "POST",
        data:{trans_data:my_data},
        //dataType: "json",
        error: function(){  
            alert('Error loading XML document');  
        },  
        success: function(data,status){  
            //alert(data);
            location.reload();
        }
    });
}
        