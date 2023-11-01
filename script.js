const nama = document.getElementById("username");
const pw = document.getElementById("password");
const submit = document.getElementById("gas");
const register = document.getElementById("reg");
const conpass = document.getElementById("conpassword");
const regpw = document.getElementById("reg-password");
const regnama = document.getElementById("reg-username");
const regDiv = document.querySelector(".register");
const logDiv = document.querySelector(".login");
const masukReg = document.getElementById("masukRegister");
let db = [
  { nama: "yanuar", pw: "esmangga" },
  { nama: "jawir", pw: "esteler" },
  { nama: "yoki", pw: "esjambu" },
];
function swap() {
  regDiv.classList.toggle("hilang");
  logDiv.classList.toggle("hilang");
}
//login
function cari(nama, pass) {
  for (let i = 0; i < db.length; i++) {
    if (nama == db[i].nama && pass == db[i].pw) {
      return alert("Berhasil Masuk");
    } else if (nama == db[i].nama || pass == db[i].pw) {
      return alert("password atau nama salah");
    }
  }
  return alert("Tidak ditemukan silahkan daftar");
}
function isZero(nama, pass) {
  if (nama.length == 0 || pass.length == 0) {
    return true;
  }
  return false;
}

submit.addEventListener("click", function () {
  if (isZero(nama.value, pw.value)) {
    alert("Silahkan di isi");
  }
  cari(nama.value, pw.value);
});
masukReg.addEventListener("click", function () {
  return swap();
});
//register
function tambah(name, pass) {
  for (let i = 0; i < db.length; i++) {
    if (db[i].nama == name) {
      return alert("Akun sudah ada");
    }
  }
  db.push({ nama: name, pw: pass });
  return alert("berhasil ditambahkan");
}

function isSame(pass, conpass) {
  if (pass == conpass) {
    return true;
  }
  return false;
}
register.addEventListener("click", function () {
  if (isSame(regpw.value, conpass.value)) {
    tambah(regnama.value, regpw.value);
    regnama.value = "";
    regpw.value = "";
    conpass.value = "";
    return swap();
  }

  return alert("password tidak sama");
});
