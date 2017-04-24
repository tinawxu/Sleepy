$(document).ready(function(){

<!---->
$( ".clickme" ).hover(
  function() {
    $( this ).addClass( "hover" );
  }, function() {
    $( this ).removeClass( "hover" );
  });

var quote = [ 
    "“A cup of tea makes everything better.” — Anon",
    "“You can’t buy happiness but you can buy tea and thats kind of the same thing.” — Anon",
    "“Where there’s tea theres hope.” — Sir Athur Pinero",
    "“You can’t go to bed without a cup of tea.” — Anon",
    "“Each cup of tea represents an imaginary voyage.” — Catherine Douzel",
    "“Tea is always a good idea.” — Anon",
    "“I like big cups and i cannot lie.” — Anon",
    "“All you need are books and tea.” — Anon",
    "“It's always tea time.” — The Mad Hatter",
    "“Keep calm and drink tea.” — Anon",
    "“When you have found someone with whom you enjoy taking tea, then you will have found a friend for life.” — Earline Grey",
    "“There is a great deal of poetry and fine sentiment in a chest of tea.” — Ralph Waldo Emerson",
    "“Everything stops for tea.” — Anon",
    "“You are my cup of tea.” — Popular Pick-up Line",
    "“Tea, tea, a wonderful drink, the more you have the more you think, the more you think the better you write, so lets drink tea all day and night.” — Daniel Dalton",
    "“I am not addicted to tea we are just in a very committed relationship.” — Anon",
    "“The art of tea is a spiritual force for us to share.” — Anon",
    "“Tea is a religion of the art of life.” ― Okakura Kakuzō",
    "“But indeed I would rather have nothing but tea.” ― Jane Austen",
    "“Tea. I find that both settles the stomach and concentrates the mind. Wonderful drink, tea.” ― Cassandra Clare",
    "“Sex, drugs, and Rock 'n Roll are all very well but nothing beats a nice cup of tea.” — Anon",
    "“To an Englishman, tea is of far greater importance than toilet paper.” — Anon",
    "“Tea is one of the main stays of civilization.” — George Orwell",
    "“A cup of tea is an excuse to share great thoughts with great minds.” — Cristina Re",
    "“There is something in the nature of tea that leads us into a world of quiet contemplation.” — Lin Yutang",
    "“Tea is the magic key to the vault where my brain is kept.” — Frances Hardinge",
    "“Tea is the finest solution to nearly every catastrophe and conundrum that the day may bring.” — Anon",
    "“Come, let us have some tea and continue to talk about happy things.” — Chaim Potok",
    "“Would you like an adventure now, or should we have our tea first?” — Peter Pan",
    "“Tea is the elixir of life.” — Lao Tsu",
    "“Tea is instant wisdom—just add water!” — Astrid Alauda",
    "“Life is like a cup of it, its all in how you make it.” — Anon",
    "“My blood type is tea.” — Skye Welf",
    "“There are few hours in life more agreeable than the hour dedicated to the ceremony known as afternoon tea.” ― Henry James",
    "“The 'art of tea' is a spiritual force for us to share.” ― Alexandra Stoddard",
    "“The effect of tea is cooling and as a beverage it is most suitable. It is especially fitting for persons of self-restraint and inner worth.” ― Lu Yu",
    "“Rainy days should be spent at home with a cup of tea and a good book.” ― Bill Watterson",
    "“If you are cold, tea will warm you; If you are too heated, it will cool you; If you are depressed, it will cheer you; If you are excited, it will calm you.” ― William Ewart Gladstone",
    "“I am in no way interested in immortality, but only in the taste of tea.” ― Lu T'ung",
    "“The spirit of the tea beverage is one of peace, comfort and refinement.” ― Arthur Gray",
    "“Tea is to the body as music is to the soul.” — Earlene Grey",
    "“If people drank a cup of tea every day, the pharmacists would starve.” — Chinese Proverb",
    "“I say let the world go to hell but I should always have my tea.” — Fyodor Dostoyevsky",
    "“I’m glad I was not born before tea.” — Sydney Smith"];

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

