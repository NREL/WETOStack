
// Derived from: https://www.w3schools.com/howto/howto_js_filter_elements.asp

function filterSelection(c) {

    // Get all filter buttons
    var btnFilters = document.getElementsByClassName("filterBtn");

    // Toggle the clicked button state
    for (var i = 0; i < btnFilters.length; i++) {
        if (btnFilters[i].id == c) {
            if (btnFilters[i].className.indexOf("isOn") > -1) {
                btnFilters[i].classList.replace("isOn", "isOff");
            } else if (btnFilters[i].className.indexOf("isOff") > -1) {
                btnFilters[i].classList.replace("isOff", "isOn");
            }
            break;
        }
    }

    // Add filters to to the filterList for all buttons that are "on"
    var filterList = new Array();
    for (var i = 0; i < btnFilters.length; i++) {
        if (btnFilters[i].className.indexOf("isOn") > -1) {
            filterList.push(btnFilters[i].id);
        }
    }

    // Get all model divs that will be filtered in or out; these show the model names
    var divModels = document.getElementsByClassName("filterDiv");

    // Filter the models based on the current filter list
    for (var i = 0; i < divModels.length; i++) {
        var showModel = true;
        for (var j = 0; j < filterList.length; j++) {
            if (divModels[i].className.indexOf(filterList[j]) == -1) {
                showModel = false;
                break;
            }
        }

        if (showModel) {
            divModels[i].classList.add("show");
        } else {
            divModels[i].classList.remove("show");
        }
    }

    // console.log(filterList);
}

document.addEventListener("DOMContentLoaded", function (event) {
    // Show all models to start
    const divModels = Array.from(document.getElementsByClassName("filterDiv"));
    divModels.forEach((model) => model.classList.add("show"));
});
