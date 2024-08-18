let name1 = document.querySelector("#name")
let surname = document.querySelector("#surname")
let mail = document.querySelector("#mail")
let phone = document.querySelector("#phone")

let nameError = document.querySelector("#nameError")
let surnameError = document.querySelector("#surnameError")
let mailError = document.querySelector("#mailError")
let phoneError = document.querySelector("#phoneError")
let reg = document.querySelector("#kayit")

function validateEmail(email) {
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    const regex = /^(\+90\s?)?(\d{3})\s?\d{3}\s?\d{4}$/;
    return regex.test(phoneNumber);
}


reg.addEventListener("click",function(){

    if(name1.value.trim()=="")
        {
            nameError.textContent = 'İsim alanı boş bırakılamaz';
             nameError.style.display = 'block';
            } 
            else {
                nameError.style.display = 'none';
            }
        
            if(surname.value.trim()=="")
                {
                    surname.textContent = 'Soyisim alanı boş bırakılamaz';
                     surname.style.display = 'block';
                    } 
                    else {
                        nameError.style.display = 'none';
                    }
                
                    
        
        
            if (!phoneRegex.test(phoneInput.value.trim())) {
                phoneError.textContent = 'Geçerli bir telefon numarası girin';
                phoneError.style.display = 'block';
            } else {
                phoneError.style.display = 'none';
            }
        
            if(!validateEmail.test(mail.value.trim())) {
                mailError.textContent = "Geçerli bir mail adresi girin"
                mailError.style.display = "blocks"
            }   
                else{
                    mailError.style.display = "none";
                }
        
        
})
