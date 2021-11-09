const tambah = () => {
  let nilai1 = Number(document.getElementById("nilai1").value);
  let nilai2 = Number(document.getElementById("nilai2").value);
  let hasil = nilai1 + nilai2;
  document.getElementById("output").innerHTML = hasil;
};

const kurang = () => {
  let nilai1 = Number(document.getElementById("nilai1").value);
  let nilai2 = Number(document.getElementById("nilai2").value);
  let hasil = nilai1 - nilai2;
  document.getElementById("output").innerHTML = hasil;
};

const kali = () => {
  let nilai1 = Number(document.getElementById("nilai1").value);
  let nilai2 = Number(document.getElementById("nilai2").value);
  let hasil = nilai1 * nilai2;
  document.getElementById("output").innerHTML = hasil;
};

const bagi = () => {
  let nilai1 = Number(document.getElementById("nilai1").value);
  let nilai2 = Number(document.getElementById("nilai2").value);
  let hasil = nilai1 / nilai2;
  document.getElementById("output").innerHTML = hasil;
};

const even_odd = () => {
  let nilai1 = Number(document.getElementById("nilai1").value);
  let nilai2 = Number(document.getElementById("nilai2").value);

  if (nilai1 % 2) {
    document.getElementById("output1").innerHTML =
      nilai1 + " bilangan genap ? " + false;
  } else {
    document.getElementById("output1").innerHTML =
      nilai1 + " bilangan genap ? " + true;
  }

  if (nilai2 % 2 === 0) {
    document.getElementById("output2").innerHTML =
      nilai2 + "bilangan genap ? " + true;
  } else {
    document.getElementById("output2").innerHTML =
      nilai2 + "bilangan genap ? " + false;
  }
};
