gskli= [];
isFirefox = typeof InstallTrigger !== 'undefined';
function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

var url = window.location.href;
console.log(url);
if (url.match('.html') && !url.match('player')) {
} else {
  var script = document.createElement('script');
  script.src = "https://live.sk-knower.com/lib/jquery-1.10.1.min.js";
  document.getElementsByTagName('head')[0].appendChild(script);
  script.onload = function() {
    var sscript = document.createElement('script');
    sscript.src = "https://live.sk-knower.com/lib/bililiteRange.js";
    document.getElementsByTagName('head')[0].appendChild(sscript);
    sscript.onload = function() {
    var ssscript = document.createElement('script');
    ssscript.src = "https://live.sk-knower.com/lib/jquery.sendkeys.js";
    document.getElementsByTagName('head')[0].appendChild(ssscript);
    var script = document.createElement('script');
    ssscript.onload = function() {
    //$('head').append('<link rel="stylesheet" type="text/css" href="https://live.sk-knower.com/lib/perfect-scrollbar/perfect-scrollbar.css">');
    $(document).keydown(function (event) {
      if (event.which == "18")
        altlIsPressed = true;
    });
    
    $(document).keyup(function () {
      altlIsPressed = false;
    });
    var altlIsPressed = false;
                jQuery.fn.extend({
                  insertAtCaret: function (myValue) {
                    return this.each(function (i) {
                      if (document.selection) {
                        //For browsers like Internet Explorer
                        this.focus();
                        var sel = document.selection.createRange();
                        sel.text = myValue;
                        this.focus();
                      }
                      else if (this.selectionStart || this.selectionStart == '0') {
                        //For browsers like Firefox and Webkit based
                        var startPos = this.selectionStart;
                        var endPos = this.selectionEnd;
                        var scrollTop = this.scrollTop;
                        this.value = this.value.substring(0, startPos) + myValue + this.value.substring(endPos, this.value.length);
						this.innerText = this.innerText.substring(0, startPos) + myValue + this.innerText.substring(endPos, this.innerText.length);
                        this.focus();
                        this.selectionStart = startPos + myValue.length;
                        this.selectionEnd = startPos + myValue.length;
                        this.scrollTop = scrollTop;
                      } else {
                        this.value += myValue;
						this.innerText += myValue;
                        this.focus();
                      }
                    });
                  }
                });

                $('.chat-room__content').on('click', '.facebookvideo', function(e) {
                  var fbid=$(this).data("fbid");
                  $(this).html('<iframe width="100%" height="200" src="https://www.facebook.com/plugins/video.php?href='+fbid+'&amp;show_text=0&amp;width=300&height=200" frameborder="0" allowfullscreen="" style="vertical-align: middle;"></iframe>');
                });
                $('.chat-room__content').on('click', '.facebookclosevideo', function(e) {
                  var fbid=$(this).data("fbid");
                  $("."+fbid).html('');
                });
                function load_chatbg(live_login){
                  console.log('bg_ssok');
                  var number=Math.floor((Math.random() * 10000000000000) + 1);
                  $.getJSON("https://live.sk-knower.com/dashboard2/function/listbg.php?id="+live_login+"&n"+number, function (c) {
                      $('#chat_bg').css('background-image', 'url('+c[0]+')');
                  });
                }

  $(document).on('click', "#sk_icon_set img", function () {
    var axxa = this.alt;
    var axxasrc = this.src;
    var axxaid = this.id;
    if (axxa != '') {
      if ($(".chat-input__textarea>textarea").val() == '') {
        $(".chat-input__textarea>textarea").focus();
        if(isFirefox){
        $(".chat-input__textarea>textarea").val(' ' + axxa);
        }else{
        document.execCommand('insertText', false, ' ' + axxa);
        }
        $(".chat-input__textarea>textarea").focus();
      } else {
        $(".chat-input__textarea>textarea").focus();
        if(isFirefox){
          $(".chat-input__textarea>textarea").val(' ' + axxa);
          }else{
          document.execCommand('insertText', false, ' ' + axxa);
          }
        $(".chat-input__textarea>textarea").focus();
        ///window.App.__container__.lookup("controller:chat").get("currentRoom").set("messageToSend", $(".chat-input__textarea>textarea").val());
      }
      if ($(this).is('[id^="bsk_"]')) {
      } else {
        $(document.getElementById('bsk_' + axxa)).remove();
        $("#sk_set14").prepend("<img id='bsk_" + axxa + "' class='sk_icon_show tooltip' src='" + axxasrc + "' style='max-height:40px;' alt='" + axxa + "'>");
      }
    }
  });

  $(document).on('click', "#sk_set4 >.sk_icon_bottom ", function () {
    var axxa = this.innerHTML;
    if (axxa != '') {
      if ($(".chat-input__textarea>textarea").val() == '') {
        $(".chat-input__textarea>textarea").focus();
        if(isFirefox){
          $(".chat-input__textarea>textarea").val(' ' + axxa);
          }else{
          document.execCommand('insertText', false, ' ' + axxa);
          }
        $(".chat-input__textarea>textarea").focus();
      }else{
        $(".chat-input__textarea>textarea").focus();
        if(isFirefox){
          $(".chat-input__textarea>textarea").val(' ' + axxa);
          }else{
          document.execCommand('insertText', false, ' ' + axxa);
          }
        $(".chat-input__textarea>textarea").focus();
      }
    }
  });


  console.log('123');

  var url = window.location.href;
//console.log(url);
  if (url.match('www.twitch.tv/message/')) {
  } else {
    if (url.match('dashboard')) {
      $("#dash_main").append('<div style="padding: 10px 20px;margin: 0 auto;width: 940px;background: #0276b9;color: white;"><img src="//live.sk-knower.com/sklive_logo2.png" style="height: 36px;"><span style="line-height: 36px;font-size: 15px;">現在SKLive上也有強化"儀表板"的直播控制中心功能,你也可以來試用!</span><a href="http://live.sk-knower.com/dashboard" target="_blank"><span style="float: right;line-height: 36px;font-size: 15px;background: #23b312;color: #ffffff;padding: 0px 8px;">登入SKLive控制中心</span></a></div>')
    }
    if (url.match('sked&channel')) {
      $(document).ready(function () {
        console.log("ready!");
        checkContainer();
      });
//spurl=url.split("/");
//console.log(spurl[3]);
//$('body').html('');
//$('body').html('<iframe src="//player.twitch.tv/?channel='+spurl[3]+'&player=frontpage&!channelInfo&!branding" width="100%" height="100%" frameborder="0" allowfullscreen="" scrolling="no"></iframe>');
    } else {
      if (url.match('player.twitch.tv')) {
        if (url.match('&sklive&!branding') || url.match('&sklive=true')) {
          spurl = url.match("channel=(.*)&sklive");
          console.log(spurl);
          //window.location.href = '//player.twitch.tv/?sked&channel=' + spurl[1] + '&player=&!channelInfo&muted=false&!branding';
          console.log('active');
        }
      } else {
        console.log('[Sklive]Start');
        var counterror = '0';
        $('<link rel="stylesheet" href="https://live.sk-knower.com/lib/scroll/css/perfect-scrollbar.min.css">').appendTo("head");
        //Loop
        function waitForElement() {
          thistitle = window.location.pathname+$('.room-selector__header').text();
          console.log($('.channel-header-user-tab__user-content > .tw-font-size-5').length + thistitle);
          if ($('#sk_icon_set').length == "1") {
            $("#sk_icon_set").remove();
            $("#acgranking").remove();
            $("#sk_skill").remove();
            $("#chat_bg").remove();
            $("#sk_news").remove();
            $("#acgskgame").remove();
            $("#pastebtn").remove();
          }
          if ($('#sk_click_icon').length == "3") {
            foreverloop();
          } else {
            var str1 = window.location.pathname;
            var str2 = "/embed/";
            var str3 = "/popout/";
            var str4 = "/dashboard/";
            var str4 = "/dashboard/";
            if ($('.chat-room__notifications').length == "1" || str1.indexOf(str2) != -1|| str1.indexOf(str3) != -1|| str1.indexOf(str4) != -1) {
              //判定
              if(str1.indexOf(str2) != -1|| str1.indexOf(str3) != -1){
                var IdContent = str1.replace("/popout/",'').replace("/embed/",'').replace("/chat",'');
              }else if(str1.indexOf(str4) != -1){
                var IdContent = str1.replace('/dashboard/live','').replace('/','');
              }else if($("a[data-a-target='watch-mode-to-home']").length == "1"){
                var IdContent = $("a[data-a-target='watch-mode-to-home']").attr('href').replace('/','');
              }else if($('.tw-tab-item').length >= "1"){
              var metaTags = document.getElementsByTagName("meta");
              var IdContent = $('.tw-tab-item').attr('href').replace('/','').replace('/videos/all','').replace('/videos','').replace('/','');
              if (IdContent == '<!---->') {
                var IdContent = document.querySelector("link[rel=alternate]").getAttribute("href").replace('android-app://tv.twitch.android.app/twitch/open?channel=', '');
              }
              }else{
                setTimeout(function () {
                  //console.log('404 chatroom not found:'+counterror);
                  counterror++;
                  waitForElement();
                }, 3000);
                return false;
              }
              console.log('sk:' + IdContent);
              var bcontent = document.createElement("div");
              bcontent.id = "sk_chat_bg";
              bcontent.className = "id_" + IdContent + "_bg";
              var popout = document.createElement("div");
              popout.style.cssText = 'display:none;';
              popout.id = "sk_skill";
              popout.innerHTML = "<div class='skchat_emotes_header' id='b'><div style='position: absolute;top: 3px;left: 0px;'><img src='https://live.sk-knower.com/flag/sklive.png' height='20' style='left: 2px;'> SKLive直播列表</div><div onclick='voteclosees();' class='close'><div style='margin-top: 2px;'>╳</div></div></div><div id='vote_title'></div><div id='sk_timmer'>投票結束</div><ul class='no-bullets'><li id='skli'><div id='skitem1' class='sklistitem'></div><div id='count1' class='skcount'></div></li><li id='skli'><div id='skitem2' class='sklistitem'></div><div id='count2' class='skcount'></div></li><li id='skli'><div id='skitem3' class='sklistitem'></div><div id='count3' class='skcount'></div></li><li id='skli'><div id='skitem4' class='sklistitem'></div><div id='count4' class='skcount'></div></li></ul><ul class='no-bullets2'><li id='skli'><div class='skvote' onclick='clickvote(this);' data-id='a' id='voteabox'>投票</div></li><li id='skli'><div class='skvote' data-id='b' onclick='clickvote(this);' id='votebbox'>投票</div></li><li id='skli'><div class='skvote' onclick='clickvote(this);' data-id='c' id='votecbox'>投票</div></li><li id='skli'><div class='skvote' onclick='clickvote(this);' data-id='d' id='votedbox'>投票</div></li></ul><div style='text-align: right;font-size: 12px;'>總投票人數 <small id='totalvote'>0</small></div><div style='font-size: 12px;;'>＊＊一人只有一票，不可多選<div style='float: right;' id='vote_userid'></div></div>";
              var paopout = document.createElement("div");
              paopout.style.cssText = 'display:none;';
              paopout.id = "acgskgame";
              paopout.innerHTML = "<div class='skchat_acg_header' id='dc'><div style='position: absolute;top: 3px;left: 0px;'></div><div onclick='acgskgameclosees();' class='close' style='background-color: initial;'><div style='margin-top: 2px;'></div></div></div><div style='padding: 0px 5px;background: #2583C7;color: white;'>遊戲:<div id='skgame_title' style='text-align: center;'></div><div style='font-size: 12px;'>你認為這隻遊戲值多少分呢? 10分為滿分</div><div id='totalm' style='font-size: 15px;'><label class='acgskch' for='total1' onclick='clickacggame(this);' data-id='1'>1分</label><label class='acgskch' for='total2' onclick='clickacggame(this);' data-id='2'>2分</label><label class='acgskch' for='total3' onclick='clickacggame(this);' data-id='3'>3分</label><label class='acgskch' for='total4' onclick='clickacggame(this);' data-id='4'>4分</label><label class='acgskch' for='total5' onclick='clickacggame(this);' data-id='5'>5分</label><label class='acgskch' for='total6' onclick='clickacggame(this);' data-id='6'>6分</label><label class='acgskch' for='total7' onclick='clickacggame(this);' data-id='7'>7分</label><label class='acgskch' for='total8' onclick='clickacggame(this);' data-id='8'>8分</label><label class='acgskch' for='total9' onclick='clickacggame(this);' data-id='9'>9分</label><label class='acgskch' for='total10' onclick='clickacggame(this);' data-id='10'>10分</label></div><div style='font-size: 12px;;'>＊＊一人只有一票<br>更多電玩評論: <a href='http://acg.sk-knower.com/' target='_blank' style='color: white;'>http://acg.sk-knower.com/</a></div></div>";
              var news = document.createElement("div");
              news.style.cssText = 'display:none;';
              news.id = "sk_news";
      news.innerHTML = '<div class="skchat_emotes_header" id="c"><div style="position: absolute;top: 3px;left: 3px;"><img src="https://acg.sk-knower.com/acgsk.png" height="20" style="left: 0px;"> SKLive插件 更新資訊</div><div onclick="newsclosees();" class="close"><div style="margin-top: 2px;">╳</div></div></div><div style="font-weight: bold;font-size: 18px;padding: 12px;">久等了! 這是更新!</div><div style="text-align: center;"><a href="https://sk-knower.com/" target="_blank" style="color: white;"><img src="https://sk-knower.com/img/SKGamer_d.png" height="50" style="left: 0px;"></a></div><div style="font-size: 13px;margin: 0px 15px;line-height: 20px;"><div style="padding: 6px;">也許您太久沒有來過SKLive介面上看直播? SKLive已經全新改版了<br>多來看看吧: <a href="https://sk-knower.com/" target="_blank" style="color: white;">https://live.sk-knower.com/</a></div></div><div style="font-weight: bold;font-size: 18px;padding: 12px;">插件更新資訊:</div><div style="font-size: 12px;margin: 0PX 15px 5px;"><div style="">[New] 全新的台主自訂聊天室背景功能, 為也可以為您的直播打扮一下 <a href="https://www.facebook.com/SkKnower/photos/a.451128521638454/2572683526149599/" target="_blank" style="color: white;">&lt;詳細&gt;</a><br>- Facebook不再自動播放, 播放/關閉設定已新增<br>- 介面設計更改進行中<br></div></div><div style="font-size: 25px;padding: 12px;"><br><div style="font-size: 12px;;">＊更多資訊 可到本網<a href="https://www.facebook.com/SkKnower" target="_blank" style="color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;"> Facebook</a><div style="float: right;" id="vote_userid">24/12/2019 @Sundayla123</div></div></div>';


              var message = document.getElementsByClassName('tse-content');
              [].slice.call(message).forEach(function (skttv) {
                if (skttv.id == 'settings') {
                } else {
                  skttv.id = 'sk_ttv';
                }
              });
              var meas = document.getElementsByClassName('chat-input__buttons-container flex justify-content-between mg-t-1');
              [].slice.call(meas).forEach(function (skttv_set) {
                skttv_set.id = 'sk_ttv_set';
              });
              var skicon = document.getElementsByTagName("body");
              var content2 = document.createElement("div");
              content2.id = "sk_icon_set";
              content2.className = "skicon_off";
              content2.innerHTML = '<div class="skchat_emotes_header" id="a"><div onclick="closees();" class="close"><div style="margin-top: 2px;">╳</div></div><div class="skchat_emotes_header" id="a"><div style="position: absolute;top: 3px;left: 3px;"><img src="https://acg.sk-knower.com/acgsk.png" height="20" style="left: 0px;"> SKLive 插件Beta<button id="s8" type="button" class="sk_icon_bottom sktoptag" onclick="setting()" style="position: relative; height: 18px; padding: 0px 2px 0px 2px; background: rgb(100, 65, 165);">設定</button></div></div></div><div><button id="s12" type="button" class="sk_icon_bottom sktoptag" onclick="set12()">本台</button><button id="s1" type="button" class="sk_icon_bottom sktoptag" onclick="set1()" style="background: rgb(0, 140, 227);">-01-</button><button id="s2" type="button" class="sk_icon_bottom sktoptag" onclick="set3()" style="background: rgb(100, 65, 165);">-02-</button><button id="s3" type="button" class="sk_icon_bottom sktoptag" onclick="set6()" style="background: rgb(100, 65, 165);">-03-</button><button id="s4" type="button" class="sk_icon_bottom sktoptag" onclick="set8()" style="background: rgb(100, 65, 165);">-04-</button><button id="s17" type="button" class="sk_icon_bottom sktoptag" onclick="set17()" style="background: rgb(100, 65, 165);">-05-</button><button id="s5" type="button" class="sk_icon_bottom sktoptag" onclick="set2()" style="background: rgb(100, 65, 165);">-06-</button><button id="s6" type="button" class="sk_icon_bottom sktoptag" onclick="set5()" style="background: rgb(100, 65, 165);"><img class="sk_icon_show" height="15px" src="https://live.sk-knower.com/icon/HKG2/Small.gif"></button><button id="s9" type="button" class="sk_icon_bottom sktoptag" onclick="set9()" style="background: rgb(100, 65, 165);"><img class="sk_icon_show" height="15px" src="https://live.sk-knower.com/icon/HKG/Smile.gif"></button><button id="s16" type="button" class="sk_icon_bottom sktoptag" onclick="set16()" style="background: rgb(100, 65, 165);"><img class="sk_icon_show" src="https://live.sk-knower.com/icon/Lomore/biggrin.gif" height="15px"></button><button id="s7" type="button" class="sk_icon_bottom sktoptag" onclick="set4()" style="background: rgb(100, 65, 165);">^д^</button><button id="s14" type="button" class="sk_icon_bottom sktoptag" onclick="set14()">常用</button></div><div id="sk_set1" class="tags_select" style="display: block;"></div><div id="sk_set2" class="tags_select" style="display: none;"></div><div id="sk_set3" class="tags_select" style="display: none;"></div><div id="sk_set6" class="tags_select" style="overflow: auto; height: 297px; display: none;"></div><div id="sk_set5" class="tags_select" style="height: 297px; overflow: auto; display: none;"></div><div id="sk_set4" class="tags_select" style="display: none;"></div><div id="sk_set9" class="tags_select" style="height: 297px; overflow: auto; display: none;"></div><div id="sk_set7" class="tags_select" style="font-size:10px;color: black; display: none;">你發現了彩蛋XD,請確定使用以下表情時不會洗版~<hr><button id="s18" type="button" class="sk_icon_bottom sktoptag" onclick="set18()">直播活動 RC2016</button><button id="s15" type="button" class="sk_icon_bottom sktoptag" onclick="set15()" style="">直播活動 RND2016</button></div><div id="sk_set8" class="tags_select" style="color: black; overflow: auto; height: 297px; display: none;"></div><div id="sk_setting" class="tags_select" style="color: black; display: none;" ><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgc">Clean MY Chat<button type="button" onclick="cleanmychat()" class="sk_icon_bottom on" id="">清空自己聊天室</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_ctrl">顯示P網圖片(18+ 自動除外)　<button type="button" onclick="plinkon()" class="sk_icon_bottom on" id="plinkon" style="border-bottom-width: 4px; border-bottom-style: solid; border-bottom-color: rgb(255, 255, 255);">開啟</button><button type="button" onclick="plinkoff()" class="sk_icon_bottom off" id="plinkoff">關閉</button></div><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgc">聊天室 只顯示中文id<button type="button" onclick="setonlyeng()" class="sk_icon_bottom on" id="">開啟</button><button type="button" onclick="setonlyengoff()" class="sk_icon_bottom off" id="">關閉</button></div><button type="button" class="sk_icon_bottom" id="lan_word">字體大小(px)</button><input type="range" min="5" max="30" oninput="updateTextInput(this.value);setword();" style="width: 120px;" id="fontrange"><input type="text" id="textbox1" style="width: 21px;"><button type="submit" class="sk_icon_bottom" id="button1" onclick="setword()">SAVE</button><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgc">聊天室 純黑背景/白字粗體<button type="button" onclick="setdark()" class="sk_icon_bottom on" id="cdarkon">開啟</button><button type="button" onclick="setnodark()" class="sk_icon_bottom off" id="cdarkoff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_name">聊天室名字白邊框　　　　<button type="button" onclick="dark2words()" class="sk_icon_bottom on" id="darkwordson">開啟</button><button type="button" onclick="setnodark2words()" class="sk_icon_bottom off" id="darkwordsoff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_ctrl">[ALT+Click]複製@id　　　<button type="button" onclick="cctrlon()" class="sk_icon_bottom on" id="cctrlon">開啟</button><button type="button" onclick="cctrloff()" class="sk_icon_bottom off" id="cctrloff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_img">圖片[s][e]自動顯示　　　<button type="button" onclick="imgtag()" class="sk_icon_bottom on" id="imgtag">開啟</button><button type="button" onclick="imgtagoff()" class="sk_icon_bottom off" id="imgtagoff">關閉</button></div><div type="button" class="sk_icon_bottom" style="width: 260px;" id="lan_name">Language<button type="button" onclick="zh()" class="sk_icon_bottom" style="margin-top: 0px;margin-left: 77PX;background: #34AE0A;">中文</button><button type="button" onclick="eng()" class="sk_icon_bottom" style="margin-top: 0px;background: #34AE0A;">English</button></div><button type="button" class="sk_icon_bottom" onclick="set11();">[P]Link記錄</button><a href="https://live.sk-knower.com" target="_blank"><img src="https://live.sk-knower.com/icon/sklivelogo1.png" style="vertical-align: middle;height: 40px;" alt="SKLive中文直播列表"><button type="button" class="sk_icon_bottom" id="lan_sklive">來SK-Live看直播吧!</button><button type="button" class="sk_icon_bottom" style="margin-top: 0px;" id="lan_content">連絡作者:Sundayla123</button></a><a href="https://www.facebook.com/SkKnower" target="_blank"><button type="button" class="sk_icon_bottom" style="margin-top: 0px;" id="lan_content">Facebook</button></a><button id="s10" type="button" class="sk_icon_bottom sktoptag" onclick="set10()" style="background: rgb(100, 65, 165);">投票</button><button id="button1" onclick="opennews()" style="" class="sk_icon_bottom">更新資訊</button><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_bgcolor">自設背景顏色<input id="favcolor" type="color" name="favcolor" value="#FFFFFF"><button type="button" onclick="setbgc()" class="sk_icon_bottom" style="margin-top: 0px;margin-left: 36PX;background: #34AE0A;">SAVE</button></div><div type="button" style="width: 260px;" class="sk_icon_bottom" id="lan_wdcolor">自設文字顏色<input id="favwordcolor" type="color" name="favwordcolor" value="#111111"><button type="button" onclick="setwordcolor()" class="sk_icon_bottom" style="margin-top: 0px;margin-left: 36PX;background: #34AE0A;">SAVE</button></div></div><div id="sk_set10" class="tags_select" style="height: 297px; overflow: auto; display: none;">*只有台主才可以發動投票<button id="button1" onclick="openvote()" style="" class="sk_icon_bottom">打開投票頁面</button><div class="sk_icon_bottom">標題 <input type="text" class="vote_ui" id="voteui_title"></div><div class="sk_icon_bottom">限時(s) <input type="text" class="vote_ui" id="voteui_time"></div><div class="sk_icon_bottom">選項A<input type="text" class="vote_ui" id="voteui_a"></div><div class="sk_icon_bottom">選項B<input type="text" class="vote_ui" id="voteui_b"></div><div class="sk_icon_bottom">選項C<input type="text" class="vote_ui" id="voteui_c"></div><div class="sk_icon_bottom">選項D<input type="text" class="vote_ui" id="voteui_d"></div><div style="text-align:right;"><button type="button" class="sk_icon_bottom sktoptag" onclick="closevote()" style="background: rgb(100, 65, 165);">取消投票</button><button type="button" class="sk_icon_bottom sktoptag" onclick="setsendvote()" style="background: rgb(100, 65, 165);">[生產投票Code]</button></div><div id="votename"></div></div><div id="sk_set11" style=" display: none;color: black;height: 305px;overflow: auto;"></div><div id="sk_set12" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;"><div id="ischannelboss"></div><div id="channeldata" style="font-size:10px;background:#6441A5;color:white;padding:4px;line-height: 15px;"></div><div id="usericonset" style="font-size:10px;"><hr></div><div id="f5usericonset" style="font-size: 10px;"></div></div><div id="sk_set13" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;"><div class="sk_icon_bottom">設定指引<br>你現在可以在SKLive直播控制中心內更改你的本台表情!立即登入修改:</br><a href="https://live.sk-knower.com/dashboard/new/home" target="_blank" style="color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;"> https://live.sk-knower.com/dashboard/new/home</a></div><div id="editicon" style="display:none;"></div></div><div id="arraysave" style="display: none;"></div><div id="sk_set14" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;"><hr><div id="usericonset" style="font-size:10px;">你最近使用的表情</div></div><div id="sk_set15" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;">ROCKMAN NEVER DIES! 2016 12月1日至30日</br><a href="https://live.sk-knower.com/RND2016" target="_blank">https://live.sk-knower.com/rnd2016</a><hr><div id="eventiconset"></div></div><div id="sk_set16" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;"></div><div id="sk_set17" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;"></div><div id="sk_set18" class="tags_select" style="display: none;color: black;height: 305px;overflow: auto;font-size:10px;">Rockman Chronicles 2016 7月1日至31日</br><a href="https://live.sk-knower.com/RockmanChronicles" target="_blank">https://live.sk-knower.com/RockmanChronicles</a><hr><div id="event2iconset"></div></div>';
              function function2() {
                var IdContent =  $(".top-nav__username").text().toLowerCase();
                console.log('username:' + IdContent);
                $(".chat-room").append(popout);
                $(".chat-room").append(news);
                $(".chat-room").append(paopout);
                var myList = document.getElementsByTagName("textarea");
                var skset = document.getElementById("sk_icon_set");
                var skdiv = document.getElementById("sk_ttv_set");
                var content = document.createElement("a");
                content.id = "sk_click_icon";
                content.className = "sk_click_icon";

                  setTimeout(function () {
                    var meas = document.getElementsByClassName('chat-input__buttons-container');
                    [].slice.call(meas).forEach(function (skttv_set) {
                      skttv_set.id = 'sk_ttv_set';
                    });
                    var skdiv = document.getElementById("sk_ttv_set").getElementsByClassName('tw-flex')[0];
                    if($('.sk_click_icon').length=='0'){
                      skdiv.appendChild(content);
                      $( "#sk_click_icon" ).click(function() {
                        if (document.getElementById("sk_icon_set").className == "skicon_off") {
                          document.getElementById("sk_icon_set").className = "skicon_on";
                          document.getElementById("sk_icon_set").style.top = "45px";
                          document.getElementById("sk_icon_set").style.right = "13px";
                          document.getElementById("sk_icon_set").style.left = "inherit";
                          document.getElementById("sk_click_icon").style.backgroundImage = "url(https://live.sk-knower.com/icon/22_on.png)";
                        } else {
                          document.getElementById("sk_icon_set").className = "skicon_off";
                          document.getElementById("sk_click_icon").style.backgroundImage = "url(https://live.sk-knower.com/icon/22_off.png)";
                        }
                      });
                    }
                    if($("#watchonsklive").length == 0){
                    $('[data-target="channel-header-right"]').append('<dd id="watchonsklive" class="cn-tabs__button" style="padding-left: 5px;"><button type="button" onclick="gousersk();" original-title="在SKLive大屏幕觀看!" class="sk_icon_bottom tooltip" style="position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;margin-right: 15px;background: #0089ff;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"><ccc style="margin-right: 5px;"><img src="https://acg.sk-knower.com/acgsk.png" height="20" width="20" style="left: 0px;"></ccc><span class="wosl" style="background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;">在SKLive觀看直播</span></button></dd>');
                    }
                  }, 1000);
                $(".chat-input > div > .tw-block").prepend('<span id="pastebtn"><button id="pastephoto" type="button" class="sk_icon_bottom sktoptag quikelink" onclick="pastephoto();" style="height: 17px;position: absolute; top: -17px; background: rgba(0,0,0,0.1);left: 0px;">圖片</button><button type="button" class="sk_icon_bottom sktoptag quikelink" onclick="pasteyt()" style="height: 17px;display: initial; position: absolute; top: -17px; background: rgba(0,0,0,0.1);left: 32px;">影片</button><button type="button" class="sk_icon_bottom sktoptag quikelink" onclick="pastepid()" style="height: 17px;display: initial; position: absolute; top: -17px; background: rgba(0,0,0,0.1);left: 64px;">Pixiv</button><a type="button" class="sk_icon_bottom sktoptag quikelink" onclick="opennews();"  style="height: 17px;display: initial; position: absolute; top: -17px; background: rgba(0,0,0,0.1);right: 0px;">SKLive更新資訊</a></span>');
                $(".quikelink").on("mouseenter", function () {
                  $(this).css({"top": "-23px", "height": "23px"});
                });
                $(".quikelink").on("mouseleave", function () {
                  $(this).css({"top": "-17px", "height": "17px"});
                });
                

/////////////////////////////////////////////////
var str1 = window.location.pathname;
var str2 = "/popout/";
var str3 = "/embed/";
var str4 = "/dashboard/";
if(str1.indexOf(str2) != -1||str1.indexOf(str3) != -1){
  var channelid = str1.replace("/popout/",'').replace("/embed/",'').replace("/chat",'');
  }else if(str1.indexOf(str4) != -1){
    var channelid = str1.replace('/dashboard/live','').replace('/','');
  }else if($("a[data-a-target='watch-mode-to-home']").length == "1"){
                var channelid = $("a[data-a-target='watch-mode-to-home']").attr('href').replace('/','');
              }else{
                var channelid = $('.tw-tab-item').attr('href').replace('/','').replace('/videos/all','').replace('/videos','').replace('/','');
}
channelid=channelid;
                console.log('本台id' + channelid);
                var bcontent = document.createElement("div");
                bcontent.id = "chat_bg";
                bcontent.style.zIndex = "auto";
                $(".chat-list").prepend(bcontent);
                load_chatbg(channelid);
                var subiconList = [
                  {
                    "code": /sk_sklogo/gi,
                    "src": "https://live.sk-knower.com/flag/sklive.png",
                    "width": 50,
                    "height": 50,
                    "alt": "sk_sklogo",
                    "isRegex": true
                  }
                ];
                if (channelid == "mrrockrock11") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.moderator{background:#34ae0a url(https://live.sk-knower.com/icon/badge_mod2.svg)!important;background-size:100%!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "dolaemongoxz1") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.broadcaster{background:#e71818 url("https://live.sk-knower.com/icon/badge_mod3.svg")!important;background-size:100%!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "skbear2725") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.moderator{background:#090 url(https://live.sk-knower.com/icon/broadcaster.png)!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "skbear2725") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.moderator{background:#090 url(https://live.sk-knower.com/icon/broadcaster.png)!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                if (channelid == "fayoujo1007") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.broadcaster{background-color:black !important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);

                }
                if (channelid == "sundayla123") {
                  var style = document.createElement('style');
                  style.type = 'text/css';
                  style.innerHTML = '.broadcaster{background:url(https://live.sk-knower.com/icon/MOD.png)!important;}';
                  document.getElementsByTagName('head')[0].appendChild(style);
                }
                $('<div id="acgranking" style="position: absolute;right: 0px;z-index: 1;display:none;">遊戲評分進行中...</div>').insertAfter('.channel-header-user-tab__user-content > .tw-font-size-5');
/////////////////////////////////////////
               // sk_set = document.querySelector('.tags_select');
                // const ps = new PerfectScrollbar(sk_set);
                $.getJSON("https://live.sk-knower.com/lib/acg/plugincomment.php?gid=" + channelid + "&callback=?", function (comment) {
                  if (comment.comment != "") {
                    var someNumbers = [1, 2];
                    var adminMessage = {
                      "message": "SKRecent" + channelid,
                      "from": "", "style": "admin"

                    };
                    ///window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                  }
                });

                $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel="+channelid+ "&callback=?", function (icon) {
                  if (typeof icon === "undefined") {
                    $("#channeldata").append("<a href='http://live.sk-knower.com/" + channelid + "' target='_blank' style='color: #ffffff;'>http://live.sk-knower.com/" + channelid + "</a></br>使用SKLive網頁觀看直播,可為本台增加EXP及等級</br>本台等級:未開始統計<span class='tooltip' style='background: #322153;color: #BAAED2;font-size: 10px;float: right;cursor: pointer;' original-title='使用SKLive網頁觀看直播,可為本台增加EXP及等級'>　[?]　</span><div style=''><div style='float: left;'>Exp:</div><div style='width: 240px;background: rgba(0, 0, 0, 0.5);height: 14px;float: left;position: relative;'><div style='width: 0px;height: 5px;border-bottom: 14px solid #9E9A09;color: #ECE6E6;'></div><div style='position: absolute;top: 0px;width: 100%;text-align: center;'>0/0 (0%)</div></div></div></br>如你是本台台主,可立即設定SK自訂表情,推薦觀眾使用SKLive界面看直播得到本台EXP<div style='text-align: center;'><img src='https://live.sk-knower.com/newskicon.png' height='110' style='left: 0px;'></div><div style='margin-left:13px;    font-size: 12px;line-height: 15px;'>只要打開你的聊天室,新增本台表情符號<br>你就可以製作本台專用的表情給觀眾使用!</div><div style='font-size: 12px;;'>＊＊更多更新資訊 可到本網<a href='https://www.facebook.com/SkKnower' target='_blank' style='color: #2B60E6;text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;'> Facebook</a><div style='float: right;' id='vote_userid'></div></div>");
                  } else {
                    allusericon = icon.length;
                    $.each(icon, function (i, item) {
                      var nopx = icon[i].height.replace('px', '');
                      $("#usericonset").append("<img id='b" + icon[i].alt + "' class='sk_icon_show tooltip' src='" + icon[i].src + "' style='max-height:40px;' alt='" + icon[i].alt + "' original-title='" + icon[i].alt + "'>");

                      $("#editicon").append("<div id='" + icon[i].alt + "' class='sk_icon_bottom usersk" + i + "' style='margin: 1px;'><button onclick='follow00system(\"" + icon[i].src + "\",\"" + icon[i].alt + "\");'  style='font-size: 13px;float: right;line-height: 32px;background-color: rgb(213, 3, 3);color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>刪除</button><img alt='" + icon[i].alt + "' class='sk_icon_show tooltip' src='" + icon[i].src + "' style='max-width: 237px;' height='40' original-title='" + icon[i].alt + " (" + icon[i].height + ")'>" + icon[i].alt + " (" + icon[i].height + ")<button onclick='opendeiticon(\"skliveedit_" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>編輯</button> <button onclick='icongoup(\"" + i + "\",\"" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>上移</button> <button onclick='icongodown(\"" + i + "\",\"" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>下移</button><div id='skliveedit_" + icon[i].alt + "' style='display: none;'><input type='text' value='" + icon[i].src + "' class='vote_ui' id='editurl_" + icon[i].alt + "'><input type='text' id='editpx_" + icon[i].alt + "' value='" + nopx + "' style='width: 35px;'><button onclick='edit_the_icon(\"" + icon[i].alt + "\",\"editurl_" + icon[i].alt + "\",\"editpx_" + icon[i].alt + "\");' style='font-size: 13px;line-height: 20px;background-color: #3B1384;color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>save</button></div></div>");
                    });
                    $("#s12").css("display", "initial");

                    $.getJSON("https://live.sk-knower.com/lib/chat_level.php?channel=" + channelid + "&callback=?", function (expbar) {
                      if (expbar) {
                        var level = Math.sqrt(expbar / 10);
                        yourlevel = Math.floor(level);
                        if (level < 0) {
                          yourlevel = 0;
                        }
                        if (yourlevel < 25) {
                          var nowlevelexp = (yourlevel) * (yourlevel) * 10;
                          var nextlevelexp = (yourlevel + 1) * (yourlevel + 1) * 10;
                          var thislevelneed = nextlevelexp - nowlevelexp;
                          var thislevelhave = expbar - nowlevelexp;
                          var yourexp = thislevelhave / thislevelneed * 100;
                        } else {
                          var level = Math.sqrt(expbar / 20);
                          yourlevel = Math.floor(level);
                          if (expbar < 13520) {
                            yourlevel = 25;
                            var thislevelneed = 7270;
                            var thislevelhave = expbar - 6250;
                            var yourexp = thislevelhave / thislevelneed * 100;
                          } else {
                            var nextlevelexp = (yourlevel + 1) * (yourlevel + 1) * 20;
                            var nowlevelexp = (yourlevel) * (yourlevel) * 20;
                            var thislevelneed = nextlevelexp - nowlevelexp;
                            var thislevelhave = expbar - nowlevelexp;
                            var yourexp = thislevelhave / thislevelneed * 100;
                          }
                        }
                        $("#channeldata").append("<a href='http://live.sk-knower.com/" + channelid + "' target='_blank' style='color: #ffffff;'>http://live.sk-knower.com/" + channelid + "</a></br>使用SKLive網頁觀看直播,可為本台增加EXP及等級</br>本台等級:" + yourlevel + "<span class='tooltip' style='background: #322153;color: #BAAED2;font-size: 10px;float: right;cursor: pointer;' original-title='使用SKLive網頁觀看直播,可為本台增加EXP及等級'>　[?]　</span><div style=''><div style='float: left;'>Exp:</div><div style='width: 240px;background: rgba(0, 0, 0, 0.5);height: 14px;float: left;position: relative;'><div style='width: " + yourexp * 2.4 + "px;height: 5px;border-bottom: 14px solid #9E9A09;color: #ECE6E6;'></div><div style='position: absolute;top: 0px;width: 100%;text-align: center;'>" + thislevelhave + "/" + thislevelneed + " (" + Math.floor(yourexp) + "%)</div></div></div><br>以下SKLive表情由本台台主上載,只限本聊天室使用");
                        //$('.tooltip').tipsy();
                      } else {
                        $("#channeldata").append("<a href='http://live.sk-knower.com/" + channelid + "' target='_blank' style='color: #ffffff;'>http://live.sk-knower.com/" + channelid + "</a></br>使用SKLive網頁觀看直播,可為本台增加EXP及等級</br>本台等級:0<span class='tooltip' style='background: #322153;color: #BAAED2;font-size: 10px;float: right;cursor: pointer;' original-title='使用SKLive網頁觀看直播,可為本台增加EXP及等級'>　[?]　</span><div style=''><div style='float: left;'>Exp:</div><div style='width: 240px;background: rgba(0, 0, 0, 0.5);height: 14px;float: left;position: relative;'><div style='width: 0px;height: 5px;border-bottom: 14px solid #9E9A09;color: #ECE6E6;'></div><div style='position: absolute;top: 0px;width: 100%;text-align: center;'>0/10 (0%)</div></div></div></br>以下SKLive表情由本台台主上載,只限本聊天室使用");
                      }
                    });
                  }
                  //$('.tooltip').tipsy();
                });


                var foreverloop = function () {
                  $.getScript("https://live.sk-knower.com/lib/chat_icon.js", function () {
                    $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel=" + channelid + "&callback=?", function (uicon) {
                      var someNumbers = [1, 2];
                      var adminMessage = {
                        "message": "!sklive_adlist",
                        "from": "", "style": "admin"

                      };
                      //window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                      if (typeof uicon === "undefined") {
                        var uicon = [
                          {
                            "code": /sk_sklogo/gi,
                            "src": "https://live.sk-knower.com/flag/sklive.png",
                            "width": 50,
                            "height": 50,
                            "alt": "sk_sklogo",
                            "isRegex": true
                          }
                        ];
                      } else {
                        $("<style>#s12{ background: #01AB00 !important; }</style>").appendTo("head");
                      }
                      (function updateCounter() {
                        if ($(".moderation-card")[0]) {
                          if ($(".addedsklink")[0]) {
                          } else {
                            $(".moderation-card").append('<div class="addedsklink" style="position: absolute;right: 0px;bottom: 0px;z-index:999;"><button onclick="gousersk();" type="button" class="sk_icon_bottom sktoptag tooltip" style="position: relative; height: 18px; padding: 0px 2px; background: rgb(100, 65, 165);margin: 0px;" original-title="在SKLive大屏幕觀看">在SKLive上觀看</button></div>');
                          }
                        }
                        var deleted = document.getElementsByClassName('deleted');
                        [].slice.call(deleted).forEach(function (skdeleted) {
                          if (skdeleted.className == 'deleted') {
                            var kids = $(skdeleted).parent("div").children(".from");
                            var usernamedata = kids.text();
                            var usernamedd = usernamedata.cleanup();
                            var someNumbers = [1, 2];
                            var adminMessage = {
                              "message": "[SK-Live] " + usernamedata + " 已被ban",
                              "from": "", "style": "admin"

                            };
                            if ($(".skdeleted" + usernamedd + "")[0]) {
                            } else {
                              //window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
                              $('span[class="deleted"]').attr('class', "skdeleted" + usernamedd + " deleted");
                            }
                          }
                        })
                        $(".chat-line__message:not(.skClass)").each(function( index ) {		
							$(this).addClass( "skClass" );
							$("span[data-a-target='chat-message-text']:not(.skactive)").each(function( index ) {
							//console.log( index + ": " + $( this ).text() );
							$(this).addClass( "skactive" );
							//console.log('activela');
                            var a = $(this).text();
                            var result = $(this).html();
                            if (a=='!setbg') {
                              load_chatbg(channelid);
                            }
							if ($(this).text().match(/\[s\]/g)) {
                var b=$(this).next("a").attr('href');
                var type='normal';
                if(typeof b == 'undefined'){
                  var b=$(this).text().match(/\[s\](.*)\[e\]/);
                  if(b !== null) {
                    var b=b[1];
                  }
                  var type='oldver';
                }
								$(this).next("a").css( "display", "none" );
								var setimg = getCookie("setimg");
								if(b && setimg!='off'){
                                  if (b.match(/youtu/g)&&!b.match(/img/g)&&!b.match(/jpg/g)) {
                                    if (b.match(/watch?/g)) {
                                      v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                    } else {
                                      v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                      var t = getParameterByName('t', url);
                                    }
                                    var e = '<iframe width="300" height="150" src="https://www.youtube.com/embed/' + v + '" frameborder="0" allowfullscreen></iframe>';
                                  } else if (b.match(/steampowered/g) || b.match(/steamcommunity/g)) {
                                      var number = Math.floor((Math.random() * 100000) + 1);
                                      burl = b.match("app/([0-9]+)");
                                      if (burl) {
                                        var e = '<iframe id="' + number + '" width="100%" height="190px" src="https://store.steampowered.com/widget/' + burl[1] + '" frameborder="0" allowfullscreen></iframe><a href="steam://store/' + burl[1] + '" target="_blank"><div style="color: #d2efa9;text-shadow: 1px 1px 2px rgba( 0, 0, 0, 0.3 );text-align: center;padding: 0px 11px;line-height: 34px;border-radius: 2px;text-transform: unset;background: #75b022;">以Steam程式查看商店頁面</div></a>';
                                      } else {
                                        var e = '<a href="' + b + '" target="_blank">[SK-Live]錯誤steam網址</a>';
                                      }
                                    } else if (b.match(/static-cdn.jtvnw.net/g)) {
                                        var e = '<a href="' + b + '" target="_blank">[SK-Live]此域名限制圖片外連</a>';
									} else if (b.match(/.webm/g) || b.match(/.mp4/g)) {
										var number = Math.floor((Math.random() * 100000) + 1);
                                        var e = '<video id="' + number + '" onclick="vodgif('+number+');" controls="" loop="" muted="" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video>';
                                    } else {
                                        var number = Math.floor((Math.random() * 100000) + 1);
                                        var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b.replace('gifv', 'gif') + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-top;"/></a>';
                                      }		
                  if(type=='oldver'){
                  var result = result.replace(/\[s](.*)\[e]/, e);
                  }else{
                  var result = result.replace("[s]", e);
                  }
                if($(this).next("a").next("span").text().match(/\[e\]/g)){
                  $(this).next("a").next("span").html($(this).next("a").next("span").html().replace("[e]", ''));
                }
								}
							}

							if ($(this).text().match(/\[img\]/g)) {
                var b=$(this).next("a").attr('href');
                var type='normal';
                if(typeof b == 'undefined'){
                  var b=$(this).text().match("[img](.*)[/img]");
                  var b=b[1].replace(']', '').replace('[', '');
                  var type='oldver';
                }
								$(this).next("a").css( "display", "none" );
								var setimg = getCookie("setimg");
								if(b && setimg!='off'){
                                  if (b.match(/youtu/g)&&!b.match(/img/g)&&!b.match(/jpg/g)) {
                                    if (b.match(/watch?/g)) {
                                      v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                    } else {
                                      v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                      var t = getParameterByName('t', url);
                                    }
                                    var e = '<iframe width="300" height="150" src="https://www.youtube.com/embed/' + v + '" frameborder="0" allowfullscreen></iframe>';
                                  } else if (b.match(/steampowered/g) || b.match(/steamcommunity/g)) {
                                      var number = Math.floor((Math.random() * 100000) + 1);
                                      burl = b.match("app/([0-9]+)");
                                      if (burl) {
                                        var e = '<iframe id="' + number + '" width="100%" height="190px" src="https://store.steampowered.com/widget/' + burl[1] + '" frameborder="0" allowfullscreen></iframe><a href="steam://store/' + burl[1] + '" target="_blank"><div style="color: #d2efa9;text-shadow: 1px 1px 2px rgba( 0, 0, 0, 0.3 );text-align: center;padding: 0px 11px;line-height: 34px;border-radius: 2px;text-transform: unset;background: #75b022;">以Steam程式查看商店頁面</div></a>';
                                      } else {
                                        var e = '<a href="' + b + '" target="_blank">[SK-Live]錯誤steam網址</a>';
                                      }
                                    } else if (b.match(/static-cdn.jtvnw.net/g)) {
                                        var e = '<a href="' + b + '" target="_blank">[SK-Live]此域名限制圖片外連</a>';
									} else if (b.match(/.webm/g) || b.match(/.mp4/g)) {
										var number = Math.floor((Math.random() * 100000) + 1);
                                        var e = '<video id="' + number + '" onclick="vodgif('+number+');" controls="" loop="" muted="" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video>';
                                    } else {
                                        var number = Math.floor((Math.random() * 100000) + 1);
                                        var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b.replace('gifv', 'gif') + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-top;"/></a>';
                                      }		
                  if(type=='oldver'){
                  var result = result.replace("[img]"+b+"[/img]", e);
                  }else{
                  var result = result.replace("[img]", e);
                  }
                    if($(this).next("a").next("span").text().match(/\[\/img\]/g)){
                      $(this).next("a").next("span").html($(this).next("a").next("span").html().replace("[/img]", ''));
                    }
								}
							}
							
                            if ($(this).text().match(/\[p\]/g)) {
                              var start = $(this).text().indexOf('[p]');
                              var end = $(this).text().indexOf('i]');
                              var eend = $(this).html().indexOf('[i]');
                              if (end > start && end >= 0 && start >= 0) {
                                var b = $(this).text().substring(start, end); // contents between #start# and #end#
                                var c = $(this).text().substring(0, start); // w/e before #start#
                                var d = $(this).html().substring(eend + 3).replace('[i]', '');  // w/e after #end#
                                b = b.replace('[p]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "").replace('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=', '');
                                if (b == '' || b == 'P網id') {
                                  b = '52402701';
                                }
                                if (d.match(/18+/g)) {
                                  var e = '<span class="mentioned"><a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank" style="color: #FFFFFF;background-color: #000;">18+ pixiv id=' + b + '</a></span>';
                                } else {
                                  var plink = getCookie("plink");
                                  if (d.match(/show/g) || plink != 'off') {
                                    var number = Math.floor((Math.random() * 1000) + 1);
                                    e = '<a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank"><img id="' + number + '" alt="[p]' + b + '[i]" src="http://embed.pixiv.net/decorate.php?illust_id=' + b + '" style="max-height: 200px;  max-width: 250px;vertical-align: text-bottom;"/></a>';
                                  } else {
                                    var e = '<span class="mentioning"><a href="https://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + b + '" target="_blank">pixiv id=' + b + '</a></span>';
                                  }
                                }
                                a = c + e + d; // result

                                var result= a;
                                $('#' + number).load(function () {
                                  scroller();
                                });
                                console.log(e);
                              }
                            }


                            if ($(this).text().match(/\[y\]/g)) {
                              var b=$(this).next("a").attr('href');
                              $(this).next("a").css( "display", "none" );
                              var setimg = getCookie("setimg");
                              if(b && setimg!='off'){
                                                if (b.match(/youtu/g)&&!b.match(/img/g)&&!b.match(/jpg/g)) {
                                                  if (b.match(/watch?/g)) {
                                                    v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                                  } else {
                                                    v = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                                    var t = getParameterByName('t', url);
                                                  }
                                                  var e = '<iframe width="300" height="150" src="https://www.youtube.com/embed/' + v + '" frameborder="0" allowfullscreen></iframe>';
                                                } else if (b.match(/facebook/g)) {
                                                  var fbvideoid = b.match("videos/(.*?)/");
                                                  var fbvideoid =fbvideoid[1];
                                                  console.log(fbvideoid);
                                                  var e = '<div><div style="padding: 5px;background: rgba(0, 0, 0, 0.45098039215686275);color: white;border-radius: 5px 5px 0px 0px;">Facebook <i class="facebookclosevideo material-icons" data-fbid="'+fbvideoid+'" class="material-icons" style="cursor:pointer;font-size: 20px;float: right;" >close</i> </div><div style="min-width: 250px;text-align: center;line-height: 200px;height: 200px;box-shadow: none;color: white;position: relative;overflow: hidden;background: black;cursor: pointer;" data-fbid="'+b+'" class="facebookvideo '+fbvideoid+'"><div style="Background-image: url(https://graph.facebook.com/'+fbvideoid+'/picture);position: absolute;color: white;z-index: 0;width: 100%;height: 100%;opacity: 0.5;background-size: contain;background-repeat: no-repeat;background-position: center;"></div><div>播放</div></div></div>';
                                                } else if (b.match(/twitter/g)) {
                                                  var e = '<blockquote class="twitter-video" data-lang="zh-tw"><a href="'+ b+'"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
                                                } else if (b.match(/static-cdn.jtvnw.net/g)) {
                                                      var e = '<a href="' + b + '" target="_blank">[SK-Live]此域名限制圖片外連</a>';
                                                } else if (b.match(/.webm/g) || b.match(/.mp4/g)) {
                                                 var number = Math.floor((Math.random() * 100000) + 1);
                                                      var e = '<video id="' + number + '" onclick="vodgif('+number+');" controls="" loop="" muted="" style="max-height: 200px;  max-width: 250px;" src="' + b + '"></video>';
                                                  } else {
                                                      var number = Math.floor((Math.random() * 100000) + 1);
                                                      var e = '<a href="' + b + '" target="_blank"><img id="' + number + '" alt="[s]' + b + '[e]" src="' + b.replace('gifv', 'gif') + '" style="max-height: 200px;  max-width: 250px;  vertical-align: text-top;"/></a>';
                                                    }		
                                var result = result.replace("[y]", e);
                                  if($(this).next("a").next("span").text().match(/\[t\]/g)){
                                    $(this).next("a").next("span").html($(this).next("a").next("span").html().replace("[t]", ''));
                                  }
                              }else{
                                var start = $(this).text().indexOf('[y]');
                                var end = $(this).text().indexOf('t]');
                                var eend = $(this).html().indexOf('[t]');
                                if (end > start && end >= 0 && start >= 0) {
                                  var b = $(this).text().substring(start, end); // contents between #start# and #end#
                                  var c = $(this).text().substring(0, start); // w/e before #start#
                                  var d = $(this).html().substring(eend + 3).replace('[t]', '');  // w/e after #end#
                                  b = b.replace('[y]', '').replace('[', '').replace(/ /g, '').replace(/[\r\n]/g, "").replace('https://www.youtube.com/watch?v=', '');
  
                                  if (b.match(/影片連結/g)){}else{
                                    if (b.match(/facebook/g)) {
                                      var fbvideoid = b.match("videos/(.*?)/");
                                      var fbvideoid =fbvideoid[1];
                                      console.log(fbvideoid);
                                      var e = '<div><div style="padding: 5px;background: rgba(0, 0, 0, 0.45098039215686275);color: white;border-radius: 5px 5px 0px 0px;">Facebook <i class="facebookclosevideo material-icons" data-fbid="'+fbvideoid+'" class="material-icons" style="cursor:pointer;font-size: 20px;float: right;" >close</i> </div><div style="min-width: 250px;text-align: center;line-height: 200px;height: 200px;box-shadow: none;color: white;position: relative;overflow: hidden;background: black;cursor: pointer;" data-fbid="'+b+'" class="facebookvideo '+fbvideoid+'"><div style="Background-image: url(https://graph.facebook.com/'+fbvideoid+'/picture);position: absolute;color: white;z-index: 0;width: 100%;height: 100%;opacity: 0.5;background-size: contain;background-repeat: no-repeat;background-position: center;"></div><div>播放</div></div></div>';
                                    } else if (b.match(/twitter/g)) {
                                      var e = '<blockquote class="twitter-video" data-lang="zh-tw"><a href="'+ b+'"></a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
                                    } else {
                                      if (b.match(/watch?/g)) {
                                        b = b.replace('https://www.youtube.com/watch?', '');
                                        var query = b;
                                        var vars = query.split("&");
                                        for (var i = 0; i < vars.length; i++) {
                                          var pair = vars[i].split("=");
                                          if (pair[0] == 'v') {
                                            b = pair[1];
                                          }
                                        }
                                      } else {
                                        b = b.replace('https://www.youtube.com/watch?v=', '').replace('https://youtu.be/', '').replace('https://www.youtube.com/embed/', '').replace('&feature=youtu.be', '');
                                      }
                                      var e = '<iframe width="300" height="150" src="https://www.youtube.com/embed/' + b + '" frameborder="0" allowfullscreen></iframe>';
                                    }
                                a = c + e + d; // result
  
                                  var result= a;
                              }
                            }
                          }
                        };

 							
							
		
                        for (var i = 0; i < halloweenlomore.length; i++) {
                          var iconvar = halloweenlomore[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < hkg2.length; i++) {
                          var iconvar = hkg2[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < lomoreList.length; i++) {
                          var regex = lomoreList[i].code;
                          if (a.match(regex)) {
                            var width = lomoreList[i]["width"];
                            var height = lomoreList[i]["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + lomoreList[i].src + "' height='" + height + "' width='" + width + "' alt='" + lomoreList[i].alt + "' data-lm='lm'></img>");
                          }
                          var alllomore = lomoreList.length - 1;
                          if (i == alllomore) {
                            for (var i = 0; i < hkg1.length; i++) {
                              var iconvar = hkg1[i];
                              var regex = iconvar.code;
                              if (result.match(regex)) {
                                var width = iconvar["width"];
                                var height = iconvar["height"];
                                var fwidth = width * (1 / height);
                                result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                                scroller();
                              }
                            }
                            if (result.match(/data-lm/g)) {
                              scroller();
                            }
                          }
                        }

                        for (var i = 0; i < Set1List.length; i++) {
                          var iconvar = Set1List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < Set2List.length; i++) {
                          var iconvar = Set2List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < Set3List.length; i++) {
                          var iconvar = Set3List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < Set4List.length; i++) {
                          var iconvar = Set4List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < Set5List.length; i++) {
                          var iconvar = Set5List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < Set6List.length; i++) {
                          var iconvar = Set6List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < Set7List.length; i++) {
                          var iconvar = Set7List[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < eventlist.length; i++) {
                          var iconvar = eventlist[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < event2list.length; i++) {
                          var iconvar = event2list[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }
                        for (var i = 0; i < hiddenlist.length; i++) {
                          var iconvar = hiddenlist[i];
                          var regex = iconvar.code;
                          if (a.match(regex)) {
                            var width = iconvar["width"];
                            var height = iconvar["height"];
                            var fwidth = width * (1 / height);
                            result = result.replace(regex, "<img class='skicon' src='" + iconvar.src + "' height='" + height + "' width='" + width + "' alt='" + iconvar.alt + "'></img>");
                            scroller();
                          }
                        }

                        $.each(uicon, function (i, item) {
                          var aregex = new RegExp(uicon[i].alt, "gi");
                          if (a.match(aregex)) {
                            result = result.replace(aregex, "<img class='skicon' src='" + uicon[i].src + "' height='" + uicon[i].height + "' width='" + uicon[i].width + "' alt='" + uicon[i].alt + "'></img>");
                            scroller();
                          }
                        });    

                        $.each(gskli, function(i,item){
                          var aregex = new RegExp(gskli[i].alt,"gi");
                                 if(a.match(aregex)){
                            var number=Math.floor((Math.random() * 1000) + 1);
                            result =result.replace(aregex, "<img id='"+number+"' class='skicon' src='"+gskli[i].src+"' height='"+gskli[i].height+"' alt='"+gskli[i].altt+"' style='vertical-align: middle;'></img>");
                          $('#'+number).on('load', function(){
                            scroller();
                          });
                                 };
                        });
                        
                        if(a.match(/skl_/g)){
                          var set_id = a.match("skl_(.*?)_");
                          $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel="+set_id[1]+ "&callback=?",function(skli){
                            if(typeof skli === "undefined"){}else{
                              $.each(skli, function(i,item){
                                  var alt=item.alt;
                                  var altt=alt.replace('sklive_', set_id[1]+"_");
                                  var altupdate=alt.replace('sklive_', "skl_"+set_id[1]+"_");
                                gskli.push({
                                  alt : altupdate, 
                                  height : item.height,
                                  src : item.src,
                                  altt : altt
                                });
                              });
                            }
                          });
                        }
                                          
							
$(this).html(result);
scroller();
setTimeout("scroller()", 1000);
							});
							scroller();
                        });
                        if ($('#pastephoto').length == "0") {
                          setTimeout(function () {
                            //console.log('404 chatroom not found:'+counterror);
                            counterror++;
                            waitForElement();
                          }, 3000);
                        }else{
                        var nowtitle = window.location.pathname+$('.room-selector__header').text();
                        if (thistitle == nowtitle) {
                          setTimeout(updateCounter, 0);
                        } else {
                          console.log('(`・ω・´)Change');
                          if (document.getElementById('sk_chat_bg') == null) {
                            setTimeout(function () {
                              //console.log('404 chatroom not found:'+counterror);
                              counterror++;
                              waitForElement();
                            }, 3000);
                          } else {


                            function showpanel() {
                              if (document.getElementById('sk_chat_bg') == null) {
                                setTimeout(function () {
                                  //console.log('404 chatroom not found:'+counterror);
                                  counterror++;
                                  waitForElement();
                                }, 3000);
                              } else {
                                thistitle = window.location.pathname+$('.room-selector__header').text();
                                setTimeout(updateCounter, 0);
                              }
                            }

                            setTimeout(showpanel, 1000)
                          }
                        }
                      }   
                      })();
                    });
                  }, true);
                }
                foreverloop();

                if (foreverloop == false) {
                  foreverloop();
                }
////
                $.getScript("https://live.sk-knower.com/lib/chat_icon.js", function () {
                  for (var i = 0; i < Set1List.length; i++) {
                    var icon = Set1List[i];
                    $("#sk_set1").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + icon.dis + "' original-title='" + icon.dis + "'>");
                  }
                  for (var i = 0; i < Set2List.length; i++) {
                    var icon = Set2List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set3").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  $("#sk_set3").append('<div onclick="set7();" style="background: url(https://live.sk-knower.com/icon/img/hidden_door.png);width: 30px;height: 30px;display: inline-block;"></div>');
                  for (var i = 0; i < Set3List.length; i++) {
                    var icon = Set3List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set6").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set4List.length; i++) {
                    var icon = Set4List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set8").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set5List.length; i++) {
                    var icon = Set5List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set2").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set6List.length; i++) {
                    var icon = Set6List[i];
                    var title = icon.alt.replace('sk_', '');
                    if (icon.dis != null) {
                      title = icon.dis;
                    }
                    $("#sk_set5").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < Set7List.length; i++) {
                    var icon = Set7List[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set17").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + icon.dis + "'  original-title='" + icon.dis + "'>");
                  }
                  for (var i = 0; i < hkg1.length; i++) {
                    var icon = hkg1[i];
                    var alt = icon.alt;
                    if (alt == '') {
                      var alt = icon.cl;
                      var title = icon.cl;
                    } else {
                      var title = icon.alt;
                    }
                    $("#sk_set9").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' alt='" + alt + "' title='" + title + "'  original-title='" + title + "'>");
                  }
                  for (var i = 0; i < lomoreList.length; i++) {
                    var icon = lomoreList[i];
                    var alt = icon.alt;
                    if (alt == '') {
                      var alt = icon.cl;
                      var title = icon.cl;
                    } else {
                      var title = icon.alt;
                    }
                    $("#sk_set16").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' alt='" + alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < hkg2.length; i++) {
                    var icon = hkg2[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set5").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='32' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < eventlist.length; i++) {
                    var icon = eventlist[i];
                    var title = icon.alt.replace('skevent_', '');
                    $("#eventiconset").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='32' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < event2list.length; i++) {
                    var icon = event2list[i];
                    var title = icon.alt.replace('skevent_', '');
                    $("#event2iconset").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='32' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  for (var i = 0; i < emoicon.length; i++) {
                    var icon = emoicon[i].code;
                    $("#sk_set4").append("<div type='iconbotton' class='sk_icon_bottom tooltip' style='width: 90.7px;text-align: center;float: left;white-space: nowrap;overflow: hidden;' title='" + icon + "' original-title='" + icon + "' >" + icon + "</div>");
                  }
                  for (var i = 0; i < hiddenlist.length; i++) {
                    var icon = hiddenlist[i];
                    var title = icon.alt.replace('sk_', '');
                    $("#sk_set7").append("<img class='sk_icon_show tooltip' src='" + icon.src + "' height='40' alt='" + icon.alt + "' title='" + title + "' original-title='" + title + "'>");
                  }
                  //$('.tooltip').tipsy();
                });

////
                function getId(id) {
                  return document.getElementById(id)
                };

                function dragPrototype(dragControl, dragContent) {
                  var _x = 0, _y = 0, _drag = false, cw, ch, sw, sh;
                  var dragContent = typeof dragContent == "undefined" ? dragControl : dragContent;

                  getId(dragControl).onmousedown = function (e) {
                    _drag = true;

                    e = window.event ? window.event : e;
                    cw = document.documentElement.clientWidth;
                    ch = document.documentElement.clientHeight;
                    sw = parseInt(getId(dragContent).offsetWidth);
                    sh = parseInt(getId(dragContent).offsetHeight);

                    _x = e.clientX - getId(dragContent).offsetLeft;
                    _y = e.clientY - getId(dragContent).offsetTop;

                    document.onmousemove = function (e) {
                      if (_drag) {
                        e = window.event ? window.event : e;
                        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
                        document.body.setCapture && getId(dragContent).setCapture();

                        var x = e.clientX - _x;
                        var y = e.clientY - _y;

                        var myElem = document.getElementById('ember1131');
                        if (myElem == null) {
                          x = x < -250 ? x = -250 : x < (cw - sw + 250) ? x : (cw - sw + 250);
                          y = y < 0 ? y = 0 : y < (ch - sh + 100) ? y : (ch - sh + 100);
                        } else {
                          x = x < -99999 ? x = -99999 : x < (cw - sw + 250) ? x : (cw - sw + 250);
                          y = y < -99999 ? y = -99999 : y < (ch - sh + 100) ? y : (ch - sh + 100);
                        }
                        getId(dragContent).style.left = x + "px";
                        getId(dragContent).style.top = y + "px";
                      }
                      ;
                    };

                    document.onmouseup = function () {
                      _drag = false;
                      document.body.releaseCapture && getId(dragContent).releaseCapture();
                    };
                  };
                }

                dragPrototype("a", "sk_icon_set");
                dragPrototype("b", "sk_skill");
                dragPrototype("c", "sk_news");
                dragPrototype("dc", "acgskgame");

                var sktext = getCookie("sktext");
                if (sktext == '') {
                  setCookie("sktext", "12", 365);
                }
                var sktext = getCookie("sktext");
                var first = document.getElementById("textbox1");
                first.value = sktext;
                var skupdate = getCookie("skupdate16");
                $.getJSON("https://live.sk-knower.com/setcookies.php", function () {
                });
                if (skupdate == '') {
                  $("#sk_news").show();
                  setCookie("experiment_overrides", "{%228ace0f50-8afd-424a-a086-3e61b3e66da0%22:%22on%22}", 6);
                }
                //console.log(window.App.__container__.lookup("controller:chat").get("currentRoom"));
                var adminMessage = {
                  "message": "SK-Live",
                  "from": "", "style": "admin"
                };
//window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);

              }

              var mybody = document.getElementsByTagName("body");
              if (document.getElementById('channel') == null) {
                document.body.appendChild(popout);
                document.body.appendChild(news);
                document.body.appendChild(paopout);
                $.when(document.body.appendChild(content2)).then(function2());
              } else {
                setTimeout(function () {
                  var mes = document.getElementsByClassName('chat-container js-chat-container');
                  [].slice.call(mes).forEach(function (skttv_emo) {
                    skttv_emo.id = 'sk_ttv_emo';
                  });
                  var skemo = document.getElementById("sk_ttv_emo");
                  skemo.appendChild(content2);
                  skemo.appendChild(popout);
                  skemo.appendChild(news);
                  skemo.appendChild(paopout);
                  $('[data-target="channel-header-right"]').append('<dd class="cn-tabs__button" style="padding-left: 5px;"><button type="button" onclick="gousersk();" original-title="在SKLive大屏幕觀看!" class="sk_icon_bottom tooltip" style="position: inherit !important;display: inline !important;opacity: inherit !important;margin: 0PX;line-height: 20px;padding: 5px 0px 5px 5px;margin-right: 15px;background: #0089ff;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;"><ccc style="margin-right: 5px;"><img src="http://acg.sk-knower.com/acgsk.png" height="20" width="20" style="left: 0px;"></ccc><span class="wosl" style="background-color: rgb(42, 96, 230);padding: 8px 5px 8px 5px;">在SKLive觀看直播</span></button></dd>');
                  function2();
                }, 2000);
              }


              $('.chat-author__display-name').click(function(a) {
                var ctrlclick = getCookie("setctrl");
                if (ctrlclick == '') {
                  if (altlIsPressed) {
                    var usernamedata = a.html();
                    $(".chat-input__textarea>textarea").focus();
                    if(isFirefox){
                      $(".chat-input__textarea>textarea").val('@' + usernamedata + ' '); 
                      }else{
                        document.execCommand('insertText', false, '@' + usernamedata + ' ');
                      }
                    $(".chat-input__textarea>textarea").focus();
                    altlIsPressed = false;
                  }
                }
              });
//first load

              var sktext = getCookie("sktext");
              $("<style>.chat-line__message{ font-size:"+sktext+"px !important;}</style>").appendTo("head");
              $("<style>.chat-line__timestamp{ font-size: " + sktext + "px !important; }</style>").appendTo("head");
              $("#fontrange").val(sktext);
              var sklan = getCookie("sklan");
              if (sklan == 'eng') {
                eng();
              }
              var sk2dark = getCookie("sk2dark");
              if (sk2dark == '') {
                $("#cdarkoff").css("border-bottom", "4px solid #FFFFFF");
              } else {
                setdark();
              }
              var whiteborder = getCookie("dark2words");
              if (whiteborder == '') {
                $("#darkwordsoff").css("border-bottom", "4px solid #FFFFFF");
              } else {
                dark2words();
              }
              var setengid = getCookie("skengid");
              $('head').append('<link rel="stylesheet" id="onlyengid" type="text/css" href="">');
              if (setengid == '') {
              } else {
                setonlyeng();
              }
              var setctrl = getCookie("setctrl");
              if (setctrl == '') {
                $("#cctrlon").css("border-bottom", "4px solid #FFFFFF");
                $("#cctrloff").css("border-bottom", "");
              } else {
                $("#cctrloff").css("border-bottom", "4px solid #FFFFFF");
                $("#cctrlon").css("border-bottom", "");
              }
              var setimg = getCookie("setimg");
              if (setimg == '') {
                $("#imgtag").css("border-bottom", "4px solid #FFFFFF");
                $("#imgtagoff").css("border-bottom", "");
              } else {
                $("#imgtagoff").css("border-bottom", "4px solid #FFFFFF");
                $("#imgtag").css("border-bottom", "");
              }
              var plink = getCookie("plink");
              if (plink == 'on') {
                $("#plinkon").css("border-bottom", "4px solid #FFFFFF");
                $("#plinkoff").css("border-bottom", "");
              } else {
                $("#plinkoff").css("border-bottom", "4px solid #FFFFFF");
                $("#plinkon").css("border-bottom", "");
              }

//            var style = "";
//for (var i = 0; i < SKLiveiconList.length; i++) {
//                var width = SKLiveiconList[i]["width"]/2 + "px";
//                var height = SKLiveiconList[i]["height"]/2 + "px";
//				var src = SKLiveiconList[i]["src"];
//                var classname = "emo-sk-" + i;
//                style += "." + classname + "{background-image:url(" + src + ");background-size:contain;height:20px;width:" + width + ";}";
//}
//$('<style type="text/css">').text(style).appendTo("head"); var $chatScrollContent = $(".chat-messages .tse-scroll-content");


              $(function () {
                if ('415' > $(this).height()) {
                  $("#sk_icon_set").css({
                    "height": '220',
                  });
                  $(".tags_select").css({
                    "height": '142',
                  });
                } else {
                  $("#sk_icon_set").css({
                    "height": '380',
                  });
                  $(".tags_select").css({
                    "height": '300',
                  });
                }
                $(window).resize(function () {
                  if ('415' > $(this).height()) {
                    $("#sk_icon_set").css({
                      "height": '225',
                    });
                    $(".tags_select").css({
                      "height": '142',
                    });
                  } else {
                    $("#sk_icon_set").css({
                      "height": '380',
                    });
                    $(".tags_select").css({
                      "height": '300',
                    });
                  }

                });
              });
              setTimeout(function () {
                var logid = getCookie("name").toLowerCase();
                var str1 = window.location.pathname;
                var str2 = "/popout/";
                var str3 = "/embed/";
                if(str1.indexOf(str2) != -1||str1.indexOf(str3) != -1){
                  var channelid = str1.replace("/popout/",'').replace("/embed/",'').replace("/chat",'');
                }else if($("a[data-a-target='watch-mode-to-home']").length == "1"){
                  var channelid = $("a[data-a-target='watch-mode-to-home']").attr('href').replace('/','');
                }else{
                  var channelid = $('.tw-tab-item').attr('href').replace('/','').replace('/videos/all','').replace('/videos','').replace('/','');
                }
                if (channelid == 'ankgaminghk' && logid == 'gun0301') {
                  logid = 'ankgaminghk';
                }
                if (channelid == 'ankgaminghk' && logid == 'avilun') {
                  logid = 'ankgaminghk';
                }
                if (channelid == 'skbear2725' && logid == 'sundayla123') {
                  logid = 'skbear2725';
                }
                if (channelid == logid) {
                  var noskicon = $("#ischannelboss").html();
                  if (noskicon == '') {
                    $("#ischannelboss").html('<button id="s13" type="button" class="sk_icon_bottom sktoptag" onclick="set13()">台主自訂SKLive表情設定</button>');
                    $(".textarea-contain").prepend('<a href="http://acg.sk-knower.com/write" target="_blank"><button type="button" class="sk_icon_bottom sktoptag quikelink" style="height: 17px;position: absolute;top: -17px;background: rgba(0,0,0,0.1);right: 54px;">評論</button></a><a href="http://live.sk-knower.com/dashboard" target="_blank"><button id="controlbut" title="台主新功能:直播控制介面" type="button" class="sk_icon_bottom sktoptag quikelink" style="height: 17px;position: absolute; top: -17px; background: rgba(0,0,0,0.1);right: 0px;">直播中心</button></a>');
                    //$('#controlbut').tipsy({gravity: 'se'});
                  }
                }
              }, 3000);
            } else {
              setTimeout(function () {
                //console.log('404 chatroom not found:'+counterror);
                counterror++;
                waitForElement();
              }, 3000);
            }
          }
        }

        waitForElement();
      }
    }
  }}}
  function addicon() {
    if (typeof yourlevel === 'undefined') {
      var totalyourlevel = 25;
    } else {
      var totalyourlevel = yourlevel + 25;
    }
    var logid = getCookie("name").toLowerCase().replace(/[^a-zA-Z0-9_]/g, '');
    var str1 = window.location.pathname;
    var str2 = "/popout/";
    var str3 = "/embed/";
    if(str1.indexOf(str2) != -1||str1.indexOf(str3) != -1){
      var channelid = str1.replace("/popout/",'').replace("/embed/",'').replace("/chat",'');
    }else if($("a[data-a-target='watch-mode-to-home']").length == "1"){
      var channelid = $("a[data-a-target='watch-mode-to-home']").attr('href').replace('/','');
    }else{
                    var channelid = $('.tw-tab-item').attr('href').replace('/','').replace('/videos/all','').replace('/videos','').replace('/','');
    }
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以增加表情');
    } else {
      var regu = "^[a-zA-Z\u4e00-\u9fa5]+$";
      var re = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】『；：」「'。，、？ 　]");
      var urlre = new RegExp("[<>() 　]");
      var cs = $("#sk_icon_code").val();
      var skiconurl = $("#sk_icon_url").val();
      if (skiconurl.match(/^(^https:|^http:)/)) {
        if (skiconurl.match(/(static-cdn.jtvnw.net)/g) || skiconurl.search(urlre) != -1) {
          alert('[SKLive]你設定出錯了:\n不可以使用限制外連的圖床例如巴哈/百度');
        } else {
          if (cs == '') {
            alert('[SKLive]你設定出錯了:表情代碼不可以留白');
          } else {
            if (cs.search(re) != -1) {
              alert('[SKLive]你設定出錯了:表情只限文字');
            } else {
              $.getJSON("https://live.sk-knower.com/lib/iconjsonp.php?channel=" + channelid + "&callback=?", function (uicon) {
                if (typeof uicon === "undefined") {
                  $.post("https://live.sk-knower.com/updateicon.php", {
                    channelid: channelid,
                    url: skiconurl,
                    code: "sklive_" + $("#sk_icon_code").val(),
                    height: $("#sk_icon_height").val() + "px",
                  });
                  if ($("#f5usericonset").html() == '') {
                    $("#f5usericonset").append('以下表情需要重新整理聊天室套用<hr>');
                  }
                  $("#f5usericonset").append("<img id='bsklive_" + $("#sk_icon_code").val() + "' class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' alt='sklive_" + $("#sk_icon_code").val() + "'>");
                  $("#editicon").append("<div id='sklive_" + $("#sk_icon_code").val() + "' class='sk_icon_bottom' style='margin: 1px;background: #9074C3;'><button onclick='follow00system(\"" + skiconurl + "\",\"sklive_" + $("#sk_icon_code").val() + "\");' style='font-size: 13px;float: right;line-height: 32px;background-color: rgb(213, 3, 3);color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>刪除</button><img class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' style='max-width: 237px;' original-title='sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)'>sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)</div>");
                  $("#sk_icon_url").val('');
                  $("#sk_icon_code").val('');

                } else {
                  if (uicon.length == totalyourlevel) {
                    alert('現時設定上限為' + totalyourlevel + '個表情(25+' + yourlevel + ')');
                  } else {
                    var myiconcode = "sklive_" + $("#sk_icon_code").val();
                    var re = new RegExp(myiconcode, 'gi');
                    var uticon = $("#editicon").text();
                    if (uticon.match(re)) {
                      alert('表情代碼設定錯誤:表情代碼文字前半部份不可以和現有代碼重複');
                    } else {
                      var sameerror = 'no';
                      $.each(uicon, function (i, item) {
                        var loopalt = uicon[i].alt;
                        var re = new RegExp(loopalt, 'gi');
                        if (myiconcode.match(re)) {
                          sameerror = 'error';
                          console.log('有ERROR');
                        }
                      });
                      if (sameerror != 'error') {
                        $.post("https://live.sk-knower.com/updateicon.php", {
                          channelid: channelid,
                          url: skiconurl,
                          code: "sklive_" + $("#sk_icon_code").val(),
                          height: $("#sk_icon_height").val() + "px",
                        });
                        if ($("#f5usericonset").html() == '') {
                          $("#f5usericonset").append('以下表情需要重新整理聊天室套用<hr>');
                        }
                        $("#f5usericonset").append("<img id='bsklive_" + $("#sk_icon_code").val() + "' class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' alt='sklive_" + $("#sk_icon_code").val() + "'>");
                        $("#editicon").append("<div id='sklive_" + $("#sk_icon_code").val() + "' class='sk_icon_bottom' style='margin: 1px;background: #9074C3;'><button onclick='follow00system(\"" + skiconurl + "\",\"sklive_" + $("#sk_icon_code").val() + "\");' style='font-size: 13px;float: right;line-height: 32px;background-color: rgb(213, 3, 3);color: rgb(223, 223, 223);border: 0px;cursor: pointer;'>刪除</button><img class='sk_icon_show tooltip' src='" + skiconurl + "' height='40' style='max-width: 237px;' original-title='sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)'>sklive_" + $("#sk_icon_code").val() + " (" + $("#sk_icon_height").val() + "px)</div>");
                        $("#sk_icon_url").val('');
                        $("#sk_icon_code").val('');
                      } else {
                        alert('表情代碼設定錯誤:表情代碼文字前半部份不可以和現有代碼重複');
                      }
                    }
                  }
                }
              });
            }
          }
        }
      } else {
        alert('[SKLive]你設定出錯了:\n圖片網址是http://或https://開始的');
      }
    }
  };
  function follow00system(url, code) {
    var logid = getCookie("name").toLowerCase();
    var channelid = $(".top-nav__username").text().toLowerCase();
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以刪除表情');
    } else {
      console.log(url);
      console.log(code);
      $.post("https://live.sk-knower.com/delicon.php", {
        channelid: channelid,
        url: url,
        code: code,
      });
      $("#" + code).remove();
      $("#b" + code).remove();
    }
  };
  function edit_the_icon(code, newurl, newpx) {
    var newurl = $("#" + newurl).val();
    var newpx = $("#" + newpx).val();
    if (newpx > 9 && newpx < 151) {
      var logid = getCookie("name").toLowerCase();
      var channelid = $(".top-nav__username").text().toLowerCase();
      if (channelid == 'ankgaminghk' && logid == 'gun0301') {
        logid = 'ankgaminghk';
      }
      if (channelid == 'ankgaminghk' && logid == 'avilun') {
        logid = 'ankgaminghk';
      }
      if (channelid == 'skbear2725' && logid == 'sundayla123') {
        logid = 'skbear2725';
      }
      if (channelid != logid) {
        alert('[SK-Live]只有台主可以修改表情設定');
      } else {
        $.post("https://live.sk-knower.com/delicon.php", {
          channelid: channelid,
          url: newurl,
          code: code,
          newpx: newpx + "px",
          edit: 'yes',
        });
        alert('成功更改,F5後套用設定\n代碼: ' + code + '\n網址: ' + newurl + '\n高度: ' + newpx + 'px');
      }
    } else {
      alert('更改後的高度需要在10至150之間');
    }
  };
  function opendeiticon(id) {
    $("#" + id).css("display", "block");
  }

  function icongoup(i, myid) {
    var logid = getCookie("name").toLowerCase();
    var channelid = $(".top-nav__username").text().toLowerCase();
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以修改表情設定');
    } else {
      var myClass = $("#" + myid).attr("class").replace('sk_icon_bottom ', '');
      var i = myClass.replace('usersk', '');
      if (i == '0') {
        var beforenumber = '0';
      } else {
        var beforenumber = i - 1;
      }
      $("#" + myid).insertBefore(".usersk" + beforenumber);
      $(".usersk" + beforenumber).addClass("usersk" + i).removeClass("usersk" + beforenumber);
      $("#" + myid).removeClass("usersk" + i).addClass("usersk" + beforenumber);
      $.post("https://live.sk-knower.com/moveupicon.php", {
        channelid: channelid,
        code: myid,
      });
    }
  }

  function icongodown(i, myid) {
    console.log(allusericon);
    var logid = getCookie("name").toLowerCase();
    var channelid = $(".top-nav__username").text().toLowerCase();
    if (channelid == 'ankgaminghk' && logid == 'gun0301') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'ankgaminghk' && logid == 'avilun') {
      logid = 'ankgaminghk';
    }
    if (channelid == 'skbear2725' && logid == 'sundayla123') {
      logid = 'skbear2725';
    }
    if (channelid != logid) {
      alert('[SK-Live]只有台主可以修改表情設定');
    } else {
      var myClass = $("#" + myid).attr("class").replace('sk_icon_bottom ', '');
      var i = myClass.replace('usersk', '');
      var mynumber = parseInt(i);
      var my1number = mynumber + 1;
      var my2number = mynumber + 2;
      if (allusericon == mynumber) {
      } else {
        $("#" + myid).insertAfter(".usersk" + my1number);
        $(".usersk" + my1number).addClass("usersk" + i).removeClass("usersk" + my1number);
        $("#" + myid).removeClass("usersk" + i).addClass("usersk" + my1number);
        $.post("https://live.sk-knower.com/movedownicon.php", {
          channelid: channelid,
          code: myid,
        });
      }
    }
  }

  function timmer(b) {
    var sec = '0';
    if (typeof stopper === 'undefined') {
      stopper = 'off';
      $('#sk_timmer').text(b);
      var sec = $('#sk_timmer').text()
      var timer = setInterval(function () {
        $('#sk_timmer').text(--sec);
        console.log(stopper);
        if (sec == 0) {
          clearInterval(timer);
          console.log("end");
          va = 'close';
          vb = 'close';
          vc = 'close';
          vd = 'close';
          stopper = 'stop';
          $("#voteabox").css("display", "none");
          $("#votebbox").css("display", "none");
          $("#votecbox").css("display", "none");
          $("#votedbox").css("display", "none");
          $('#sk_timmer').text('投票結束');
          $("#sk_skill").show();
        }
        if (stopper == 'stop') {
          clearInterval(timer);
          console.log(stopper);
          va = 'close';
          vb = 'close';
          vc = 'close';
          vd = 'close';
          $("#voteabox").css("display", "none");
          $("#votebbox").css("display", "none");
          $("#votecbox").css("display", "none");
          $("#votedbox").css("display", "none");
          $('#sk_timmer').text('投票結束');
          $("#sk_skill").show();
        }
      }, 1000);
    } else {
      if (stopper == 'off') {
        stopper = 'stop';
      } else {
        stopper = 'off';
        $('#sk_timmer').text(b);
        var sec = $('#sk_timmer').text()
        var timer = setInterval(function () {
          $('#sk_timmer').text(--sec);
          console.log(stopper);
          if (sec == 0) {
            clearInterval(timer);
            console.log("end");
            va = 'close';
            vb = 'close';
            vc = 'close';
            vd = 'close';
            stopper = 'stop';
            $("#voteabox").css("display", "none");
            $("#votebbox").css("display", "none");
            $("#votecbox").css("display", "none");
            $("#votedbox").css("display", "none");
            $('#sk_timmer').text('投票結束');
            $("#sk_skill").show();
          }
          if (stopper == 'stop') {
            clearInterval(timer);
            console.log(stopper);
            va = 'close';
            vb = 'close';
            vc = 'close';
            vd = 'close';
            $("#voteabox").css("display", "none");
            $("#votebbox").css("display", "none");
            $("#votecbox").css("display", "none");
            $("#votedbox").css("display", "none");
            $('#sk_timmer').text('投票結束');
            $("#sk_skill").show();
          }
        }, 1000);
      }
    }
  }


  function closeacgsk() {
    $("#skacg").css("display", "none");
    return false;
  }
};
}
commandcd = '';
setInterval(function () {
  commandcd++;
}, 1000);



function vodgif(id){document.getElementById(id).paused?document.getElementById(id).play():document.getElementById(id).pause();}
function pastephoto() {
  var input = $(".chat-input__textarea>textarea").val();
  var inputselect = $(".chat-input__textarea>textarea");
  var mousea = inputselect[0].selectionStart + 3;
  var mouseb = inputselect[0].selectionStart + 7;
  if (input == '[s]圖片網址[e]' || input == '[y]影片連結[t]' || input == '[p]P網id[i]') {
    $(".chat-input__textarea>textarea").val('');
    $(".chat-input__textarea>textarea").focus();
    if(isFirefox){
      $(".chat-input__textarea>textarea").val('[s]圖片網址[e]');
      }else{
        document.execCommand('insertText', false, '[s]圖片網址[e]');
      }
    $(".chat-input__textarea>textarea").focus();
    var startPos = this.selectionEnd;
    inputselect[0].setSelectionRange(3, 7);
    $(".chat-input__textarea>textarea").focus();
    var press = jQuery.Event("keypress");
    press.which = 46;
    $(".chat-input__textarea>textarea").trigger(press);
  } else {
    $(".chat-input__textarea>textarea").focus();
    if(isFirefox){
      $(".chat-input__textarea>textarea").val('[s]圖片網址[e]');
      }else{
        document.execCommand('insertText', false, '[s]圖片網址[e]');
      }
    $(".chat-input__textarea>textarea").focus();
    inputselect[0].setSelectionRange(mousea, mouseb);
    $(".chat-input__textarea>textarea").focus();
  }
}

function bannervote() {
  var skset = document.getElementById("sk_icon_set");
  skset.className = "skicon_on";
  skset.style.top = "45px";
  skset.style.right = "13px";
  skset.style.left = "inherit";
  set10();
}

String.prototype.cleanup = function () {
  return this.toLowerCase().replace(/[^a-zA-Z0-9_]+/g, "");
}
function pasteyt() {
  var input = $(".chat-input__textarea>textarea").val();
  var inputselect = $(".chat-input__textarea>textarea");
  var mousea = inputselect[0].selectionStart + 3;
  var mouseb = inputselect[0].selectionStart + 7;
  if (input == '[s]圖片網址[e]' || input == '[y]影片連結[t]' || input == '[p]P網id[i]') {
    $(".chat-input__textarea>textarea").val('');
    $(".chat-input__textarea>textarea").focus();
    if(isFirefox){
      $(".chat-input__textarea>textarea").val('[y]影片連結[t]');
      }else{
        document.execCommand('insertText', false, '[y]影片連結[t]');
      }
    $(".chat-input__textarea>textarea").focus();
    var startPos = this.selectionEnd;
    inputselect[0].setSelectionRange(3, 7);
    $(".chat-input__textarea>textarea").focus();
  } else {
    $(".chat-input__textarea>textarea").focus();
    $(".chat-input__textarea>textarea").focus();
    if(isFirefox){
      $(".chat-input__textarea>textarea").val('[y]影片連結[t]');
      }else{
        document.execCommand('insertText', false, '[y]影片連結[t]');
      }
    $(".chat-input__textarea>textarea").focus();
    inputselect[0].setSelectionRange(mousea, mouseb);
    $(".chat-input__textarea>textarea").focus();
  }
}

function pastepid() {
  var input = $(".chat-input__textarea>textarea").val();
  var inputselect = $(".chat-input__textarea>textarea");
  var mousea = inputselect[0].selectionStart + 3;
  var mouseb = inputselect[0].selectionStart + 7;
  if (input == '[s]圖片網址[e]' || input == '[y]影片連結[t]' || input == '[p]P網id[i]') {
    $(".chat-input__textarea>textarea").val('');
    $(".chat-input__textarea>textarea").focus();
    $(".chat-input__textarea>textarea").focus();
    if(isFirefox){
      $(".chat-input__textarea>textarea").val('[p]P網id[i]');
      }else{
        document.execCommand('insertText', false, '[p]P網id[i]');
      }
    $(".chat-input__textarea>textarea").focus();
    var startPos = this.selectionEnd;
    inputselect[0].setSelectionRange(3, 7);
    $(".chat-input__textarea>textarea").focus();
  } else {
    $(".chat-input__textarea>textarea").focus();
    $(".chat-input__textarea>textarea").focus();
    if(isFirefox){
      $(".chat-input__textarea>textarea").val('[p]P網id[i]');
      }else{
        document.execCommand('insertText', false, '[p]P網id[i]');
      }
    $(".chat-input__textarea>textarea").focus();
    inputselect[0].setSelectionRange(mousea, mouseb);
    $(".chat-input__textarea>textarea").focus();
  }
}


function setsendvote() {
  var textareaid = $('textarea.tw-textarea').attr('id');
  var input = $(".chat-input__textarea>textarea").val();
  var votitle = document.getElementById("voteui_title").value;
  var votime = document.getElementById("voteui_time").value;
  var voa = 'a=' + document.getElementById("voteui_a").value;
  var vob = 'b=' + document.getElementById("voteui_b").value;
  var voc = 'c=' + document.getElementById("voteui_c").value;
  var vod = 'd=' + document.getElementById("voteui_d").value;
  $(".chat-input__textarea>textarea").insertAtCaret('[v]t=' + votime + 'n=' + votitle + '' + voa + '' + vob + '' + voc + '' + vod + '[e]');
  $(".chat-input__textarea>textarea").focus();
}

function closevote() {
  $(".chat-input__textarea>textarea").insertAtCaret('[v]stop');
  $(".chat-input__textarea>textarea").focus();
}

function clickvote(el) {
  var itema = $(el).attr("data-id");

  var input = $(".chat-input__textarea>textarea").val();
  $(".chat-input__textarea>textarea").insertAtCaret('sk_vote_' + itema + ' ');
  $(".chat-input__textarea>textarea").focus();
}

function clickacggame(el) {
  var itema = $(el).attr("data-id");

  var input = $(".chat-input__textarea>textarea").val();
  $(".chat-input__textarea>textarea").insertAtCaret('skgame_' + itema + 'mark');
  $(".chat-input__textarea>textarea").focus();
  $("#acgskgame").css("display", "none");
}

function closees() {
  document.getElementById("sk_icon_set").className = "skicon_off";
}

function voteclosees() {
  $("#sk_skill").css("display", "none");
}

function newsclosees() {
  $("#sk_news").css("display", "none");
setnewsread();
}
function setnewsread(){
  setCookie("skupdate16", "get", 6);
  $('#sk_set11').html("<iframe src='https://live.sk-knower.com/installplugin.html' scrolling='no' frameborder='0' style='width: 0%; height: 0%;' allowtransparency='true' allowfullscreen='true' webkitallowfullscreen='true' mozallowfullscreen='true'></iframe>");
}
function acgskgameclosees() {
  $("#acgskgame").css("display", "none");
}

function eng() {
  $("#lan_word").text("Set font-size(px)");
  $("#lan_bgc").html("Dark mode　　　　　　　　<button type='button' onclick='setdark()' class='sk_icon_bottom on' id='cdarkon'>ON</button><button type='button' onclick='setnodark()' class='sk_icon_bottom off' id='cdarkoff'>OFF</button></div>");
  $("#lan_name").html("Border on user name <button type='button' onclick='dark2words()' class='sk_icon_bottom on' id='darkwordson'>ON</button><button type='button' onclick='setnodark2words()' class='sk_icon_bottom off' id='darkwordsoff'>OFF</button></div>");
  $("#lan_sklive").text("Watch on SK-Live!");
  $("#lan_ctrl").html("[ALT+Click]Get@User<button type='button' onclick='cctrlon()' class='sk_icon_bottom on' id='cctrlon'>ON</button><button type='button' onclick='cctrloff()' class='sk_icon_bottom off' id='cctrloff'>OFF</button></div>");
  $("#lan_bgcolor").html("Set background color<input id='favcolor' type='color' name='favcolor' value='#f2f2f2'><button type='button' onclick='setbgc()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
  $("#lan_wdcolor").html("Set word color　　　<input id='favwordcolor' type='color' name='favwordcolor' value='#ffffff'><button type='button' onclick='setwordcolor()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
  setCookie("sklan", "eng", 365);
}

function zh() {
  $("#lan_word").text("字體大小(px)");
  $("#lan_bgc").html("聊天室 純黑背景/白字粗體 <button type='button' onclick='setdark()' class='sk_icon_bottom on' id='cdarkon'>開啟</button><button type='button' onclick='setnodark()' class='sk_icon_bottom off' id='cdarkoff'>關閉</button></div>");
  $("#lan_name").html("聊天室名字白邊框　　　　 <button type='button' onclick='dark2words()' class='sk_icon_bottom on' id='darkwordson'>開啟</button><button type='button' onclick='setnodark2words()' class='sk_icon_bottom off' id='darkwordsoff'>關閉</button></div>");
  $("#lan_ctrl").html("[ALT+Click]複製@id　　　<button type='button' onclick='cctrlon()' class='sk_icon_bottom on' id='cctrlon'>開啟</button><button type='button' onclick='cctrloff()' class='sk_icon_bottom off' id='cctrloff'>關閉</button></div>");
  $("#lan_bgcolor").html("自設背景顏色<input id='favcolor' type='color' name='favcolor' value='#f2f2f2'><button type='button' onclick='setbgc()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
  $("#lan_wdcolor").html("自設文字顏色<input id='favwordcolor' type='color' name='favwordcolor' value='#ffffff'><button type='button' onclick='setwordcolor()' class='sk_icon_bottom' style='margin-top: 0px;margin-left: 36PX;background: #34AE0A;'>SAVE</button>");
  $("#lan_sklive").text("來SK-Live看直播吧!");
  setCookie("sklan", "", 365);
}

function set1() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set1").css("display", "block");
  $("#s1").css("background", "#008ce3");
  //ps.update();
}

function set2() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set2").css("display", "block");
  $("#s5").css("background", "#008ce3");
  //ps.update();
}

function set3() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set3").css("display", "block");
  $("#s2").css("background", "#008ce3");
  //ps.update();
}

function set4() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set4").css("display", "block");
  $("#s7").css("background", "#008ce3");
  //ps.update();
}

function set5() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set5").css("display", "block");
  $("#s6").css("background", "#008ce3");
  //ps.update();
}

