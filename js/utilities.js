// Function for Changing Active btn style
function setActiveBtn(activeBtn, inactiveBtn) {
    activeBtn.classList.add("bg-primary", "border-primary");
    activeBtn.classList.remove("bg-white", "text-textColor");

    inactiveBtn.classList.remove("bg-primary", "border-primary");
    inactiveBtn.classList.add("bg-white", "text-textColor");
}

// Function for toggling pages
function togglePages(activePage, hiddenPage) {
    activePage.classList.remove("hidden");
    hiddenPage.classList.add("hidden");
}

// Function for getting input field value
function getInputFieldValueById(id) {
    return parseFloat(document.getElementById(id).value) || 0;
}

// Function for getting inner text
function getInnerTextById(id) {
    return parseFloat(document.getElementById(id).innerText);
}