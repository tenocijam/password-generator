
const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbolCharacters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";",".","?","/"]

// HTML elements

const generateBtn = document.querySelector(".generate-passwd")

const pass1Btn = document.querySelector(".password1")
const pass2Btn = document.querySelector(".password2")

const p1CopiedText = document.querySelector(".p1-copied-text")
const p2CopiedText = document.querySelector(".p2-copied-text")


// Function to generate a random password
function generatePassword() {
    const uppercase = document.getElementById("uppercase").checked
    const lowercase = document.getElementById("lowercase").checked
    const numbers = document.getElementById("numbers").checked
    const symbols = document.getElementById("symbols").checked
    
    let newCharacterList = []
    
    // Create new characters list depening on the user requirements
    if (uppercase)
        newCharacterList = [...newCharacterList, ...uppercaseCharacters]
    if (lowercase)
        newCharacterList = [...newCharacterList, ...lowercaseCharacters]
    if (numbers)
        newCharacterList = [...newCharacterList, ...numberCharacters]
    if (symbols)
        newCharacterList = [...newCharacterList, ...symbolCharacters]
        
    // Error handling when no checkbox is selected by the user    
    if (!uppercase && !lowercase && !numbers && !symbols) {
        alert("Please select at least one checkbox.")
        return;
    }
            
    // Hide "copied to clipboard" text paragraph which appear below generated password buttons
    p1CopiedText.style.visibility = "hidden"
    p2CopiedText.style.visibility = "hidden"
    
    const passwordLength = document.getElementById("range").value
    
    let randomIndex1 = 0;
    let randomIndex2 = 0;
    
    password1 = ""
    password2 = ""
    
    for (let i=0; i < passwordLength; i++) {
        // Generating random index number for the array
        randomIndex1 = Math.floor(Math.random() * newCharacterList.length)
        randomIndex2 = Math.floor(Math.random() * newCharacterList.length)
        
        // Storing random characters from the array to password1 and password2 variable
        password1 += newCharacterList[randomIndex1]
        password2 += newCharacterList[randomIndex2]
    }
    
    
    // Change content inside password fields in the DOM
    pass1Btn.innerHTML = password1
    pass2Btn.innerHTML = password2
    
}



// Click Event listeners

generateBtn.addEventListener("click", () => {
    generatePassword();
})

pass1Btn.addEventListener("click", () => {
    const el1 = document.createElement('textarea');
    el1.value = password1;
    el1.setAttribute('readonly', '');
    el1.style.position = 'absolute';
    el1.style.left = '-9999px';
    document.body.appendChild(el1);
    el1.select();
    document.execCommand('copy');
    document.body.removeChild(el1);
    
    p1CopiedText.style.visibility = "visible"
    p2CopiedText.style.visibility = "hidden"
})

pass2Btn.addEventListener("click", () => {
    const el2 = document.createElement('textarea');
    el2.value = password2;
    el2.setAttribute('readonly', '');
    el2.style.position = 'absolute';
    el2.style.left = '-9999px';
    document.body.appendChild(el2);
    el2.select();
    document.execCommand('copy');
    document.body.removeChild(el2);
    
    p1CopiedText.style.visibility = "hidden"
    p2CopiedText.style.visibility = "visible"
})