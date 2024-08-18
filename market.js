let besyuz = document.querySelector("#besyuz");
let ucyuz = document.querySelector("#ucyuz");
let ikiyuz = document.querySelector("#ikiyuz");
let filtreyok = document.querySelector("#filtre-yok")
let urunler = document.querySelectorAll("p.fiyat-urun"); 
let aksesuar = document.querySelector("#aksesuarlar")
let topSell = document.querySelector("#topSell")
let indirim = document.querySelector("#indirim")
let kasaUrun = document.querySelector("#kasa")
let anakartUrun = document.querySelector("#anakartUrun")
let diger = document.querySelector("#diger")
let kasaAl = document.querySelector("#kasa")
let tumUrunler = document.querySelector("#tumUrun")

urunler.forEach(urun => {
    let fiyat = urun.textContent || urun.innerText;
    let sayiFiyat = parseFloat(fiyat.replace(/[^0-9.-]+/g,""));
    let urunTamam = urun.closest(".urun");

    tumUrunler.addEventListener("click",function(){
        urunTamam.style.display = "block";
    })

    aksesuar.addEventListener("click",function(){
        if(sayiFiyat <= 110) {
            urunTamam.style.display = "block";
        } else {
            urunTamam.style.display = "none";
        }
    })

    topSell.addEventListener("click",function(){
        if(sayiFiyat < 250) {
            urunTamam.style.display = "block";
        } else {
            urunTamam.style.display = "none";
        }
    })

    indirim.addEventListener("click",function(){
        if(sayiFiyat < 200) {
            urunTamam.style.display = "block";
        } else {
            urunTamam.style.display = "none";
        }
    })

    kasaUrun.addEventListener("click",function(){
        kasaAl.style.display = "block"
        urunTamam.style.display = "none"
    })


    besyuz.addEventListener("click",function(){
        if(sayiFiyat < 500) {
            urunTamam.style.display = "block";
        } else {
            urunTamam.style.display = "none";
        }
    });

    ucyuz.addEventListener("click",function(){
        if(sayiFiyat < 300) {
            urunTamam.style.display = "block";
        } else {
            urunTamam.style.display = "none";
        }
    });

    ikiyuz.addEventListener("click",function(){
        if(sayiFiyat < 200) {
            urunTamam.style.display = "block";
        } else {
            urunTamam.style.display = "none";
        }
    });
    filtreyok.addEventListener("click",function(){
        urunTamam.style.display = "block"
    })



    
});


