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
    if (ubvSelector.value=="") { var ubvtemp= 0 }  
    if (ubvSelector.value=="1") { var ubvtemp= 0 } 
    if (ubvSelector.value=="2") { var ubvtemp= 1 } 
    if (ubvSelector.value=="3") { var ubvtemp= 2 } 
    if (ubvSelector.value=="4") { var ubvtemp= 3 } 
    if (ubvSelector.value=="5") { var ubvtemp= 5 } 
    if (ubvSelector.value=="6") { var ubvtemp= 8 } 
    if (ubvSelector.value=="7") { var ubvtemp= 13 } 
    if (ubvSelector.value=="8") { var ubvtemp= 21 } 
  
    if (tcSelector.value=="") { var tctemp= 0 }  
    if (tcSelector.value=="1") { var tctemp= 0 } 
    if (tcSelector.value=="2") { var tctemp= 1 } 
    if (tcSelector.value=="3") { var tctemp= 2 } 
    if (tcSelector.value=="4") { var tctemp= 3 } 
    if (tcSelector.value=="5") { var tctemp= 5 } 
    if (tcSelector.value=="6") { var tctemp= 8 } 
    if (tcSelector.value=="7") { var tctemp= 13 } 
    if (tcSelector.value=="8") { var tctemp= 21 } 
    
   if (rroeSelector.value=="") { var rroetemp= 0 }  
    if (rroeSelector.value=="1") { var rroetemp= 0 }
    if (rroeSelector.value=="2") { var rroetemp= 1 } 
    if (rroeSelector.value=="3") { var rroetemp= 2 } 
    if (rroeSelector.value=="4") { var rroetemp= 3 } 
    if (rroeSelector.value=="5") { var rroetemp= 5 } 
    if (rroeSelector.value=="6") { var rroetemp= 8 } 
    if (rroeSelector.value=="7") { var rroetemp= 13 } 
    if (rroeSelector.value=="8") { var rroetemp= 21 } 
    
    if (jsSelector.value=="") { var jstemp= 0 }  
    if (jsSelector.value=="1") { var jstemp= 0 } 
    if (jsSelector.value=="2") { var jstemp= 1 } 
    if (jsSelector.value=="3") { var jstemp= 2 } 
    if (jsSelector.value=="4") { var jstemp= 3 } 
    if (jsSelector.value=="5") { var jstemp= 5 } 
    if (jsSelector.value=="6") { var jstemp= 8 } 
    if (jsSelector.value=="7") { var jstemp= 13 } 
    if (jsSelector.value=="8") { var jstemp= 21 } 
    
    var wsjfval = ((ubvtemp + tctemp + rroetemp)/ jstemp ) 
    /*var wsjfval = ((ubvSelector.value+tcSelector.value+rroeSelector.value)/jsSelector.value)*/
    /* return t.set('card', 'shared',  'wsjf', (parseFloat(Math.round(wsjfval) * 100) / 100).toFixed(2)) */
    /* var wsjfval = ((ubvSelector.value+tcSelector.value+rroeSelector.value)/jsSelector.value) */
    /* return t.set('card', 'shared',  'wsjf', (Math.round(wsjfval*100)/100)) */
    return t.set('card', 'shared', 'wsjf', Math.round(wsjfval))
 
  
  
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

