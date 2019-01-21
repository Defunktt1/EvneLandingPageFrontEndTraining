$().ready(function () {
    $('#stars li').on('mouseover', function () {
        let currentStar = $(this).data('value');
        $(this).parent().children().each(function (index) {
            index < currentStar ? $(this).addClass('hover') : $(this).removeClass('hover');
        });
    });
});

$().ready(function () {
    $('#ingredients-text').hide();
    $('#intake-text').hide();
    $('body').on('click','.description-element', function (e) {
        e.preventDefault();
        let index = $(this).data('value');
        $('.information').hide();
        $(".information:eq(" + index +")").show();
    })
});