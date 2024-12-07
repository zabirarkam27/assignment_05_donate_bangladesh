// move donation page
btnDonation.addEventListener("click", function () {
  setActiveBtn(btnDonation, btnHistory);
  togglePages(donationPage, historyPage);
});

// move donation page
btnHistory.addEventListener("click", function () {
  setActiveBtn(btnHistory, btnDonation);
  togglePages(historyPage, donationPage);
});

// Noakhali donation
btnDonateNoakhali.addEventListener("click", function () {
  const donationInput = getInputFieldValueById("donate-noakhali");
  const success = handleDonation("donate-noakhali", "noakhali-donation-amount");
  const currentDate = currentDateTime;

  if (success) {
    const newHistoryDiv = donationHistory(
      donationInput,
      donationHeadingNoakhali,
      currentDate
    );
    document.getElementById("history-page").appendChild(newHistoryDiv);
    handleModal();
  }
});

// feni donation
btnDonateFeni.addEventListener("click", function () {
  const donationInput = getInputFieldValueById("donate-feni");
  const success = handleDonation("donate-feni", "feni-donation-amount");
  const currentDate = currentDateTime;

  if (success) {
    const newHistoryDiv = donationHistory(
      donationInput,
      donationHeadingFeni,
      currentDate
    );
    document.getElementById("history-page").appendChild(newHistoryDiv);
    handleModal();
  }
});

// injured donation
btnDonateInjured.addEventListener("click", function () {
  const donationInput = getInputFieldValueById("donate-injured");
  const success = handleDonation("donate-injured", "injured-donation-amount");
  const currentDate = currentDateTime;

  if (success) {
    const newHistoryDiv = donationHistory(
      donationInput,
      donationHeadingQuotaMovement,
      currentDate
    );
    document.getElementById("history-page").appendChild(newHistoryDiv);
    handleModal();
  }
});
