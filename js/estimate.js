/* global TrelloPowerUp */
var Promise = TrelloPowerUp.Promise;
var t = TrelloPowerUp.iframe();
var ubvSelector = document.getElementById('ubv');
var tcSelector = document.getElementById('tc');
var rroeSelector = document.getElementById('rroe');
var jsSelector = document.getElementById('js');
var wsjfCalc = document.getElementById('wsjf');
var warning = document.getElementById('warning');



document.getElementById('save').addEventListener('click', function(){
  return t.set('card', 'shared', 'ubv', ubvSelector.value)
  .then(function(){
    return t.set('card', 'shared',  'tc', tcSelector.value)
  })
  .then(function(){
    return t.set('card', 'shared',  'rroe', rroeSelector.value)
  })
  .then(function(){
    return t.set('card', 'shared',  'js', jsSelector.value)
  })
  .then(function(){
    if (ubvSelector.value=="1") {
      var wsjfval= 1
    } 
    if (ubvSelector.value=="2") {
      var wsjfval= 2
    } 
     if (ubvSelector.value=="3") {
      var wsjfval= 3
    } 
    if (ubvSelector.value=="5") {
      var wsjfval= 5
    } 
      if (ubvSelector.value=="8") {
      var wsjfval= 8
    } 
      if (ubvSelector.value=="13") {
      var wsjfval= 13
    } 
      if (ubvSelector.value=="21") {
      var wsjfval= 21
    } 
    
    
    /*var wsjfval = ((ubvSelector.value+tcSelector.value+rroeSelector.value)/jsSelector.value)*/
    /* return t.set('card', 'shared',  'wsjf', (parseFloat(Math.round(wsjfval) * 100) / 100).toFixed(2)) */
   /* var wsjfval = ((ubvSelector.value+tcSelector.value+rroeSelector.value)/jsSelector.value) */
     return t.set('card', 'shared',  'wsjf', wsjfval)
 
  
  
  })
  .then(function(){
   
   
     t.closePopup();
  });
});

var wsjf = 0;

t.render(function(){
  return Promise.all([
    t.get('card', 'shared', 'ubv'),
    t.get('card', 'shared', 'tc'),
    t.get('card', 'shared', 'rroe'),
    t.get('card', 'shared', 'js'),
    t.get('card', 'shared', 'wsjf'),
    
    ])
  .spread(function(savedUbv, savedTc, savedRroe, savedJs, savedWsjf){
    
     ubvSelector.value = savedUbv;
     tcSelector.value = savedTc;
     rroeSelector.value = savedRroe;
     jsSelector.value = savedJs;
     wsjfCalc.innerHTML = savedWsjf; 
    
  })
  .then(function(){
    t.sizeTo('#content')
    .done();
  })
});

