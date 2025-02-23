window.addEventListener("load", solve);

function solve() {
    let roomSizeElement = document.getElementById("room-size");
    let timeSlotElement = document.getElementById("time-slot");
    let fullNameElement = document.getElementById("full-name");
    let emailElement = document.getElementById("email");
    let phoneNumberElement = document.getElementById("phone-number");

    let previewRoomSize = document.getElementById("preview-room-size");
    let previewTimeSlot = document.getElementById("preview-time-slot");
    let previewFullName = document.getElementById("preview-full-name");
    let previewEmail = document.getElementById("preview-email");
    let previewPhoneNumber = document.getElementById("preview-phone-number");

    let previewContainer = document.getElementById("preview");
    let confirmation = document.getElementById("confirmation");

    let addBtnElement = document.getElementById("book-btn");
    addBtnElement.addEventListener("click", onAdd);

    function onAdd(e) {
        e.preventDefault();

        if (roomSizeElement.value == "" || timeSlotElement.value == "" || fullNameElement.value == "" || emailElement.value == "" || phoneNumberElement.value == "") {
            return;
        }

        previewRoomSize.textContent = roomSizeElement.value;
        previewTimeSlot.textContent = timeSlotElement.value;
        previewFullName.textContent = fullNameElement.value;
        previewEmail.textContent = emailElement.value;
        previewPhoneNumber.textContent = phoneNumberElement.value;

        previewContainer.style.display = 'block';
        addBtnElement.disabled = true;

        roomSizeElement.value = "";
        timeSlotElement.value = "";
        fullNameElement.value = "";
        emailElement.value = "";
        phoneNumberElement.value = "";
    }

    let editBtnElement = document.getElementById("edit-btn");
    editBtnElement.addEventListener("click", onEdit);

    function onEdit() {
        roomSizeElement.value = previewRoomSize.textContent;
        timeSlotElement.value = previewTimeSlot.textContent;
        fullNameElement.value = previewFullName.textContent;
        emailElement.value = previewEmail.textContent;
        phoneNumberElement.value = previewPhoneNumber.textContent;

        previewContainer.style.display = 'none';
        addBtnElement.disabled = false;
    }

    let confirmBookingBtnElement = document.getElementById("confirm-btn");
    confirmBookingBtnElement.addEventListener("click", onBuy);

    function onBuy() {
        confirmation.style.display = 'block';
    }

    let bookAnotherRoomBtnElement = document.getElementById("back-btn");
    bookAnotherRoomBtnElement.addEventListener("click", onBack);

    function onBack() {
        confirmation.style.display = 'none';
        previewContainer.style.display = 'none';
    }
}
