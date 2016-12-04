"use strict"

var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = "Treść nagłówka";

var link = document.getElementsByClassName('link');
link.href = "http://akademia108.pl";

link.className = "nowa-klasa";

mainHeader.style.color = "#56ff36";
