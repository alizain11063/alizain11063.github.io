function getLinks(){
	
	var a = document.getElementById("searh-bar").value;
	
	if(a === "home")	{	
		window.location.href= "index.html";
	}
	else if(a === "about")	{	
		window.location.href= "about.html";
	}
	else if(a === "contact")	{	
		window.location.href= "Contact.html";
	}
	else if(a === "bikes")	{	
		window.location.href= "bikes.html";
	}
	else if(a === "gallery")	{	
		window.location.href= "Gallery.html";
	}

	else{	
		alert("page not found");
	}
}
