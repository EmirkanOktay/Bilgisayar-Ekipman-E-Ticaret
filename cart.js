let button = document.querySelectorAll("a.ekle");
let sepet = document.querySelector("#sepet")


button.forEach(cart => {
    cart.addEventListener("click", function() {
        let urunBilgi = cart.closest(".urun");

        let ad = urunBilgi.querySelector("span").textContent;
        let fiyat = urunBilgi.querySelector("p").textContent;
        let photo = urunBilgi.querySelector("img").getAttribute("src");

        let eklenenUrun = {
            ad: ad,
            fiyat: fiyat,
            photo: photo
        };
        localStorage.setItem("urun_" + ad, JSON.stringify(eklenenUrun));

        let getAd = eklenenUrun.ad
        let getFiyat = eklenenUrun.fiyat
        let getPhoto = eklenenUrun.photo
        
        console.log(getAd)
        console.log(getFiyat)
        console.log(getPhoto)

    });
});

//sepet sistemi eklenecek