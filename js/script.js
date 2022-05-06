//Makes sure no skills appear when page is first loaded
//when something is entered in the input prepend it to the when button is clicked
//remove a skill when clicked



//when button clicked console.log the text from the input field
$('.button').click(function(){
    const input = $('.input').val();
    $('.cointainer').html(`<p>${input}</p>`)
    console.log(input)
})