const btnCheck = document.getElementById("check-btn");
const btnClean = document.getElementById("clear-btn");
const txtInput = document.getElementById("user-input");
const txtOutput = document.getElementById("results-div");
const arrOfValid = [
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^\d{3}\d{3}\d{4}$/,
    /^\d{3}-\d{3}-\d{4}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/
]


btnCheck.addEventListener("click", () => {
    let bIsValid = false;
    if (!txtInput.value) {
        alert("Please provide a phone number");
    } else if (txtInput.value) {
        let sInput = "";
        sInput = txtInput.value;
        console.log(sInput);

        for (let i = 0; i < arrOfValid.length; i++) {
            if (!bIsValid) {
                console.log(arrOfValid[i])
                if (arrOfValid[i].test(sInput)) {
                    bIsValid = true
                }
            }
        }
        /*
                sInput = sInput.replaceAll(" ", "").replaceAll("-", "").replaceAll(")", "").replaceAll("(", "")
        
                if (sInput.length != 10 && (sInput.length != 11 || sInput.charAt(0) != 1)) {
                    bIsValid = false;
                }
        */
        if (bIsValid) {
            txtOutput.textContent = `Valid US number: ${txtInput.value}`
        } else {
            txtOutput.textContent = `Invalid US number: ${txtInput.value}`
        }

    }

})

btnClean.addEventListener("click", () => {
    txtOutput.textContent = ""
})