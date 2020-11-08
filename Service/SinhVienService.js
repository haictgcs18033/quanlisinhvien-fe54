// Lop doi tuong chua cac phuong thuc giao tiep voi backend(api)
var SinhVienService=function(){
    this.layDanhSachSinhVien=function(){
        var promise= axios({
            url: 'http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien',//Backend cung cap
            method: "GET"
        })
        return promise;
    }
this.themSinhVien=function(sv){
    var promise = axios({
        url: 'http://svcy.myclass.vn//api/SinhVienApi/ThemSinhVien', //Api backend cung cap
        method: "POST",//giao thuc backend cung cap
        data: sv  //Du lieu gui di ( luu y : du lieu gui di phai dung format du lieu cua Backend yeu cau)
    });
    return promise;
}
this.xoaSinhVien = function (maSinhVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=` + maSinhVien,
        method: 'DELETE',
    })
    return promise;
}

this.suaSinhVien = function (maSinhVien) {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=' + maSinhVien,
        method: 'GET'
    });
    return promise;
}
this.capNhatSinhVien = function (maSinhVien,svCapNhat) {
    var promise = axios({
        url:'http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien='+maSinhVien,
        method:'PUT',
        data:svCapNhat 
    })
    return promise;
}
}