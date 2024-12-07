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

function getHeaderTextById(id) {
    return (document.getElementById(id).innerText);
}

// function for modal
function handleModal() {
    const modal = document.getElementById("my_modal_5");
    modal.showModal();
}

// function for creating history
function donationHistory(donationInput, donationHeading, currentDate) {
  const div = document.createElement("div");
  div.innerHTML = `<div class="border border-gray-100 rounded-xl px-4 py-6 my-6 md:px-8 md:py-10 space-y-2">
        <h3 class="text-xl font-bold">${donationInput} Taka is Donated for ${donationHeading}, 2024</h3>
        <p class="text-textColor text-lg">Date: ${currentDate}</p>
        </div>`;

  return div;
}


