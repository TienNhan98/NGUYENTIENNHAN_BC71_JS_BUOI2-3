function tinhToan() {
  // gán giá trị
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  //   xữ lý
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  //   hiển thị
  document.getElementById(
    "result"
  ).innerHTML = ` Chu Vi = ${chuVi}, Diện Tích = ${dienTich}.`;
}
