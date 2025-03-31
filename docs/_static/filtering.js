
// Derived from: https://www.w3schools.com/howto/howto_js_filter_elements.asp

function filterSelection(c) {

    // Get all filter buttons
    var btnFilters = document.getElementsByClassName("filterBtn");

    // Special case for "all" button
    if (c == "all") {
        for (var i = 0; i < btnFilters.length; i++) {

            if (btnFilters[i].id.indexOf("all") > -1) {

                if (btnFilters[i].className.split(" ").indexOf("isOn") > -1) {
                    btnFilters[i].classList.replace("isOn", "isOff");
                    break;

                } else if (btnFilters[i].className.split(" ").indexOf("isOff") > -1) {
                    btnFilters[i].classList.replace("isOff", "isOn");
                    for (var j = 0; j < btnFilters.length; j++) {
                        if (btnFilters[j].id.indexOf("all") == -1) {
                            btnFilters[j].classList.replace("isOn", "isOff");
                        }
                    }
                    break;

                }
            }
        }
        return;
    }

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
    // Get all model divs that will be filtered in or out; these show the model names
    var divModels = document.getElementsByClassName("filterDiv");

    // Show all models to start
    for (var i = 0; i < divModels.length; i++) {
        divModels[i].classList.add("show");
    }
});
