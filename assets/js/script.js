$(document).ready(function(){

<!---->
$( ".clickme" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  });

var quote = [ 
    "Sleep is crucial for immunity -- A study found 50% weaker antibody response in sleep deprived individuals, even with plenty of recovery sleep.",
    "Sleeping pills don't actually help you sleep. Studies have shown they add very little to quality and duration of sleep compared to placebo.",
    "You actually wake up every time you end a REM cycle. You just don't remember it because it is so brief.",
    "All organisms exhibit sleep.",
    "Independent evolution of REM sleep in birds and mammals suggest that REM is related to thermoregulation and metabolic regulation.",
    "We have a biological hardwire dip in alterness, the post-prandial dip, otherwise known as the 'afternoon slump'.",
    "Alarms have a marked effect of cardiovascular stress. Try an app that wakes you up gradually.",
    "Pre-Industral sleep was characterized by co-sleeping, biphasic sleep, and lack of an enforced wakeup time.",
    "Sleep debt is a real thing.",
    "Lack of sleep impairs mental and physical function.",
    "During REM sleep, areas of the brain related to emotional regulation, memory, and visual processing are active while areas linked to logical reasoning are inactive.",
    "Every living species displays clear and prominent circadian rhythms -- animals, plants, even bacteria!",
    "Melatonin doesn't actually cause you to sleep -- it merely signals light and dark to the body.",
    "For sleep onset to occur, your core body temperature must drop 1 degree Celsius. In other words, it's easier to fall asleep in a cold room than a hot room.",
    "Our endogenous biological clocks don't keep a perfect 24 hour rhythm, so we rely on external cues like temperature, food and drink, and exercise to reset our circadian cycles.",
    "Every hour shifted out of your native timezone takes around one day to readjust to.",
    "Caffeine masks the signal of adenosine, the primary neurotransmitter that controls your urge to sleep. The adenosine build-up in the brain is the reason for so-called 'caffeine crashes'.",
    ];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(".name").on('keydown', function(ev) {
    if(ev.which === 13) {
        $(this).val('');
        var line = quote[getRandomArbitrary(0,16)];
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
      var line = quote[getRandomArbitrary(0,16)];
   $(".quote-container").text(line);
   if (counter==2) {
       $(".footer").fadeIn().delay(1000);
     }
    $(".title").css('font-size', '60px');
    $(".title").css('top', '50px');
});

});

