
var resetB = document.getElementById("resetBtn")
var lemonP = document.getElementById("lemonp")
var sugarP = document.getElementById("sugarp")
var chocoP = document.getElementById("chocolatep")
var lemonB = document.getElementById("lemonBtn")
var sugarB = document.getElementById("sugarBtn")
var chocoB = document.getElementById("chocolateBtn")

var lemon1
var sugar
var chocolate

window.onload=function(){
if (Cookies.get("lemon")==undefined) {
lemon1=0;
Cookies.set ("lemon", 0)
lemonP.innerHTML=Cookies.get("lemon")
}else {
  lemon1=Cookies.get("lemon")
  lemonP.innerHTML=Cookies.get("lemon")
}

if (Cookies.get("sugar")==undefined) {
sugar=0;
Cookies.set("sugar", 0)
sugarP.innerHTML=Cookies.get("sugar")
}else {
  sugar=Cookies.get("sugar")
  sugarP.innerHTML=Cookies.get("sugar")
}

if (Cookies.get("chocolate")==undefined) {
chocolate=0;
Cookies.set("chocolate", 0)
chocoP.innerHTML=Cookies.get("chocolate")
}else {
  chocolate=Cookies.get("chocolate")
  chocoP.innerHTML=Cookies.get("chocolate")
}
}
//eventlisteners and funtions agarrar los element para los botones

lemonBtn.addEventListener('click', function(e){
    e.preventDefault();
    console.log('btn clicked');
    lemon1++;
    Cookies.set("lemon", lemon1);
    lemonP.textContent = lemon1 ;
});

sugarBtn.addEventListener('click', function(e){
       e.preventDefault();
      console.log('btn clicked');
       sugar++;
     Cookies.set ('sugar', sugar);
     sugarP.textContent = sugar ;
});

chocolateBtn.addEventListener('click', function(e){
  e.preventDefault();
   console.log('btn clicked');
  chocolate++;
  Cookies.set ('chocolate', chocolate);
  chocoP.textContent = chocolate;
 })


 resetB.addEventListener('click', function(){
   Cookies.expire("lemon")
   Cookies.expire("sugar")
   Cookies.expire("chocolate")

 lemonP.innerHTML ="";
 sugarP.innerHTML ="";
 chocoP.innerHTML ="";
  lemon1 = 0;
  sugar = 0;
  chocolate = 0;
});

const mouse$ = Rx.Observable
  .fromEvent(document, 'mousemove')
  .map(({ x, y }) => {
    x = parseInt((x / $(document).width() * 50) - 35);
    y = parseInt((y / $(document).height() * 50) - 35);
return { x, y }});

const style$ = RxCSS({
  mouse: mouse$,
});
