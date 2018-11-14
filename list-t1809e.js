// 1. Set font size cho tất cả các thẻ li thành 23px;
var theLi = document.getElementsByClassName("li");
for (var i = 0; i< theLi.length; i++){
    theLi[i].style = "font-size: 23px";
}
// 2. Chuyển tất cả các học sinh nữ thành màu hồng.

var hsNu = document.getElementsByClassName("hs-nu");
for (var i = 0; i < hsNu.length; i++){
    hsNu[i].style = "color: pink";
}

// 3. Chuyển tất cả các học sinh nam thành màu xanh.

var hsNam = document.getElementsByClassName("hs-nam");
for (var i = 0; i < hsNam.length; i++){
    hsNam[i].style = "color: green";
}

// 4. Chuyển tên "Đỗ Quốc Vương" thành màu đỏ.

var doquocVuong = document.getElementById("do-quoc-vuong");
    doquocVuong.style = "color: red";

// 5. Chuyển tên tất cả các bạn chưa hiểu rõ thành màu cam.

var chuaHieuro = document.getElementsByClassName("chua-hieu-ro");
for (var i = 0; i < chuaHieuro.length; i++) {
    chuaHieuro[i].style = "color: orange";
}
// 6. Chuyển tên tất cả các bạn đến muộn thành màu tím.

var denMuon = document.querySelectorAll("[title='den-muon']");
for (var i = 0; i < denMuon.length; i++) {
    denMuon[i].style = "color: purple";
}
