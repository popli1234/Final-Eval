function processForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // (1) Prompt the name
    alert(Your name is ${name});

    // (2) Check if phone number contains 10 digits
    if (phone.length !== 10) {
        displayResult("Your number is invalid");
        return;
    }

    // (3) Check if the email contains specific domains
    const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
    let isValidDomain = false;

    for (const domain of allowedDomains) {
        if (email.includes(domain)) {
            isValidDomain = true;
            break;
        }
    }

// If email contains an allowed domain, prompt for official mail ID
if (isValidDomain) {
    displayResult("Please enter your official mail id");
    return;
}

// (4) Replace the text in the banner
displayResult(Thank you ${name} for sharing your details. We will reach out to you on your mail id: ${email});
}

function displayResult(message) {
const resultDiv = document.getElementById("result");
resultDiv.innerHTML = message;
}