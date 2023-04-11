const otpFields = document.querySelectorAll(".otp-field");
otpFields.forEach((otpField, idx) => {
    otpField.addEventListener("keyup", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            otpFields[idx].value = e.key;
            if (idx + 1 < otpFields.length) {
                otpFields[idx + 1].focus();
            }
        } else if (e.key === "Backspace") {
            if (idx - 1 >= 0) {
                otpFields[idx - 1].focus();
            }
        }
    });

    otpField.addEventListener("keydown", (e) => {
        if (e.key >= 0 && e.key <= 9) {
            otpFields[idx].value = "";
        }
    });
});