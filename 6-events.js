"use strict"

var thirdLink = document.getElementsByTagName('a')[2];
thirdLink.addEventListener('click', alarm);

function alarm() {
e.preventDefault('a')
    //    alert('kliknięto kolejny link');
}



var mainHeader = document.getElementById('main-header');

mainHeader.innerHTML = "Treść nagłówka";



mainHeader.onmouseover = resize;
mainHeader.onmouseout = resize;



function resize(e) {
    
    if(e.type == 'mouseover') { 
    
    mainHeader.style.fontSize = "70px";

    } else {
        
        mainHeader.style.fontSize = "inherit";

        
    }
    
    
    }
    
