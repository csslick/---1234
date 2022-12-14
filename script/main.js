$(function(){

  // 1.해당 목록만 내려오는 유형(기본)
  // 2.전체 목록이 내려오는 유형
  $('nav .depth1 > li').hover(
    function(){
      // mouseover
      // $(this).children().addClass('show');
      $('nav .depth2').addClass('show');
    },
    function(){
      // mouseout
      // $(this).children().removeClass('show');
      $('nav .depth2').removeClass('show');
    }
  );

  // 이미지 슬라이더
  let 이미지번호 = 0; // 이미지 번호
  let 이미지높이값= 300;
  let 전환주기 = 3000;

  setInterval(function(){
    이미지번호++; // 이미지 번호 증가
    // 마지막 이미지면 처음으로
    if(이미지번호 > 2) {
      이미지번호 = 0;
    }
    $('.slider > .sliders').css({
      // 이동값 = 이미지번호 x 이미지 높이값
      transform: `translateY(${-이미지번호 * 이미지높이값}px)`
    })
  }, 전환주기)


  // 탭 UI
  // 공지사항 버튼
  $('.btn-group .btn-notice').on('click', function(){
    console.log('btn-notice')
    // 버튼 클래스 초기화
    $('#notice-box, #gallery-box').removeClass('show');
    $('#notice-box').addClass('show');

    // 버튼 스타일
    $('.btn-group > a').removeClass('show');
    $(this).addClass('show');
  })

  // 갤러리 버튼
  $('.btn-group .btn-gallery').on('click', function(){
    console.log('btn-gallery')
    // 버튼 클래스 초기화
    $('#notice-box, #gallery-box').removeClass('show');
    $('#gallery-box').addClass('show');

    // 버튼 스타일
    $('.btn-group > a').removeClass('show');
    $(this).addClass('show');
  })


}) // $
