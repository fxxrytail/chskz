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



function openMenu() {
	menuStat = document.getElementById("menuContent").style.display;

	if (menuStat != "block"){
		document.getElementById("menuContent").style.display = "block";
		document.getElementById("modalBG").style.display = "block";
	}

	else {
		document.getElementById("menuContent").style.display = "none";
		document.getElementById("modalBG").style.display = "none";
	}
}

function closeMenu() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("modalBG").style.display = "none";
}

/*For facts
function openBox(boxBtn, boxBox) {
  var vboxBtn, vboxBox, vboxSpan;
  vboxBtn = document.getElementById(boxBtn);
  vboxBox = document.getElementById(boxBox);
}*/

function closeBox() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("modalBG").style.display = "none";
}

// When the user clicks the button, open the modal
function openModal() {
  document.getElementById("modalBoxBG").style.display = "block";

}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  document.getElementById("modalBoxBG").style.display = "none";
}

function openNav(){
  navBtnv = document.getElementById("navBox").style.innerHTML;

  if (navBtnv != "Navigation"){
  document.getElementById("navBox").style.display = "none";
  document.getElementById("navBox").style.innerHTML = "Navigation";
  }

  else {
    document.getElementById("navBox").style.display = "block";
    document.getElementById("navBox").style.innerHTML = "Collapse Navigation";
  }
}

/*  if (menuStat != "block"){
		document.getElementById("menuContent").style.display = "block";
		document.getElementById("modalBG").style.display = "block";
	}

	btnAboutText = document.getElementById("myBtn").innerHTML;

	if (btnAboutText != "Click to hide About"){
		document.getElementById("about").style.display = "block";
		document.getElementById("myBtn").innerHTML = "Click to hide About";
	}

	else {
		document.getElementById("about").style.display = "none";
		document.getElementById("myBtn").innerHTML = "About This Site and Contact";
	} */

/*function openSurvey() {
	btnSurveyText = document.getElementById("btnSurvey").innerHTML;

	if (btnSurveyText != "Click to hide"){
		document.getElementById("about").style.display = "none";
		document.getElementById("survey").style.display = "block";
		document.getElementById("box").style.border = "2px solid #607d8b";
		btnSurveyText = document.getElementById("btnSurvey").innerHTML = "Click to hide";
	}

	else {
		document.getElementById("about").style.display = "block";
		document.getElementById("survey").style.display = "none";
		document.getElementById("box").style.border = "none";
		btnSurveyText = document.getElementById("btnSurvey").innerHTML = "Click this if you're new to Stray Kids ^^";
	}
}*/



function openTabb(evt, tabName, tc, tb, ct) {
  // Declare all variables
  var i, tabcontent, tablinks, click;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName(tc);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName(tb);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", " ");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  click = document.getElementById(ct);
  click.className += " active";


}

/*ORIGINAL TAB FUNCTION*/
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
