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
    "We have a biological hardwire dip in alertness, the post-prandial dip, otherwise known as the 'afternoon slump'.",
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
    "Medical interns have 160% higher risk of getting into road accidents due to extended work shifts.",
    "Sleep deprivation has huge societal consequences. The Exxon Valdez oil spill was in part caused by a sleep-deprived operator who misnavigated the tanker.",
    "A New York DJ holds the world record for staying awake for 8 days. By Day 4, he suffered delusions, hallucinations, and significant psychosis. He continued to display behavioral and psychological disturbances that led to him losing his job and marriage.",

    "We we age, total sleep time decreases. Starting from young adulthood, there is a stable 4:1 of NREM and REM sleep.",
    "The elderly face the challenge of fragmented and unconsolidated sleep due to brain deterioration -- they simply cannot generate sleep.",
    "We tend to experience more deep sleep, or slow wave sleep, early on in the right, and more REM sleep later on in the night.",
    "There is a profound body of anecdotal evidence linking dreams to creative bursts. For example, Paul McCartney claims to have heard the melody to 'Yesterday' in a dream.",
    "The concept of 'sleeping on a problem' is common across the globe.",
    "Most people know that sleep is crucial to memory consolidation, but different types of memories depend on different types of sleep at different times at night.",
    "Even daytime naps can help consolidate visual memories. A 60-90 minute nap has almost as much benefit as a full night of sleep.",
    "Sleep after learning helps retain facts and prevent forgetting. So that all-nighter really is not a good idea.",
    "It's possible to preferentially boost memory by manipulating slow wave sleep in a lab setting.",
    "The type of sleep we get is more important to memory consolidation than the time we sleep.",
    
    "Memory consolidation is more effective when sleep is not disrupted.",
    "Sleep stablizes declarative, or fact-based memory, and prevents forgetting.",
    "An absence of slow wave sleep is associated with poor memory retention. This is important since the erosion of slow wave sleep with age is significantly related to cognitive decline in late life.",
    "Researchers are currently investigating the use of sleep therapy to combat the cognitive impediments of aging and dementia.",
    "Sleep helps interconnect memories and associate and extract commonalities in ways the waking brain cannot.",
    "REM sleep may help us understand the rules of our world by identifying predictive and associative patterns from what we learn across life.",
    "Even partial sleep deprivation was shown to reduce natural killer cell activity in humans. Natural killer cells are crucial in limiting the spread of tumors and infection.",
    "The World Health Organization has listed shift work as a probably carginogen.",
    "Sleep deprivation has pronounced impairment on metabolism. A study showed the speed of glucose removal in individuals dropped by over 40% after sleep loss. The effect is similar to those who are at significantly greater risk of diabetes.",
    "Lack of sleep is related to weight gain and obesity. Changes in levels of 'hunger hormones' leptin and ghrelin makes people biologically inclined to feel hungry, eat more, and feel less satiated after eating.",

    "REM sleep is related to mental sanity and mental health. So honestly, please get your sleep.",
    "REM sleep deprivation has effects of increased aggression, emotional instability, and paranoia.",
    "Rats die after 15 days on average without sleep -- the same amount of time as total starvation. So sleep is as important to life as food. The final cause of death was immune system failure.",
    "In lab settings, the longer animals stayed awake, the more they ate. Yet the more they ate while remaining awake, the more weight they lost. The point at which food intake began increasing was also the point when thermoregulation ability failed.",
    "There's a basis to the idea of 'beauty sleep'. Individuals were rated to look less attractive by third parties when they were sleep deprived compared to when they recieved normal sleep.",
    "Tired drivers are as dangerous as drunk drivers due to their functional impairment from lack of sleep.",
    "Prolonged partial sleep deprivation can be as devastating as total sleep deprivation. Sadly, in lab settings, chronically sleep deprived individuals do not return to their baseline level of cognitive function even with ample recovery sleep.",
    "Most individuals can maintain solid cognitive performance for up to 16 hours of wakefulness.",
    "Individuals on 4 hours of sleep are as impaired in task performance as when they are legally drunk.",
    "Alcohol dramatically amplifies driving error impact of sleep loss by almost 3x.",
    ];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$(".name").on('keydown', function(ev) {
    if(ev.which === 13) {
        $(this).val('');
        var line = quote[getRandomArbitrary(0,49)];
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
      var line = quote[getRandomArbitrary(0,49)];
   $(".quote-container").text(line);
   if (counter==2) {
       $(".footer").fadeIn().delay(1000);
     }
    $(".title").css('font-size', '60px');
    $(".title").css('top', '50px');
});

});

