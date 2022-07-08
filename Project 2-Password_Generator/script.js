const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#",
    "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

console.log(characters.length)
let password_1 = ""
let password_2 = ""

let genrate_pass_btn = document.getElementById("genrate-password-btn")
let pass_1_btn = document.getElementById("pass-1-btn")
let pass_2_btn = document.getElementById("pass-2-btn")
let input_password = document.getElementById("input-password")
let number_check = document.getElementById("number-check")
let symbol_check = document.getElementById("symbol-check")

// for(let x = 0; x<15; x++)
// {
//     let passKeys_1 = Math.floor(Math.random()*91)
//     let passKeys_2 = Math.floor(Math.random()*91)
//     password_1 += characters[passKeys_1]
//     password_2 += characters[passKeys_2]
// }



function generatePassword() {
    let pass_1 = ""
    let pass_2 = ""

    let test = generatePassKey1()
    for (let x = 0; x < 15; x++) {
        password_1 = pass_1 += generatePassKey1()
        password_2 = pass_2 += generatePassKey2()
        console.log("value entered")
    }
    pass_1_btn.textContent = password_1
    pass_2_btn.textContent = password_2
    pass_1_btn.style.display = "block";
    pass_2_btn.style.display = "block";
}

function generatePassKey1() {
    let passKeys_1
    if (number_check.checked === true && symbol_check.checked === true) {
        passKeys_1 = Math.floor(Math.random() * 91)
        return characters[passKeys_1]
    }
    else if (number_check.checked === false && symbol_check.checked === true) {
        passKeys_1 = Math.floor(Math.random() * 91)
        if (passKeys_1 > 51 && passKeys_1 < 62) {
            return generatePassKey1()
        } else {
            return characters[passKeys_1]
        }
    }
    else if (number_check.checked === true && symbol_check.checked === false) {
        passKeys_1 = Math.floor(Math.random() * 62)
        return characters[passKeys_1]
    }
    else if (number_check.checked === false && symbol_check.checked === false) {
        passKeys_1 = Math.floor(Math.random() * 52)
        return characters[passKeys_1]
    }

}

function generatePassKey2() {
    let passKeys_2
    if (number_check.checked === true && symbol_check.checked === true) {
        passKeys_2 = Math.floor(Math.random() * 91)
        return characters[passKeys_2]
    }
    else if (number_check.checked === false && symbol_check.checked === true) {
        passKeys_2 = Math.floor(Math.random() * 91)
        if (passKeys_2 > 51 && passKeys_2 < 62) {
            console.log(characters[passKeys_2] + " shoud not work")
            return generatePassKey2()
        } else {
            console.log(characters[passKeys_2] + " shoud work")
            keyTest = characters[passKeys_2]
            return characters[passKeys_2]
        }
    }
    else if (number_check.checked === true && symbol_check.checked === false) {
        passKeys_2 = Math.floor(Math.random() * 62)
        return characters[passKeys_2]
    }
    else if (number_check.checked === false && symbol_check.checked === false) {
        passKeys_2 = Math.floor(Math.random() * 52)
        return characters[passKeys_2]
    }

}

function selectPassword1() {
    input_password.value = password_1
    input_password.select();
    input_password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input_password.value);
}
function selectPassword2() {
    input_password.value = password_2
    input_password.select();
    input_password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input_password.value);
}

