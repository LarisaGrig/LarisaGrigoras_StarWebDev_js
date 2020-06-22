function getWeather(){
  $('.description').html('');
  $('.temp').html('');
  $('.temp-min').html('');
  $('.temp-max').html('');
  $('.umid').html('');

  var cityName = $('#cityName').val();
  var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q='
  + cityName +
  '&appid=e2032f94b9f7b3e9ee67ebb64a893e2b'
  + '&lang=it';

  $.getJSON(apiCall, weatherCallback);


  //City on click
  function weatherCallback(weatherData){
    var cityName = weatherData.name;
    var country = weatherData.sys.country;
    var description = weatherData.weather[0].description;
    var temp = weatherData.main.temp;
    var temp_min = weatherData.main.temp_min;
    var temp_max = weatherData.main.temp_max;
    var umid = weatherData.main.humidity;

    $('.description').empty();
    $('.description').append("In " + cityName + " "
    + country + " è: " + description);

    $('.temp').empty();
    $('.temp').append("Temperatura: "
     + (parseInt(temp - 273.15)*10/10) + " °C");

    $('.temp_min').empty();
    $('.temp_min').append("Temperatura minima: "
     + (parseInt(temp_min - 273.15)*10/10) + " °C");

    $('.temp_max').empty();
    $('.temp_max').append("Temperatura massima: "
     + (parseInt(temp_max - 273.15)*10/10) + " °C");

    $('.umid').empty();
    $('.umid').append("L'umidità: " + umid + " %");
  }
  var inputs = document.querySelectorAll('input[type=text]');

  for (var i = 0;  i < inputs.length; i++) {
    inputs[i].value = '';
  };  
}