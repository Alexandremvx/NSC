//when starts//
window.onload = main;

//reffer:http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t//
function inIframe () {try {return window.self !== window.top;} catch (e) {return true;}}

function main() {
 if (inIframe()){return false;}
 var A1 = document.getElementById('A1');
 var A2 = document.getElementById('A2');
 //initial messages//
 updater(A1);
 builder(A2);
 //timers//
 t1 = setInterval(function(){updater(A1)}, 1000);
 t2 = setInterval(function(){builder(A2)}, 5000);
 
}

function updater (target) {
 var novadata = new Date();
 var datahora = novadata.toLocaleString();
 target.innerHTML = datahora;
}



function builder (target) {
 var isIE = /*@cc_on!@*/false || !!document.documentMode;
 var hash = window.location.hash.replace(/\#/,'');
 var origin = window.location.href.replace(/\/[^\/]*$/,'');
 if (hash == '' && isIE) {
   window.location.assign("#HTA");
 }else if(hash != '') {
   var basesrc = origin + '/' + hash;
   var base = '<iframe id="ibuilder" src="' + basesrc + '.html"> </iframe>';
   target.innerHTML = base;
 }
}

