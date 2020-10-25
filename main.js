$('input').keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append('<li>' + todoText + '<span><i class="fas fa-trash"></i></span></li>')
    }
})

$('ul').on('click', "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove()
    })
    event.stopPropogation()
})

$('ul').on('click', 'li', function(){
    $(this).toggleClass('done')
})