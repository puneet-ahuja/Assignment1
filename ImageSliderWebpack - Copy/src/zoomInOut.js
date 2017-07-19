export var togglePopup = (function(){

    function hidePopup(   popup , overlay ){
        popup.className = "";
            overlay.style.height = "0px";
            overlay.style.width = "0px";
            popup.style.height = "100%";
            popup.style.width = "100%";
    }

    function showPopup(   popup , overlay ){
        popup.className = "popup";
            overlay.style.height = "100%";
            overlay.style.width = "100%";
           
            popup.style.height = "50%";
            popup.style.width = "50%";
    }


    return {
        hidePopup : hidePopup,
        showPopup : showPopup
    };
})();