
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
	
	if (btnSurveyText != "CLOSE"){
		document.getElementById("survey").style.display = "block";
		btnSurveyText = document.getElementById("btnSurvey").innerHTML = "CLOSE";
	}
	
	else {
		document.getElementById("survey").style.display = "none";
		btnSurveyText = document.getElementById("btnSurvey").innerHTML = "PLEASE CLICK THIS TO ANWER MY SURVEY";
	}
}
