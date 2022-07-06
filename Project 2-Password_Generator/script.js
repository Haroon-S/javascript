const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log(characters.length)
let password_1 = ""
let password_2 = ""

let genrate_pass_btn = document.getElementById("genrate-password-btn") 
let pass_1_btn = document.getElementById("pass-1-btn") 
let pass_2_btn = document.getElementById("pass-2-btn") 
let input_password = document.getElementById("input-password")

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
        for(let x = 0; x<15; x++)
        {
            let passKeys_1 = Math.floor(Math.random()*91)
            let passKeys_2 = Math.floor(Math.random()*91)
            password_1 = pass_1 += characters[passKeys_1]
            password_2 = pass_2 += characters[passKeys_2]
        }
        pass_1_btn.textContent = password_1
        pass_2_btn.textContent = password_2
    }

    function selectPassword1() {
        input_password.value = password_1
    }
    function selectPassword2() {
        input_password.value = password_2
    }


