// NEW
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("btnTop").style.display = "block";
    } else {
        document.getElementById("btnTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function openSurvey() {
	btnSurveyText = document.getElementById("btnSurvey").innerHTML;
	
	if (btnSurveyText != "Click to hide"){
		document.getElementById("about").style.display = "none";
		document.getElementById("survey").style.display = "block";
		btnSurveyText = document.getElementById("btnSurvey").innerHTML = "Click to hide";
		
		document.getElementById("myModal").style.display = "block";
	}
	
	else {
		document.getElementById("about").style.display = "block";
		document.getElementById("survey").style.display = "none";
		btnSurveyText = document.getElementById("btnSurvey").innerHTML = "Click here if you're new to Stray Kids";
	}
}

// When the user clicks the button, open the modal 
function openModal() {
  document.getElementById("new2skz").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  document.getElementById("new2skz").style.display = "none";
}