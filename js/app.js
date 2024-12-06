const btnDonation = document.getElementById("btn-donation");
const btnHistory = document.getElementById("btn-history");

// Function for Changing Active btn style
function setActiveBtn(activeBtn, inactiveBtn) {
    activeBtn.classList.add("bg-primary", "border-primary");
    activeBtn.classList.remove("bg-white", "text-textColor");

    inactiveBtn.classList.remove("bg-primary", "border-primary");
    inactiveBtn.classList.add("bg-white", "text-textColor");
}
btnDonation.addEventListener("click", function() {
    setActiveBtn(btnDonation, btnHistory);
})
btnHistory.addEventListener("click", function() {
    setActiveBtn(btnHistory, btnDonation);
})