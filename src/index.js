$(".page").hide();
$("#page_home").show();
$(window).resize(() => {
  if($(window).width() < 960) {
    $("[id ^= normal]").hide();
    $("[id ^= lowres]").show();
  } else {
    $("[id ^= normal]").show();
    $("[id ^= lowres]").hide();
  }
})