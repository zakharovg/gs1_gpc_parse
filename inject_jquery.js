// JQuery injection in chrome console

var $jq; // jquery handler to avoid $ conflicts
 
function injectJquery() {
 var script = document.createElement('script');
 script.setAttribute('type', 'text/javascript');
 script.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js'); // fetch it from googles CDNs
 
 // Give $ back to whatever took it before; create new alias to jQuery. 
 script.setAttribute('onload','javascript:$jq = jQuery.noConflict();'); 
 
 document.body.insertBefore(script, document.body.firstChild); 
}
 
injectJquery(); 