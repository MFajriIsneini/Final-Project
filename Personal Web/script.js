//parallax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)' 
    });
});

// Submit Pesan
function submitFunction() {
    document.getElementById("pesanForm").submit();
}