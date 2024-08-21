
// ハンバーガーメニュー

$(".hamburger-menu").click(function () {
    $(this).toggleClass('active');
    $(".hamburger-menu-wrapper").toggleClass("active");
});

// slick
$('.news-list').slick({
    centerMode: true, // センターモードを有効化
    centerPadding: '50px', // 両端の余白を設定
    slidesToShow: 3, // 3つのスライドを表示
    arrows: false, // アローは非表示
    dots:true,
    initialSlide: 0, // 最初のスライドを0番目(左端)に設定

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                centerPadding: '40px'
            }
        },
    ]
});

// aboutのボーダー処理

$(window).scroll(function() {
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();

    // .about-section の処理
    $('.about-section').each(function() {
        let aboutSectionTop = $(this).offset().top;
        if (scroll > aboutSectionTop - windowHeight + 200) {
            $(this).addClass('is-animated');
        } else {
            $(this).removeClass('is-animated');
        }
    });

// .festival-item の処理
    $('.festival-item').each(function() {
        let festivalItemTop = $(this).offset().top;
        if (scroll > festivalItemTop - windowHeight + 200) {
            $(this).css({
                opacity: 1,
                transform: 'translateY(0)'
            });
        } else {
            $(this).css({
                opacity: 0,
                transform: 'translateY(30px)'
            });
        }
    });
});

// ページトップリンク

//スクロールした際の動きを関数でまとめる
function PageTopCheck(){
    let winScrollTop = $(this).scrollTop();
    let secondTop =  $("#about").offset().top - 150; //#aboutの上から150pxの位置まで来たら
    if(winScrollTop >= secondTop){
		$('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
		$('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
	} else {//元に戻ったら
		$('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
		$('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
	}

}

//クリックした際の動き
$('.scroll-top a').click(function () {
	let elmHash = $(this).attr('href'); //hrefの内容を取得
	if (elmHash == "#about") {//もし、リンク先のhref の後が#aboutの場合
		let pos = $(elmHash).offset().top;
		$('body,html').animate({scrollTop: pos}, pos); //#aboutにスクロール
	}else{
		$('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
	}
    return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});
