$(document).ready(function()
{
    loadWeather('',''); 
});

function loadWeather(location, woeid) 
{
    if (location == '')
    {
        $("#weather").html('');
        
    }
    else
    {
        $.simpleWeather(
        {
        location: location,
        woeid: woeid,
        unit: 'f',
        success: function(weather) 
        {
            if(weather.temp > '60')
            {
                if(((weather.code > 25) && (weather.code < 35)) || (weather.code == 36) || (weather.code == 44))
                {
                    html = '<h1> Yes, wear shorts. </h1>';
                }
                else
                {
                    html = '<h1> No, wear pants. </h1>';   
                }
            }
            else
            {
                html = '<h1> No, wear pants. </h1>'; 
            }

            $("#weather").html(html);
        },

          error: function(error) 
          {
            $("#weather").html('<p>'+error+'</p>');
          }
      }); 
    }
}

$('button').on('click', function() 
{
    
  loadWeather(document.getElementById("input").value +',' + ' '); 
    
});



   