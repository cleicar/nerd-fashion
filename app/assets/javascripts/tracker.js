(function ($) {

  var ready = $.fn.ready;
  
  $.fn.ready = function (fn) {   
    addUserTrack();

    $('#contact-form').submit(function(e) {
      sendUserInfoToSimpleCRM();
      e.preventDefault();
    });

  }
})(jQuery);

function addUserTrack(){
  var visitedPage   = window.location.href;
  var storageId     = 'visited_pages';
  var storageValue  = [visitedPage];
  var value         = null;

  var savedTrack = getStorage(storageId);

  if(savedTrack){
    var pagesArray = savedTrack.split(',');

    var exists = $.inArray(visitedPage, pagesArray);

    if(exists == -1)
      pagesArray.push(visitedPage)

    storageValue = pagesArray;

  }else{
    storageValue = visitedPage
  }

  setStorage(storageId, storageValue);
}

function setStorage(name, value){
  window.localStorage.setItem(name, value + ',');
}

function getStorage(name){
  return window.localStorage.getItem(name);
}

function sendUserInfoToSimpleCRM() {  
  var username = 'cleiviane';
  var password = '12345678';
  //var formData = $("#contact-form").serialize();

  var contact = {
    name:  $('#name').val(),
    email: $('#email').val(),
    created_at: new Date(),
    pages: getStorage('visited_pages')
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
    $("#result-message").show();
  });  
}