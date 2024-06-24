function tinhTien() {
  // khai báo
  var nhapSoTien = document.getElementById("nhapSoTien").value * 1;
  var numBer = 23500;
  //   xữ lý
  var tinhTien = nhapSoTien * numBer;
  //   hiển thị
  document.getElementById(
    "result"
  ).innerHTML = ` Quy đổi ra tiền VNĐ: ${tinhTien.toLocaleString()}`;
}
