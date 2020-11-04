//

$(document).ready(function() {

  //mi creo una variabile che selezioni tutti gli a che hanno come genitore la classe .with-dropdown
	var link = $(".with-dropdown > a");
  //mi creo una variabile che selezioni tutti gli elementi con classe dropdown-menu che hanno come genitore la classe .with-dropdown
	var menu = $(".with-dropdown > .dropdown-menu");

  //quando clicco sul link mi deve spuntare il menu, se clicco su un'altro menu il precedente si chiude e si apre quello su cui ho appena cliccato
	link.click( function(){
	  var menuAttuale = $(this).next(".dropdown-menu")
	  menu.not(menuAttuale).hide();
	  menuAttuale.toggle();
	});

});
