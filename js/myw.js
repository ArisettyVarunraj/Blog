
  //paste this code under head tag or in a seperate js file.
  // Wait for window load
  $(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
  });

  
  // When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction1()};

// Get the header
var header = document.getElementById("main1");
        
// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction1() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

  function make_json(form){
    var json= {
      "Blog_name" : form.blname.value,
      "Author": form.Author.value,
      "Introduction":form.para1.value,
      "Content":form.para2.value,
      "Conclusion":form.para3.value

    };
    var html=JSON.stringify(json,0,4);
    document.getElementById('output').innerHTML=html;
    return false;
  }         


     $(document).ready(function() {
  $('#jBold').click(function() {
    document.execCommand('bold');
  });
});
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var di = today.getMonth()+1;
    var du = today.getFullYear();
    

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML ="Time:"+
    h + ":" + m + ":" + s + "&nbsp;&nbsp;&nbsp;&nbsp;"+"Date:"+d+"/"+di+"/"+du;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
//shrinky header

$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('header').removeClass('tiny');
        $('#title').removeClass('shrinky');
        $('body').removeClass('topless');
    } else {
        $('header').addClass('tiny');
        $('#title').addClass('shrinky');
        $('body').addClass('topless');
    }
});