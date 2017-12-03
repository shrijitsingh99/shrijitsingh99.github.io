function validEmail(e){var t=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
return t.test(e)}function validateHuman(e){return e?!0:void 0}function getFormData(){var e=document.getElementById("gform"),t=e.elements,n=Object.keys(t).map(function(e){return void 0!==t[e].name?t[e].name:t[e].length>0?t[e].item(0).name:void 0}).filter(function(e,t,n){return n.indexOf(e)==t&&e}),o={}
return n.forEach(function(e){o[e]=t[e].value
var n=""
if("checkbox"===t[e].type)n=n+t[e].checked+", ",o[e]=n.slice(0,-2)
else if(t[e].length)for(var a=0;a<t[e].length;a++)t[e].item(a).checked&&(n=n+t[e].item(a).value+", ",o[e]=n.slice(0,-2))}),o.formDataNameOrder=JSON.stringify(n),o.formGoogleSheetName=e.dataset.sheet||"responses",o.formGoogleSendEmail=e.dataset.email||"",o}function handleFormSubmit(e){e.preventDefault()
var t=getFormData()
if(!validEmail(t.email))return document.getElementById("email-invalid").style.display="block",!1
var n=e.target.action,o=new XMLHttpRequest
o.open("POST",n),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){console.log(o.status,o.statusText),console.log(o.responseText),document.getElementById("gform").reset()}
var a=Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&")
o.send(a),alert("Your message has been sent."),document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("subject").value="",document.getElementById("message").value="",document.getElementById("name").focus(),document.getElementById("name").blur(),document.getElementById("email").focus(),document.getElementById("email").blur(),document.getElementById("subject").focus(),document.getElementById("subject").blur(),document.getElementById("message").focus(),document.getElementById("message").blur()}function loaded(){var e=document.getElementById("gform")
e.addEventListener("submit",handleFormSubmit,!1)}document.addEventListener("DOMContentLoaded",loaded,!1)
