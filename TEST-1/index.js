function tinhLuong() {
  // input giá trị
  var luongMotNgay = document.getElementById("luongMotNgay").value * 1;

  var soNgayLam = document.getElementById("soNgayLam").value * 1;

  //   var ketQua = document.getElementById("ketQua").value * 1;
  //   xữ lý
  var ketQua = luongMotNgay * soNgayLam;

  //   hiển thị
  //   alert(`Tiền lương nhận được: ${ketQua}`);
  document.getElementById("ketQua").value = `${ketQua.toLocaleString()}`;
}
