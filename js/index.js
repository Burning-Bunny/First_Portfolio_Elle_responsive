document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";

$(function () {
  $(".main_visual").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  });

  $(".video1").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
  });
  $(".video2").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
  });
  $(".video3").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
  });
  $(".video4").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
  });
  $(".video5").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
  });

  $(".elle_youtube").slick({
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    autoplay: false,
    dots: true,
  });

  $(".brand").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  });

  $(".holoscope .contents").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  });

  $(".event").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
  });
});
