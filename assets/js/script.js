$(document).ready(function(){

<!---->
$( ".clickme" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  });

var quote = [ 
    "Sleep is crucial for immunity -- A study found that 50% weaker antibody response in sleep deprived individuals, even with plenty of recovery sleep.",
    "Sleeping pills don't actually help you sleep. Studies have shown they add very little to quality and duration of sleep compared to placebo.",
    "You actually wake up every time you end a REM cycle. You just don't remember it because it is so brief.",
    "All organisms exhibit sleep.",
    "Reptiles, amphibians, and fish show brain activity indicative of NREM, but not REM. However, REM sleep in birds and mammals suggest that REM is related to thermoregulation and metabolic regulation.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(".name").on('keydown', function(ev) {
    if(ev.which === 13) {
        $(this).val('');
        var line = quote[getRandomArbitrary(0,44)];
        $(".quote").text(line);
        return false;
    }
});
counter=0;
$(".quote").click(function (){
    $(this).find('a').text('Tell me more');
    $(".learn-more").fadeOut();
    $(".quote-container").fadeIn();
    counter=counter+1;
   $(".arrow").hide();
      var line = quote[getRandomArbitrary(0,44)];
   $(".quote-container").text(line);
   if (counter==2) {
       $(".footer").fadeIn().delay(1000);
     }
    $(".title").css('font-size', '60px');
    $(".title").css('top', '50px');
});

});

