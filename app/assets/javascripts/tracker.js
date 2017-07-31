(function ($) {

  var ready = $.fn.ready;
  
  $.fn.ready = function (fn) {
    var visitedPage = window.location.href

    createCookie('client_id', "IOSD898SK214L", 1);

    $('#contact-form').submit(function(event) {
      console.log($('#email').val());

      $.ajax({
        method: "POST",
        url: "http://localhost:3001/api/contacts",
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json' ,
          'X-Requested-With': 'XMLHttpRequest', 
          'Access-Control-Allow-Origin': '*' ,
          'Access-Control-Allow-Headers':'origin, content-type, accept, authorization'
        },
        data: { name: $('#name').val(), email: $('#email').val() }
      }).done(function() {
        console.log("Done!");
      });

      event.preventDefault();
    });
  }
})(jQuery);

function createCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function sendUserInfoToSimpleCRM(event) {
  var values = {};
  $.each($('#contact-form').serializeArray(), function(i, field) {
    var t = values[field.name] = field.value;
    console.log(t);
  });
}