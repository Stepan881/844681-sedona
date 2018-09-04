var popbtn = document.querySelector(".main-btn");
var popup = document.querySelector(".search-hide");
var search = popup.querySelector(".search-btn");
var arrivaldate = popup.querySelector("[id=arrival-date]");
var datedeparture = popup.querySelector("[id=date-departure]");
var adults = popup.querySelector("[id=adults]");
var children = popup.querySelector("[id=children]");
var storg = localStorage.getItem("adul");
var storga = localStorage.getItem("child");

popbtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("search");
  popup.classList.toggle("search-hide");
  if (storg) {
    adults.value = storg;
  }
  if (storga) {
    children.value = storga;
  }
});

popup.addEventListener("submit", function (evt) {
  arrivaldate.classList.remove("input-error");
  datedeparture.classList.remove("input-error");
  adults.classList.remove("input-error");
  children.classList.remove("input-error");
  if (!arrivaldate.value){
  evt.preventDefault();
  arrivaldate.focus();
  arrivaldate.classList.add("input-error");
  console.log("Заполните дату заезда");
  } else{
    if  (!datedeparture.value){
    evt.preventDefault();
    datedeparture.focus();
    datedeparture.classList.add("input-error");
    console.log("Заполните дату выезда");
    } else {
      if (!adults.value){
      evt.preventDefault();
      adults.focus();
      adults.classList.add("input-error");
      console.log("Заполните кол-во взрослых");
      } else {
        if (!children.value){
        evt.preventDefault();
        children.focus();
        children.classList.add("input-error");
        console.log("Заполните кол-во детей");
        } else {
          evt.preventDefault();
          console.log("приехали: "+arrivaldate.value+". уехали: "+datedeparture.value);
          console.log("взрослые: "+adults.value+". дети: "+children.value);
          localStorage.setItem("adul", adults.value);
          localStorage.setItem("child", children.value);
              }
            }
          }
        }
});
