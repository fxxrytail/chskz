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




function openTab(evt, tabName, tc, tb) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(tc);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(tb);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

