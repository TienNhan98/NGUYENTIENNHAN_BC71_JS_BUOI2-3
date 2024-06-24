function tTB() {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;
  var so5 = document.getElementById("so5").value * 1;
  //   xữ lý
  var tinhTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  //   hiển thị
  document.getElementById(
    "result"
  ).innerHTML = ` Kết Quả Trung Bình: ${tinhTrungBinh}`;
}
