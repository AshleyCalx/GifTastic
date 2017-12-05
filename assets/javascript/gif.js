$(function(){
	populateButtons(topics,"SearchButton","#buttons");
})

var topics= ['robert de niro','maryl streep','leonardo di caprio', 'denzel washington', 'anne hathaway', 'robert downey jr.' 'viola davis', 'gal gadot'];

function populate buttons(topics,classToAdd,areaToAddTo){
	$(areaTpAddTo).empty();
	for(var i=0; i<topics.length;i++){
		var a = $("button");
		a.addClass(classToAdd);
		a.attr('data-type', topics[i]);
		a.text(topics[i]);
		$(areaToAddTo).append(a);
	}
}