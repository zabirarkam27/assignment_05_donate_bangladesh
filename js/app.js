const btnDonation = document.getElementById("btn-donation");
const btnHistory = document.getElementById("btn-history");
const historyPage = document.getElementById("history-page");
const donationPage = document.getElementById("donation-page");


// Function for Changing Active btn style
function setActiveBtn(activeBtn, inactiveBtn) {
    activeBtn.classList.add("bg-primary", "border-primary");
    activeBtn.classList.remove("bg-white", "text-textColor");

    inactiveBtn.classList.remove("bg-primary", "border-primary");
    inactiveBtn.classList.add("bg-white", "text-textColor");
}

// Function for toggle pages
function togglePages(activePage, hiddenPage) {
    activePage.classList.remove("hidden");
    hiddenPage.classList.add("hidden");
}

btnDonation.addEventListener("click", function() {
    setActiveBtn(btnDonation, btnHistory);
    togglePages(donationPage, historyPage);
})
btnHistory.addEventListener("click", function() {
    setActiveBtn(btnHistory, btnDonation);
    togglePages(historyPage, donationPage);
})