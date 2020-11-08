// console.log(axios);
// Ket noi du lieu backend dua vao thu vien axios
var svService=new SinhVienService();
var layDanhSachSinhVienApi = function () {
  
  var promise=svService.layDanhSachSinhVien();  // Goi den backend lay data
    // Xu li cho truong hop thanh cong
    promise.then(function (result) {
        console.log("Ket qua", result.data);
        // Lay du lieu server tra ve goi ham tao table
        renderTable(result.data);
    });
    // Xu li cho truong hop that bai
    promise.catch(function (error) {
        console.log(error);
    })
}

var renderTable = function (mangSinhVien) {
    var noiDungTable = '';
    for (var i = 0; i < mangSinhVien.length; i++) {
        // Tu du lieu api tao doi tuong luu tru
        var sv = new SinhVien();
        sv.maSinhVien = mangSinhVien[i].maSinhVien;
        sv.tenSinhVien = mangSinhVien[i].tenSinhVien;
        sv.diemToan = mangSinhVien[i].diemToan;
        sv.diemLy = mangSinhVien[i].diemLy;
        sv.diemHoa = mangSinhVien[i].diemHoa;
        sv.diemRenLuyen = mangSinhVien[i].diemRenLuyen;
        sv.loaiSinhVien = mangSinhVien[i].loaiSinhVien;
        sv.email = mangSinhVien[i].email;

        // Tao cac tr chua thong tin sinh vien tuong ung
        noiDungTable += `
                     <tr>
                       <td>${sv.maSinhVien}</td>
                       <td>${sv.tenSinhVien}</td>
                       <td>${sv.email}</td>
                       <td>${sv.tinhDiemTrungBinh()}</td>
                       <td>${sv.xeploai()}</td>
<td>
<button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoa</button>
<button class="btn btn-primary" onclick="suaSinhVien('${sv.maSinhVien}')">Chinh Sua</button>
</td>
                     </tr>

`;
    }
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;

}

layDanhSachSinhVienApi();

//---Chuc nang them sinh vien luu tru vao server thong qua api backend---
document.querySelector('#btnXacNhan').onclick = function () {
    // Lay du lieu tu nguoi dung nhap vao
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.email = document.querySelector('#email').value;
    console.log("sinh vien ", sv);
    //  Dung ajax dua du lieu ve server thong qua api backend cung cap
    // var promise = axios({
    //     url: 'http://svcy.myclass.vn//api/SinhVienApi/ThemSinhVien', //Api backend cung cap
    //     method: "POST",//giao thuc backend cung cap
    //     data: sv //Du lieu gui di (luu y : du lieu gui gi phai dung format du lieu cua backend yeu cau)
    // });
    var promise =svService.themSinhVien(sv);
    // Ham thu thi khi goi Ajax thanh cong 
    promise.then(function (result) {
        console.log(result.data);
        // Goi phuong thuc lay thong tin sinh vien tao lai table moi
        layDanhSachSinhVienApi();
    });
    // Ham thuc thi khi loi xay ra
    promise.catch(function (error) {
        console.log(error.response.data);
    })
}
//  Chuc nang xoa sinh vien server dua vao api backend

var xoaSinhVien=function(maSinhVien){
   var promise= svService.xoaSinhVien(maSinhVien);
//    Ham xu li thanh cong
promise.then(function(result){
    console.log(result.data);
    layDanhSachSinhVienApi();
})
// Ham xu li that bai
promise.catch(function (error) {
    console.log(error.response.data);
})
}

var suaSinhVien=function(maSinhVien){
    // alert(maSinhVien);
    var promise = svService.suaSinhVien(maSinhVien);
    promise.then(function(result){
        var sv=result.data;
        // console.log(result.data);
        // Gan du lieu server tra ve len giao dien nguoi dung nhap thong tin
        document.querySelector('#maSinhVien').value=sv.maSinhVien;
        document.querySelector('#tenSinhVien').value=sv.tenSinhVien;
        document.querySelector('#loaiSinhVien').value=sv.loaiSinhVien;
        document.querySelector('#diemToan').value=sv.diemToan;
        document.querySelector('#diemLy').value=sv.diemLy;
        document.querySelector('#diemHoa').value=sv.diemHoa;
        document.querySelector('#diemRenLuyen').value=sv.diemRenLuyen;
document.querySelector('#email').value=sv.email;

    });
    promise.catch(function(error){
        console.log(error.response.data);
    })
}

// Chuc nang luu thong tin sinh vien server dua vao api back end cung cap
document.querySelector('#btnLuuThongTin').onclick=function(){
    // Lay du lieu tu nguoi dung nhap dua vao doi tuong theo format du lieu cua backend yeu cau
    // Cach Khai bao bao tri code
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.email = document.querySelector('#email').value;
    // Goi ajax dua du lieu ve server cap nhat
var promise = svService.capNhatSinhVien(sv.maSinhVien,sv)
promise.then(function(result){
    console.log(result.data);
    layDanhSachSinhVienApi();
});
promise.catch(function(error){
    console.log(error.response.data);
});
// Cach khai bao thong thuong
  // var sinhVienCapNhat = {
    //     "maSinhVien": document.querySelector('#maSinhVien').value,
    //     "tenSinhVien": ,
    //     "loaiSinhVien":,
    //     "diemToan": ,
    //     "diemLy": ,
    //     "diemHoa": ,
    //     "diemRenLuyen": ,
    //     "email": 
    // }
}