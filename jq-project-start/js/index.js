$(document).ready(function(){
  $(".nav__toggler").click(function() {
    $(".nav").toggleClass("active");
  });

  $(".has-dropdown").click(function() {
    $(this).toggleClass("has-dropdown--active");
    $(".dropdown").slideToggle(300);
  });
  $("a[href*='#']").click(function(event) {
    event.preventDefault(); // ngan chan mac dinh
    // Cuon xuong cho co id tuong ung
      // 1.  Lay duoc cai id ma minh can cuon xuong
      const hash = this.hash; // "#abc" => $("#abc") => tim thang co id abc
      console.log($(hash).offset());
      // offset() => object 2 gia tri top va left 
      // => top la vi tri cua top thang hash so voi top cua thang cha ma co position khac static
      // => left la vi tri cua top thang hash so voi left cua thang cha ma co position khac static

      // 2. Cuon xuong
      // Gia tri scroll top: html co thanh cuon => khi thanh cuon do cuon, cach top bao nhieu => scroll top
      // chrome, firefox, opera : scolltop cua html 
      // safari: scroll top cua body
      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 600);

      // 3. Gan #id lai cho url 
      // location.hash la cai id tren url
      location.hash = hash;
      // 4. them active cho thang vua moi click
      // Xoa di cai active cua thang truoc
      $(".nav__item").removeClass("active"); // tim het may thang nav__item => xoa active
      // Them active cho thang moi
      $(this).parent().addClass("active");

  });
  $(".back-to-top").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
  });
  function onWindowScroll() {
    // Minh muon kiem tra cai nay khi trang moi load xong

    // Neu gia tri scroll top cua html, body > height cua window => cho back to top hien ra
    if ($("html, body").scrollTop() > $(window).height()) {
      $(".back-to-top").fadeIn(100);
    }
    else {
      // Con ko thi mat di
      $(".back-to-top").fadeOut(100);
    }







  // Làm thế nào để scroll spy bằng jquery
  // 1. Kiểm tra khi nào? scroll
  // 2.3. Tìm vị trí của từng thằng có id nằm trong thẻ a trong nav
  //So sánh với top của trình duyệt, xem nó có gần ko
    let id = ""; // để lưu lại id của thằng nào gần top nhất
    // Lấy ra danh sách những thằng có data-scroll-spy = section
    const listSection = $("*[data-scroll-spy='section']");
    // Lấy vị trí của thanh cuộn so với top của html, body
    const scrollPos = $("html, body").scrollTop();
    for(let section of listSection) {
      // Lấy vị trí của từng thằng so với body, html (top)
      const sectionPos = $(section).offset().top;
      // So sánh
      if (sectionPos - scrollPos >= 0 && sectionPos - scrollPos < 100) {
        id =  $(section).attr("id");
      }
    }
  // 4. Thằng nào gần nhất (trong khoảng 0 - 100px )  => active thẻ li chứa thẻ a có hash = id này
    if (id) {
      // xóa đi thằng nào đang giữ active
      $(".nav__item").removeClass("active");
      // Thêm cho thẻ li chứa thẻ a nào mà có href=id
      // $("a[href='#home'")
      $("a[href='#" + id + "']").parent().addClass("active");
    }
}
  // Hieu ko?
  onWindowScroll(); // Khi trang load xong chay ham nay
  $(window).scroll(onWindowScroll); // Khi trang scroll cung chay ham nay


  $(".WCU-carousel").owlCarousel({
    // options
    items: 1,
    loop: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    dotsEach: true,
    navClass: ["WCU-carousel__prev", "WCU-carousel__next"],
    dotClass: "owl-dot WCU-carousel__dot",
    responsive: {
      768: {
        dots: false
      }
    }
  });



  








});


// 2 cach khi responsive navigation kieu nhu vay
// Cach 1: Viet 2 cai navigation
// Khi o man hinh nho => show ra nav o mobile
// Khi o man hinh lon -> show ra nav o desktop

// Cach 2: Wanna be pro
// Viet 1 cai cho ca 2

// BTVN