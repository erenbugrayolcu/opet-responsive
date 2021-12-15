  let firstTab = document.getElementById('first-tab');
  let secondTab = document.getElementById('second-tab');
  let giris = document.getElementById('giris-text-1');
  let giris2 = document.getElementById('giris-text-2');
  let kayit = document.getElementById('kayit-text-1');
  let kayit2 = document.getElementById('kayit-text-2');
  let girisIcerik = document.getElementById('giris-content');
  let kayitIcerik = document.getElementById('kayit-content');
  let otobilim = document.getElementById('otobilim');
  let footer = document.getElementById('footer');
  let girisBox = document.getElementById('giris-menu');
  let kayitBox = document.getElementById('kayit-menu');

function tab1(){
  secondTab.style.borderBottom = "none"
  firstTab.style.borderBottom = "4px solid #134fae"

  giris.style.color = "#134fae";
  giris2.style.color = "#134fae";
  kayit.style.color = "#8a9ab4";
  kayit2.style.color = "#8a9ab4";
  girisIcerik.style.display = "block";
  kayitIcerik.style.display = "none";
  otobilim.style.display = "flex";
  footer.style.marginTop = "-20px";
  girisBox.style.display = "flex"
  kayitBox.style.display = "none"
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
  girisBox.style.display = "none"
  kayitBox.style.display = "flex"
}