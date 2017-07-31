// Staging: 99f35bfccecaa88d8b1da3f4cf850408 Production: d88a3f958bee96f47745ae7b6f280df9

(function(e,a){if(!a.__SV){var b=window;try{var c,l,i,j=b.location,g=j.hash;c=function(a,b){return(l=a.match(RegExp(b+"=([^&]*)")))?l[1]:null};g&&c(g,"state")&&(i=JSON.parse(decodeURIComponent(c(g,"state"))),"mpeditor"===i.action&&(b.sessionStorage.setItem("_mpcehash",g),history.replaceState(i.desiredHash||"",e.title,j.pathname+j.search)))}catch(m){}var k,h;window.mixpanel=a;a._i=[];a.init=function(b,c,f){function e(b,a){var c=a.split(".");2==c.length&&(b=b[c[0]],a=c[1]);b[a]=function(){b.push([a].concat(Array.prototype.slice.call(arguments, 0)))}}var d=a;"undefined"!==typeof f?d=a[f]=[]:f="mixpanel";d.people=d.people||[];d.toString=function(b){var a="mixpanel";"mixpanel"!==f&&(a+="."+f);b||(a+=" (stub)");return a};d.people.toString=function(){return d.toString(1)+".people (stub)"};k="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" "); for(h=0;h<k.length;h++)e(d,k[h]);a._i.push([b,c,f])};a.__SV=1.2;b=e.createElement("script");b.type="text/javascript";b.async=!0;b.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js".match(/^\/\//)?"https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js":"//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";c=e.getElementsByTagName("script")[0];c.parentNode.insertBefore(b,c)}})(document,window.mixpanel||[]);
    mixpanel.init("d88a3f958bee96f47745ae7b6f280df9", {
    loaded: function(mixpanel) {
        window['optimizely'] = window['optimizely'] || [];
        
        // Get state settings from optimizely object
        var state = optimizely.get('state');
        var exp_id = state.getActiveExperimentIds()[0];
        mixpanel.track("landing_page_load", {
            "Experiment Name": optimizely.get('data').experiments[exp_id].name,
            "Variation Name": state.getVariationMap()[exp_id].name,
            "Screen Width": $(window).width()
        });
       //console.log(state.getVariationMap()[exp_id].name);
        var user_id = mixpanel.get_distinct_id();
        document.getElementById("button_foot_og_link").href = 'https://parent.zeal.com/#!/landing?mode=createAccount&mixpanelDistinctId=' + user_id;
        //document.getElementById("button_foot_og_link_1").href = 'https://parent.zeal.com/#!/landing?mode=createAccount&mixpanelDistinctId=' + user_id;
    }
});
 
  // Tracking time spent on page
  setTimeout(function(){
      document.getElementById("learn_more").style.bottom = "-85px";
      document.getElementById("og_signup").style.bottom = "0px";
      document.getElementById("in_page_signup").style.bottom = "0px";
      document.getElementById("external_signup").style.bottom = "0px";
      document.getElementById("button_text_main").style.zIndex = "-1";
      //document.getElementById("button_text_main_og").style.zIndex = "-1";
  }, 3000);

  // Variables to prevent continuous firing of custom events
  var scrollTwentyFive = true;
  var scrollFifty = true;
  var scrollSeventyFive = true;
  var scrollOneHundred = true;
        
  function setDistinct() {
    document.getElementById("signup_screen").contentWindow.postMessage(mixpanel.get_distinct_id(), '*');
  }

  window.onmessage = function(e){
      window.location = e.data;
  }

  // Create the scrollPercentage
  $(window).bind('scroll', function() {
      window.scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

      if ($(window).scrollTop() >= 70) {
        document.getElementById("external_signup").style.bottom = "0px";
        document.getElementById("og_signup").style.bottom = "0px";
        document.getElementById("in_page_signup").style.bottom = "0px";
        document.getElementById("learn_more").style.bottom = "-85px";
        document.getElementById("button_text_main").style.zIndex = "-1";
        //document.getElementById("button_text_main_og").style.zIndex = "-1";
      }
      // Conditional code we'll use to fire events based on scrollPercentage.
      
      if (window.scrollPercent >= 25 && scrollTwentyFive) {
        mixpanel.track("landing_scroll_percent", {
              "Percent": 25
          });
          scrollTwentyFive = false;
      }

      if (window.scrollPercent >= 50 && scrollFifty) {
           mixpanel.track("landing_scroll_percent", {
              "Percent": 50
          });
          scrollFifty = false;
      }

      if (window.scrollPercent >= 75 && scrollSeventyFive) {
           mixpanel.track("landing_scroll_percent", {
              "Percent": 75
          });
          scrollSeventyFive = false;
      }

      if (window.scrollPercent >= 100 && scrollOneHundred) {
           mixpanel.track("landing_scroll_percent", {
              "Percent": 100
          });
          scrollOneHundred = false;
      }

  });
  
function trackButton() {
    mixpanel.track("signup_button_clicked");
    var screen = document.getElementById("signup_screen").style;
    screen.visibility="visible";
    screen.zIndex="60";
    screen.bottom="0px";

    var box = document.getElementById("signup_close").style;
    var arrow = document.getElementById("down_arrow").style;
    box.visibility="visible";
    box.top="0px";
    box.zIndex="61";
    var leftShift = $(window).width()/2 - 75;
    box.left=leftShift.toString() + 'px';
    arrow.visibility="visible";
    arrow.top="-9px";
    arrow.zIndex="62";
    arrow.left=leftShift.toString() + 'px';
}
            
function closeSignup() {
    mixpanel.track("closed_signup_screen")
    document.getElementById("signup_screen").style.bottom="-100vh";
    document.getElementById("signup_close").style.top="100vh";
    document.getElementById("down_arrow").style.top="100vh";
}

function closeFrame() {
    var frame = document.getElementById("video_frame");
    frame.style.display="none";
    var close = document.getElementById("close_but");
    close.style.display="none";
    frame.src="https://www.youtube.com/embed/ibCV7giAiYQ";
}

function trackVideo() {
    mixpanel.track("demo_video_played");

    var frame = document.getElementById("video_frame");
    frame.style.display="block";
                
    var close = document.getElementById("close_but");
    close.style.display="block";
                
    if($(window).width() <= 736) {
        frame.width = "336";
        frame.height = "189";

        var height = $(window).height()/2 - 94.5;
        frame.style.top=height.toString() + 'px';
        var width = $(window).width()/2 - 168;
        frame.style.left=width.toString() + 'px';

        var heightC = $(window).height()/2 - 109.5;
        close.style.top=heightC.toString() + 'px';
        var widthC = $(window).width()/2 + 153;
        close.style.left=widthC.toString() + 'px';
    } else {
        frame.width = "672";
        frame.height = "378";
                    
        var height = $(window).height()/2 - 189;
        frame.style.top=height.toString() + 'px';
        var width = $(window).width()/2 - 336;
        frame.style.left=width.toString() + 'px';
                    
        var heightC = $(window).height()/2 - 204;
        close.style.top=heightC.toString() + 'px';
        var widthC = $(window).width()/2 + 321;
        close.style.left=widthC.toString() + 'px';
    }
}

function trackEdsurge() {
    mixpanel.track("opened_edsurge");
}

/*********SIGNUP CODE*********/

function handleToken(data) {
    console.log(data.data.session.access_token);
    window.location="https://parent.zeal.com/#!/accessToken/" + data.data.session.access_token + "?dest=/activation/name";
    //window.location = "https://parent.zeal.com/#!/accessToken/" + data.data.session.access_token + "?dest=/activation/name";
}

function signup() {
    mixpanel.track("landing_signup");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var prof = {"user":{"first_name": email, "last_name": "Tutoring", "name": email, "password": password}};
    console.log(JSON.stringify(prof));
    $.post("https://api.zeal.com/v7/public/users/parent", prof).done(handleToken);
}

var emailMix = true;
var passMix = true;

setInterval(function(){
    
    // 8 chars, 1 Let, 1 Num
    var curPass = document.getElementById("password").value;

     var length = false;
    var letter = false;
    var num = false;
    var email = false;

    var curEmail = document.getElementById("email").value;
    var leftSpace = ($(window).width()-700)/2;
    
    if ($(window).width() >= 736) {
        document.getElementById("email").style.marginLeft = leftSpace.toString() + 'px';
        document.getElementById("signup_button").style.marginRight = leftSpace.toString() + 'px';
    } else {
        document.getElementById("email").style.marginLeft = "30px";
        document.getElementById("signup_button").style.marginRight = "30px";
    }
    
    for (var i=0; i<curEmail.length; i++) {
        var char = curEmail.charAt(i);
        if (char === '@') {
            email = true;
            if (emailMix) {
                mixpanel.track("email_entered");
                emailMix = false;
            }
        }
    }

    if (curPass.length >= 8) length = true;

    for (var i=0; i<curPass.length; i++) {
        var char = curPass.charAt(i);
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) letter = true;
        if (char >= '0' && char <= '9') num = true;
    }

    var button = document.getElementById("signup_button");
    if (length && letter && num) {
        if (passMix) {
            mixpanel.track("password_entered");
            passMix = false;
        }

        if (email) {
            button.style.pointerEvents="all";
            button.style.backgroundColor="rgb(19,178,197)";
        }
    } else {

        button.style.pointerEvents="none";
        button.style.backgroundColor="transparent";
    }
}, 100);