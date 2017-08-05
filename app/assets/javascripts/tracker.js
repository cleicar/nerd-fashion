(function ($) {

  var ready = $.fn.ready;
  
  $.fn.ready = function (fn) {
    var visitedPage = window.location.href

    console.log(visitedPage);

    saveTrack('visitad_pages', visitedPage);

    var user = getTrack('visitad_pages');
    console.log(user);

    $('#contact-form').submit(function(e) {
      sendUserInfoToSimpleCRM();
      e.preventDefault();
    });

  }
})(jQuery);

function saveTrack(name, value) {
  window.localStorage.setItem(name, value);
}

function getTrack(name){
  return window.localStorage.getItem(name);
}

function sendUserInfoToSimpleCRM() {  
  var username = 'cleiviane';
  var password = '12345678';
  //var formData = $("#contact-form").serialize();

  var contact = {
    name:  $('#name').val(),
    email: $('#email').val(),
    created_at: 'Teste'
  }

  $.ajax({
    method: "POST",
    url: "http://localhost:3001/api/contacts",
    crossDomain: true,
    beforeSend: function(xhr) {
      xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ":" + password));
    },
    data: JSON.stringify({contact})
  }).done(function() {
    console.log("Done!");
  });  
}