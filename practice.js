$(document).ready(function(){

//question 1 

$("#submitBtn").click(function(){
    var txtinput = $(".textInput").val();
    var h3 = $('<h3>' + txtinput + '</h3>');
	$('#submitBtn').after(h3);

  })

//question 2

$(".chex").click(function(){

    $("h2").toggleClass("hidden");

  })

//question 3

$("table").append($("tr:last").clone(true));
$("table").append($("tr:last").clone(true));

//question 4

$("td").each(function(index) {
  
	//alert($(this).html());

	var thisNow = $(this)

 if(thisNow.html() === "Hangry")
  {
 	thisNow.css("color","red");
  }

  if(thisNow.html() === "Content")
  {
 	thisNow.css("color","green");
  }

});

//question 5...hiding everything

$(".btn-warning").click(function(){

	$("td").each(function(index){

		var thisNum = $(this)

 	if(thisNum.val() <= 10)
  		{
 		$(this).toggleClass("hidden");
  		}

});
});


//question 6...why not working??

$(".btn-success").click(function(){

	$("td").each(function(index){

		var thisCat = $(this)

 	if(index % 3 === 0)
  		{
 		console.log(this);
 		var CatName = thisCat.text(); 
 		var UCcatName = CatName.toUpperCase();
 		
 		thisCat = UCcatName;

 		console.log(UCcatName);

  		}

});
});


//question 7

$(".btn-primary").click(function(){

    $("table").toggleClass("hidden");

  })


//question 8


//question 9...not quite correct

$('.dropdown').change(function(){ 

    var correctChoice = $('.dropdown').find('option:eq(3)').attr('selected', true);
	$('.dropdown').after(correctChoice);

  })

//question 10



//question 11



//question 12





});
