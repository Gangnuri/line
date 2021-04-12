$(function(){

    const $indicator = $(".mainmnu>.mainmnu-pagination>li>a");

    $indicator.on('click', function(evt){     

        evt.preventDefault();
        
        const nowIdx = $indicator.index(this);
        
        $(".mainmnu>.mainmnu-slides").stop().animate({
            left : -1200*nowIdx},1500);

        $(this).parent().addClass('on').siblings().removeClass('on');

    })
});