function set6() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set6").css("display", "block");
  $("#s3").css("background", "#008ce3");
  //ps.update();
}

function set7() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set7").css("display", "block");
  //ps.update();
}

function set8() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set8").css("display", "block");
  $("#s4").css("background", "#008ce3");
  //ps.update();
}

function set9() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set9").css("display", "block");
  $("#s9").css("background", "#008ce3");
  //ps.update();
}

function set10() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set10").css("display", "block");
  $("#s10").css("background", "#008ce3");
  //ps.update();
}

function set11() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set11").css("display", "block");
  //ps.update();
}

function set12() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set12").css("display", "block");
  $("#s12").css("background", "#008ce3");
  //ps.update();
}

function set13() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set13").css("display", "block");
  $("#s13").css("background", "#008ce3");
  //ps.update();
}

function set14() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set14").css("display", "block");
  $("#s14").css("background", "#008ce3");
  //ps.update();
}

function set15() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set15").css("display", "block");
  $("#s15").css("background", "#008ce3");
  //ps.update();
}

function set16() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set16").css("display", "block");
  $("#s16").css("background", "#008ce3");
  //ps.update();
}

function set17() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set17").css("display", "block");
  $("#s17").css("background", "#008ce3");
  //ps.update();
}

function set18() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_set18").css("display", "block");
  $("#s18").css("background", "#008ce3");
  //ps.update();
}

