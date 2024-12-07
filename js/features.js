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
    const success = handleDonation("donate-noakhali", "noakhali-donation-amount");
    if (success) handleModal();
})

// feni donation
btnDonateFeni.addEventListener("click", function() {
    const success = handleDonation("donate-feni", "feni-donation-amount");
    if (success) handleModal();
})

// injured donation
btnDonateInjured.addEventListener("click", function() {
    const success = handleDonation("donate-injured", "injured-donation-amount");
    if (success) handleModal();
})