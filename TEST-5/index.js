function tinhToan() {
  // nhập giá trị
  var number = document.getElementById("number").value * 1;
  // xữ lý 
  var donVi = number % 10;
  var hangChuc = Math.floor(number / 10);
  var ketQua = donVi + hangChuc;
  //   hiển thị
  document.getElementById(
    "result"
  ).innerHTML = ` Kết Quả Tổng 2 Ký Số: ${ketQua}`;
}