function setting() {
  $('div[id^="sk_set"]').css("display", "none");
  $('button[id^="s"]').css("background", "#6441a5");
  $("#sk_setting").css("display", "block");
  $("#s8").css("background", "#008ce3");
  //ps.update();
}

function openvote() {
  $("#sk_skill").show();
}

function opennews() {
  $("#sk_news").show();
}

function setword() {
  var first = document.getElementById("textbox1").value;
  setCookie("sktext", first, 365);
  $("<style>.chat-line__message{ font-size: " + first + "px !important; }</style>").appendTo("head");
  $("<style>.chat-line__timestamp{ font-size: " + first + "px !important; }</style>").appendTo("head");
}

function setbgc() {
  var firsta = document.getElementById("favcolor").value;
  setCookie("skbcg", firsta, 365);
  $("<style>.chat-interface,.chat-container,.chatters-view,.ember-chat-container{background-color: " + firsta + " !important;}.chat-room{background: " + firsta + " !important;}p[data-a-target='chat-room__header-channel-name']{background-color: " + firsta + "!important;}</style>").appendTo("head")
}

function setwordcolor() {
  var firstwc = document.getElementById("favwordcolor").value;
  setCookie("skwc", firstwc, 365);
  $("<style>.skClass,.message,.colon { color: " + firstwc + ";}.chat-room__header-channel-name{color: " + firstwc + ";}</style>").appendTo("head")
}

