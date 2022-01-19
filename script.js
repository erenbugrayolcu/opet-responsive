   firstTab = document.getElementById('first-tab');
   secondTab = document.getElementById('second-tab');
   giris = document.getElementById('giris-text-1');
   giris2 = document.getElementById('giris-text-2');
   kayit = document.getElementById('kayit-text-1');
   kayit2 = document.getElementById('kayit-text-2');
   girisIcerik = document.getElementById('giris-content');
   kayitIcerik = document.getElementById('kayit-content');
   otobilim = document.getElementById('otobilim');
   footer = document.getElementById('footer');
   girisBox = document.getElementById('giris-menu');
   kayitBox = document.getElementById('kayit-menu');
   girisButon = document.getElementById('giris-yap-buton')
   uyeButon = document.getElementById('uye-ol-buton')
   opetGirisText = document.getElementById('opet-giris-text')
   girisPlaceholder = document.getElementById('gsm')
   opetUyeText = document.getElementById('opet-uye-text')
   opetUyeText2 = document.getElementById('opet-uye-text2')
   verify = document.getElementById('verification')


function tab1(){
  secondTab.style.borderBottom = "none"
  firstTab.style.borderBottom = "4px solid #134fae"

  giris.style.color = "#134fae";
  giris2.style.color = "#134fae";
  kayit.style.color = "#8a9ab4";
  kayit2.style.color = "#8a9ab4";
  girisIcerik.style.display = "flex";
  kayitIcerik.style.display = "none";
  otobilim.style.display = "flex";
  footer.style.marginTop = "-5px";
  girisBox.style.display = "flex"
}

function tab2(){
  firstTab.style.borderBottom = "none"
  secondTab.style.borderBottom = "4px solid #134fae"

  giris.style.color = "#8a9ab4";
  giris2.style.color = "#8a9ab4";
  kayit.style.color = "#134fae";
  kayit2.style.color = "#134fae";
  girisIcerik.style.display = "none";
  kayitIcerik.style.display = "block";
  otobilim.style.display = "none";
  footer.style.marginTop = "1420px";
}

function girisYap(){
  girisButon.innerHTML = "Doğrula"
  girisButon.style.fontSize = "14px"
  opetGirisText.innerHTML = "SMS olarak gelen şifreyi girerek bilgilerinizi doğrulayın."
  gsm.placeholder = "SMS Şifresi"
  opetUyeText.style.display = "none"
  opetUyeText2.style.display = "none"
  uyeButon.style.display = "none"
  gsm.value = "";
  verify.style.display = "flex"
  kayitBox.style.display = "none"
}
