//Change the text of the h1 to the given string in new H1
// const newH1 = 'This is the new H1';
// $('.heading').text(newH1);

//change the text of h1 to a p tag
// $('.heading').html('<p>this is now a paragraph</p>')

//changes p to a new paragraph
// $('.newSkill').html('<p>CODER</p')


//when button clicked log what was typed in the input and change P element
$('.button').click(function(){
    //take what is typed in the input feild and save it to the input variable
    let input = $('.input').val();
    console.log(input)
    //create a variable new skill and append it to the ul when button clicked
    const $newSkill = $(`<li>${input}</li>`);
    $('.skillList').append($newSkill);
    input = '';
});