function setdark() {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.chat-interface,.chat-container,.chatters-view,.ember-chat-container{background-color: #111111 !important;}.skClass,.colon,.chat-room__header-channel-name { color: white;font-weight: bold; }.chat__pane{background: #111111 !important;}.ember-text-area{color: white;background: rgb(42, 42, 42);}p[data-a-target="chat-room__header-channel-name"]{background-color: #111111!important;}.chat-room-list{background: #3C3C3C !important}.chat-room__header-channel-name{color: white;}a{color: #9872E0;}.whisper-incoming{background-color:#4E4C4C !important;}';
  document.getElementsByTagName('head')[0].appendChild(style);
  setCookie("sk2dark", "darked", 365);
  $("#cdarkon").css("border-bottom", "4px solid #FFFFFF");
  $("#cdarkoff").css("border-bottom", "");
}

function setnodark() {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.chat-interface,.chat-container,.chatters-view, .ember-chat-container{background-color: #f2f2f2!important;}.skClass,.colon,.chat-room__header-channel-name { color: #323232;font-weight: normal; }.chat__pane{background: #f2f2f2 !important;}.ember-text-area{color: #666;background: #FFFFFF;}p[data-a-target="chat-room__header-channel-name"]{background-color: #f2f2f2!important;}.chat-room-list{background-color:hsla(0, 100%, 50%, 0.0) !important}.chat-room__header-channel-name{color: #323232;}a{color: #6441a5;}.whisper-incoming{background-color:#e8e8e8 !important;}';
  document.getElementsByTagName('head')[0].appendChild(style);
  setCookie("sk2dark", "", 365);
  $("#cdarkoff").css("border-bottom", "4px solid #FFFFFF");
  $("#cdarkon").css("border-bottom", "");
}

function setonlyeng() {
  var styles = document.getElementById('onlyengid');
  styles.setAttribute('href', 'https://live.sk-knower.com/lib/onlyengid.css?1');
  setCookie("skengid", "eng", 365);
}

function setonlyengoff() {
  var styles = document.getElementById('onlyengid');
  styles.setAttribute('href', '');
  setCookie("skengid", "", 365);
}

function cleanmychat() {
  $('.ember-view.message-line.chat-line').remove();
  var someNumbers = [1, 2];
  var adminMessage = {
    "message": "[SKLive]已清除我的聊天室內容",
    "from": "", "style": "admin"

  };
  //window.App.__container__.lookup("controller:chat").get("currentRoom").addMessage(adminMessage);
}

function dark2words() {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.chat-author__display-name, .chat-author__intl-login{text-shadow: -1px -1px 0 #FFFFFF, 1px -1px 0 #FFFFFF, -1px 1px 0 #FFFFFF, 1px 1px 0 #FFFFFF;}';
  document.getElementsByTagName('head')[0].appendChild(style);
  setCookie("dark2words", "dark2words", 365);
  $("#darkwordson").css("border-bottom", "4px solid #FFFFFF");
  $("#darkwordsoff").css("border-bottom", "");
}

function setnodark2words() {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '.chat-author__display-name, .chat-author__intl-login{text-shadow: none;}';
  document.getElementsByTagName('head')[0].appendChild(style);
  setCookie("dark2words", "", 365);
  $("#darkwordsoff").css("border-bottom", "4px solid #FFFFFF");
  $("#darkwordson").css("border-bottom", "");
}

function setwordjump() {
  var jump = getCookie("jump");
  if (jump == '') {
    setCookie("jump", "jump", 365);
    document.getElementById("jumpbuttom").innerHTML = "<div style='background-color: green;'>ON</div>解決表情文字跳行問題";
    $(".message").attr('class', 'skClass');
    $("#sk_ttv li[id^='ember']").attr('id', 'gg');
  } else {
    setCookie("jump", "", 365);
    document.getElementById("jumpbuttom").innerHTML = "<div style='background-color: red;'>OFF</div>解決表情文字跳行問題";
  }
}

function updateTextInput(val) {
  document.getElementById('textbox1').value = val;
}

function updateskiconTextInput(val) {
  document.getElementById('textbox1skicon').value = val;
}

function cctrlon() {
  setCookie("setctrl", "", 365);
  $("#cctrlon").css("border-bottom", "4px solid #FFFFFF");
  $("#cctrloff").css("border-bottom", "");
}

function cctrloff() {
  setCookie("setctrl", "off", 365);
  $("#cctrloff").css("border-bottom", "4px solid #FFFFFF");
  $("#cctrlon").css("border-bottom", "");
}

function imgtag() {
  setCookie("setimg", "", 365);
  $("#imgtag").css("border-bottom", "4px solid #FFFFFF");
  $("#imgtagoff").css("border-bottom", "");
}

function imgtagoff() {
  setCookie("setimg", "off", 365);
  $("#imgtagoff").css("border-bottom", "4px solid #FFFFFF");
  $("#imgtag").css("border-bottom", "");
}

function plinkon() {
  setCookie("plink", "on", 365);
  $("#plinkon").css("border-bottom", "4px solid #FFFFFF");
  $("#plinkoff").css("border-bottom", "");
}

function plinkoff() {
  setCookie("plink", "off", 365);
  $("#plinkoff").css("border-bottom", "4px solid #FFFFFF");
  $("#plinkon").css("border-bottom", "");
}

function gousersk(channel) {
  var str1 = window.location.pathname;
  var str2 = "/popout/";
  var str3 = "/embed/";
  if(str1.indexOf(str2) != -1||str1.indexOf(str3) != -1){
    var channelid = str1.replace("/popout/",'').replace("/embed/",'').replace("/chat",'');
  }else if($("a[data-a-target='watch-mode-to-home']").length == "1"){
    var channelid = $("a[data-a-target='watch-mode-to-home']").attr('href').replace('/','');
  }else{
                  var channelid = $('.tw-tab-item').attr('href').replace('/','').replace('/videos/all','').replace('/videos','').replace('/','');
  }
  window.location.href = "http://live.sk-knower.com/" + channelid;
}


function checkContainer() {
  if ($('.player-fullscreen-overlay').is(':visible')) {
    $(".player-fullscreen-overlay").removeClass("player-overlay");
  } else {
    setTimeout(checkContainer, 50);
  }
}


function scroller() {
  var $chatScrollContent = $("div[data-a-target='chat-scroller']>.simplebar-scroll-content");
  var $chatContent = $("div[data-a-target='chat-scroller']>.simplebar-scroll-content>.simplebar-content");
  var scrollBottom = $chatContent.height() - $chatScrollContent.scrollTop() - $chatScrollContent.height();
  if (scrollBottom < '200') {
    $chatScrollContent.scrollTop(999999);
    $(".more-messages-indicator").click();
    console.log('啟動( ´-ω ･)▄︻┻┳══━');
  }
}