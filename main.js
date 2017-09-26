
$(document).ready(function(){
  var app ={
    CARDS: [1,1,2,2,3,3,4,4,5,5,6,6],
     init: function() {
       app.shuffle();
       app.assignCards();
        },
        shuffle:function() {
          var random = 0;
          var temp = 0;
          for (i = 1; i < app.card.length; i++) {
              ramdom = math.round(math.random()* i);
              temp = app.cards[i];
              app.cards = app.cards[random];
              app.cards[random] = temp;
            }
            app.assignCards();
          console.log('Shuffled Card Arry:' + app.cards);
        },
        assignCards: function() {
          $('.cards').each(function(index) {
            $(this).attr('data-card-value', app.cards[index]);
          });
          app.clickHandlers();
        },
     clickhandlers: function() {
           $('.card').on('click', function() {
             $(this).html('<p>' +$(this).data('cardValue')+'</p>').addClass('selected');
             app.checkMatch();
           });
         },
           checkMatch: function() {
             if($('.selected').length == 2) {
               if($('.selected').first().data('cardValue') === $('.selected').last().data('cardValue')) {
                  $('.selected').each(function) {
                    $(this).animate({opacity 0});
               })
                  $('.selected').each(function() {
                  $(this).removeClass('select').removeCard('unmatched');
                  app.checkWin();

               });
             } else {
               setTimeout(function() {
                 $(this).html('')removeClass('selected');
               });
             }, 1000);
             }
             }
           },
           checkWin: function() {
             if($('.unmatched').length === 0) {
              $('.container').html(<h1>'You Win!'</h1>);
             }

           }
     };
    app.init();
});
