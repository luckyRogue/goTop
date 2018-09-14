
;(function ($) {
    $.fn.extend({
        "goTop" : function () {   
            var _this = this; //指向当前元素
            $(window).scroll(function() {
                //判断屏幕滚动距离（>400时出现按钮）
                if ($(this).scrollTop()>400) {  
                    _this.stop(true).slideDown();
                }else{
                    _this.stop(true).slideUp();
                }         
            });
            return this.click(function () {
                //回到顶部
                $('body,html').stop(true).animate({
                    scrollTop: 0
                });
            });
        }
    })
})(jQuery);
  