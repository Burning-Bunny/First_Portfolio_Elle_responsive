$(document).ready(function () {
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
    stopMovieOnBlur: true,
    playOnlyIfVisible: true,
  });
  $(".video2").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
    stopMovieOnBlur: true,
    playOnlyIfVisible: true,
  });
  $(".video3").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
    stopMovieOnBlur: true,
    playOnlyIfVisible: true,
  });
  $(".video4").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
    stopMovieOnBlur: true,
    playOnlyIfVisible: true,
  });
  $(".video5").YTPlayer({
    autoPlay: false,
    mute: true,
    startAt: 0,
    showControls: true,
    stopMovieOnBlur: true,
    playOnlyIfVisible: true,
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

  $(".ham_btn").click(function () {
    $(".lnb_hammenu").fadeIn();
  });

  $(".ham_close").click(function () {
    $(".lnb_hammenu").fadeOut();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $(".top_btn").fadeIn();
    } else {
      $(".top_btn").fadeOut();
    }
  });
  $(".top_btn").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });
});
