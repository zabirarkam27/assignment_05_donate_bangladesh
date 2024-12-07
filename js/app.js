const btnDonation = document.getElementById("btn-donation");
const btnHistory = document.getElementById("btn-history");
const btnDonateNoakhali = document.getElementById("btn-donate-noakhali");
const btnDonateFeni = document.getElementById("btn-donate-feni");
const btnDonateInjured = document.getElementById("btn-donate-injured");

const historyPage = document.getElementById("history-page");
const donationPage = document.getElementById("donation-page");

const donationHeadingNoakhali = getHeaderTextById("donation-heading-noakhali");
const donationHeadingFeni = getHeaderTextById("donation-heading-feni");
const donationHeadingQuotaMovement = getHeaderTextById(
  "donation-heading-quota-movement"
);

let currentDateTime = new Date().toLocaleString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Dhaka",
  timeZoneName: "short",
});

// function for donation balance
function handleDonation(inputID, donationAmountID) {
    const availableBalance = getInnerTextById("small-available-balance");
    const totalDonation = getInnerTextById(donationAmountID);
    const donationInput = getInputFieldValueById(inputID);
    
    document.getElementById(inputID).value = "";
    
    if (isNaN(donationInput) || donationInput <= 0) {
        alert("Please enter a valid amount!");
        return false;
    }
    
    if (availableBalance < donationInput) {
        alert("Insufficient balance");
        return false;
    }

    const newAvailableBalance = availableBalance - donationInput;
    const newTotalDonation = totalDonation + donationInput;

    document.getElementById("small-available-balance").innerText = newAvailableBalance;
    document.getElementById("large-available-balance").innerText = newAvailableBalance;
    document.getElementById(donationAmountID).innerText = newTotalDonation;
    
    return true;
}

