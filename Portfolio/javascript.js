

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    var elementScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPos = (elementScroll/windowHeight)*100;
    document.getElementsByClassName("scroll-indicator").style.Height = scrollPos + "%";
}

