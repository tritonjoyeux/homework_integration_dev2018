window.onload = function () {

    var semipage=document.getElementById('semiPage');
    var popup=document.getElementById('popUp');
    var content=document.getElementById('content');

    content.style.height = window.innerHeight + "px";
    content.style.width = window.innerWidth + "px";

    semipage.style.height = window.innerHeight/2 + "px";
    semipage.style.width = window.innerWidth + "px";
    popup.style.marginTop = window.innerHeight/4-50 + "px";

    window.onresize = function(){
        content.style.height = window.innerHeight + "px";
        content.body.style.width = window.innerWidth + "px";

        semipage.style.height = window.innerHeight/2 + "px";
        semipage.style.width = window.innerWidth + "px";
        popup.style.marginTop = window.innerHeight/4-50 + "px";
    };

    document.getElementById('submitForm').onclick=function(){
        content.style.opacity = '0.3';
        semipage.style.visibility='visible';
    }
};