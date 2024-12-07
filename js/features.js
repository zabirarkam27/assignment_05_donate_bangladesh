// move donation page
btnDonation.addEventListener("click", function() {
    setActiveBtn(btnDonation, btnHistory);
    togglePages(donationPage, historyPage);
});

// move donation page
btnHistory.addEventListener("click", function() {
    setActiveBtn(btnHistory, btnDonation);
    togglePages(historyPage, donationPage);
});

// Noakhali donation
btnDonateNoakhali.addEventListener("click", function() {
    handleDonation("donate-noakhali", "noakhali-donation-amount");
})

// feni donation
btnDonateFeni.addEventListener("click", function() {
    handleDonation("donate-feni", "feni-donation-amount");
})


// injured donation
btnDonateInjured.addEventListener("click", function() {
    handleDonation("donate-injured", "injured-donation-amount");
})