(function ($) {
  "use strict";

  $(document).ready(function () {
    // تعديل التحكم في الكاروسيل ليناسب RTL
    $(".carousel-arrow.prev").on("click", function () {
      // الزر السابق يتحرك للخلف في RTL
      $(this)
        .closest(".position-relative")
        .find(".vs-carousel")
        .slick("slickNext");
    });

    $(".carousel-arrow.next").on("click", function () {
      // الزر التالي يتحرك للأمام في RTL
      $(this)
        .closest(".position-relative")
        .find(".vs-carousel")
        .slick("slickPrev");
    });
  });
})(jQuery);
