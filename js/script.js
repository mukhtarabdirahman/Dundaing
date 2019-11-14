// $(document).ready(function () {
//   $("#inter").hover(function(){
//     $(".text").slideToggle("slow")
//     $("img").fadeOut();
//   },function(){
//     $(".text").slideToggle("slow")
//     $("img").fadeIn();
//   })
// })
$(document).ready(function () {
  $("form#custom").submit(function (event) {
event.preventDefault()
    var select = $("input[type=checkbox]:checked").map(function (_, el) {
      return $(el).val();
    }).get();
    if (select === undefined || select.length == 0) {
      alert("make selections please")
    } else {
      $("#drinks").text()
    }
  })
})