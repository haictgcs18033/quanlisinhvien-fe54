// var sv= new SinhVien();
// console.log(sv);
// var sv2 = new SinhVien();
// sv.maSinhVien=2;
// sv.tenSinhVien= " Nguyen Van An ";
// console.log(sv2);

var mangSinhVien = [];
var validate = new Validation();
// Dinh nghia su kien click khi nguoi dung bam nut xac nhan
document.querySelector('#btnXacNhan').onclick = function () {
    // Tao ra  doi tuong sinh vien chua thong tin nguoi dung nhap vao tu giao dien
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    console.log('Sinh vien', sv);
    // Kiem Tra hop le
    // Kiem tra rong
    // var valid = true;
    // .trim(): ham javascript loai bo khoang trong dau va cuoi cua chuoi
    // if(sv.maSinhVien.trim()===''){
    //     // Dom den the loi kiemTraRong-maSinhVien => ghi noi dung loi vao innerHTML
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML='Ma sinh vien khong duoc bo trong !';
    //     valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-maSinhVien').innerHTML='';
    // }
    // if(sv.tenSinhVien.trim()===''){
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML='Ten sinh vien khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-tenSinhVien').innerHTML='';
    // }
    // if(sv.email.trim()===''){
    //     document.querySelector('.kiemTraRong-Email').innerHTML='Email khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-Email').innerHTML='';
    // }
    // if(sv.soDienThoai.trim()===''){
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML='So dien thoai khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-soDienThoai').innerHTML='';
    // }
    // if(sv.diemToan.trim()===''){
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML='So dien thoai khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-diemToan').innerHTML='';
    // }
    // if(sv.diemLy.trim()===''){
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML='So dien thoai khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-diemLy').innerHTML='';
    // }
    // if(sv.diemHoa.trim()===''){
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML='So dien thoai khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-diemHoa').innerHTML='';
    // }
    // if(sv.diemRenLuyen.trim()===''){
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML='So dien thoai khong duoc bo trong !';
    //      valid =false;
    // }else{
    //     document.querySelector('.kiemTraRong-diemRenLuyen').innerHTML='';
    // }
    // // 
    var valid = true;
    // Su dung toan tu & de xe dieu kien cho bien valid neu co truong hop nao sai chuong trinh se dung lai 
    // tranh tinh trang cac phan ben tren deu sai nhung phan ben duoi  dung va chuong trinh van chay 
    // nen cach nay de han che loi này
    valid = validate.kiemTraRong(sv.maSinhVien, 'Ma sinh vien', '.kiemTraRong-maSinhVien') &
        validate.kiemTraRong(sv.tenSinhVien, 'Ten sinh vien', '.kiemTraRong-tenSinhVien') &
        validate.kiemTraRong(sv.email, 'Email', '.kiemTraRong-Email') &
        validate.kiemTraRong(sv.soDienThoai, 'So dien thoai', '.kiemTraRong-soDienThoai') &
        validate.kiemTraRong(sv.diemToan, 'Diem toan', '.kiemTraRong-diemToan') &
        validate.kiemTraRong(sv.diemLy, 'Diem ly', '.kiemTraRong-diemLy') &
        validate.kiemTraRong(sv.diemHoa, 'Diem hoa', '.kiemTraRong-diemHoa') &
        validate.kiemTraRong(sv.diemRenLuyen, 'Diem ren luyen', '.kiemTraRong-diemRenLuyen');
    // Cach khai bao doan code tren theo cach 2
    // valid &= validate.kiemTraRong(sv.maSinhVien, 'Ma sinh vien', '.kiemTraRong-maSinhVien') & 
    // validate.kiemTraRong(sv.tenSinhVien, 'Ten sinh vien', '.kiemTraRong-tenSinhVien')&
    // validate.kiemTraRong(sv.email,'Email','.kiemTraRong-Email')&
    // validate.kiemTraRong(sv.soDienThoai,'So dien thoai','.kiemTraRong-soDienThoai')&
    // validate.kiemTraRong(sv.diemToan,'Diem toan','.kiemTraRong-diemToan')&
    // validate.kiemTraRong(sv.diemLy,'Diem ly','.kiemTraRong-diemLy')&
    // validate.kiemTraRong(sv.diemHoa,'Diem hoa','.kiemTraRong-diemHoa')&
    // validate.kiemTraRong(sv.diemRenLuyen,'Diem ren luyen','.kiemTraRong-diemRenluyen');
    // Xet valid cach 1
    // if (valid === false) {
    //     return;
    // }
    // Xet valid cach 2 chac chan hon cach 1 tranh truong hop gia tri bang 0 chuong trinh bi loi
    // Kiem tra dinh dang du lieu
    // Kiem tra dinh dang email

    valid &= validate.kiemTraEmail(sv.email, 'Email', '.kiemTraDinhDang-Email');
    // Kiem tra dinh dang tenSinhVien
    valid &= validate.kiemTraTatCaKyTu(sv.tenSinhVien, 'Ten Sinh vien', '.kiemTraDinhDang-tenSinhVien');
    // Kiem tra dinh dang so dien thoai
    valid &= validate.kiemTraTatCaLaSo(sv.soDienThoai, 'So dien thoai', '.kiemTraDinhDang-soDienThoai');
    // Kiem tra gia tri
    valid &= validate.kiemTraGiaTri(sv.diemToan, 'Diem toan', '.kiemTraGiaTri-diemToan', 0, 10) &
        validate.kiemTraGiaTri(sv.diemLy, 'Diem Ly', '.kiemTraGiaTri-diemLy', 0, 10) &
        validate.kiemTraGiaTri(sv.diemHoa, 'Diem Hoa', '.kiemTraGiaTri-diemHoa', 0, 10) &
        validate.kiemTraGiaTri(sv.diemRenLuyen, 'Diem Ren Luyen', '.kiemTraGiaTri-diemRenLuyen', 0, 10) &
        validate.kiemTraTatCaLaSo(sv.diemToan, 'Diem toan', '.kiemTraDinhDang-diemToan') &
        validate.kiemTraTatCaLaSo(sv.diemLy, 'Diem Ly', '.kiemTraDinhDang-diemLy') &
        validate.kiemTraTatCaLaSo(sv.diemHoa, 'Diem Hoa', '.kiemTraDinhDang-diemHoa') &
        validate.kiemTraTatCaLaSo(sv.diemRenLuyen, 'Diem Ren Luyen', '.kiemTraDinhDang-diemRenLuyen');
    // Kiem tra do dai 
    valid &= validate.kiemTraDoDaiChuoi(sv.email, 'Email', '.kiemTraDoDaiChuoi-Email', 6, 32);
    valid &= validate.kiemTraDoDaiChuoi(sv.tenSinhVien, 'Ten Sinh Vien', '.kiemTraDoDaiChuoi-tenSinhVien', 6, 50);



    if (!valid) {
        return;
    }
    // Them 1 sinh vien vao mang
    mangSinhVien.push(sv);
    console.log("mang sinh vien", mangSinhVien);
    // Tao bang
    renderTable(mangSinhVien);
    // luu vao local storage
    luuLocalStorage();

    // Cach 1 :

    //  // Tao the tr sinh vien, cu phap tao the : document.createElement('tenThe');
    //     var trSinhVien=document.createElement('tr');

    //  // Tao the td sinh vien
    //     var tdMaSinhVien=document.createElement('td');
    //     tdMaSinhVien.innerHTML=sv.maSinhVien;
    // var tdTenSinhVien=document.createElement('td');
    // tdTenSinhVien.innerHTML=sv.tenSinhVien;
    // var tdEmail=document.createElement('td');
    // tdEmail.innerHTML=sv.email;
    // var tdSoDienThoai=document.createElement('td');
    // tdSoDienThoai.innerHTML=sv.soDienThoai;
    // var tdDiemTrungBinh=document.createElement('td');
    // tdDiemTrungBinh.innerHTML=sv.tinhDiemTrungBinh();
    // var tdXepLoai=document.createElement('td');
    // tdXepLoai.innerHTML=sv.xeploai();
    // // Tạo ra td chức năng
    // var tdChucNang=document.createElement('td');
    // var buttonXoa=document.createElement('button');
    // buttonXoa.innerHTML="Xoa";
    // buttonXoa.className="btn btn-danger";
    // buttonXoa.onclick=function(){
    //     // this : la nut xoa
    //     // this vi tri hien tai la the button => .parentElement la the td=>td.parentElement=>the tr=>.remove() : xoa
    //     this.parentElement.parentElement.remove(); 
    // }
    // // Chen button vao td chuc nang
    // tdChucNang.appendChild(buttonXoa);
    //     // Chen the con vao the cha : theCha.appendChild(theCon)
    //     trSinhVien.appendChild(tdMaSinhVien);
    //     trSinhVien.appendChild(tdTenSinhVien);
    //     trSinhVien.appendChild(tdEmail);
    //     trSinhVien.appendChild(tdSoDienThoai);
    //     trSinhVien.appendChild(tdDiemTrungBinh);
    //     trSinhVien.appendChild(tdXepLoai);
    //     trSinhVien.appendChild(tdChucNang);

    //     // Dom den the tbody => appendChild the tr vao
    //     document.querySelector('#tableSinhVien').appendChild(trSinhVien);
    // }

}


var renderTable = function (arrSV) {
    // Tu mang sinh vien tao ra 1 chuoi html nhieu the tr dua vao vong lap
    var noiDungTable = '';
    for (var index = 0; index < arrSV.length; index++) {
        // Moi lan lap lay ra 1 doi tuong sinh vien
        // tao doi tuong sinhVien va gan gia tri de co the luu tru function trong localStorage
        var sinhVien = arrSV[index];
        // Phai truyen tham so dung voi thu tu tham so trong file SinhVien.js
        var sv = new SinhVien(sinhVien.maSinhVien, sinhVien.tenSinhVien, sinhVien.loaiSinhVien, sinhVien.email, sinhVien.soDienThoai,
            sinhVien.diemToan, sinhVien.diemLy, sinhVien.diemHoa, sinhVien.diemRenLuyen);
        // sv.maSinhVien=sinhVien.maSinhVien;
        // sv.tenSinhVien=sinhVien.tenSinhVien;
        // sv.email=sinhVien.email;
        // sv.soDienThoai=sinhVien.soDienThoai;
        // sv.diemToan=sinhVien.diemToan;
        // sv.diemLy=sinhVien.diemLy;
        // sv.diemHoa=sinhVien.diemHoa;
        // sv.diemRenLuyen=sinhVien.diemRenLuyen;
        // sv.loaiSinhVien=sinhVien.loaiSinhVien;


        // Tao ra 1 chuoi + dồn vao noi dung <tr></tr>
        noiDungTable += `
    <tr>
    <td>${sv.maSinhVien}</td>
    <td>${sv.tenSinhVien}</td>
    <td>${sv.email}</td>
    <td>${sv.soDienThoai}</td>
    <td>${sv.tinhDiemTrungBinh()}</td>
    <td>${sv.xeploai()}</td>
    <td><button class="btn btn-danger" onclick="xoaSinhVien('${sv.maSinhVien}')">Xoa</button></td>
    <td><button class="btn btn-primary" onclick="chinhSua('${sv.maSinhVien}')">Chinh sua</button></td>
    </tr>
  `
    }
    console.log(noiDungTable);
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}
// Cai dat su kien cho nut button xoa 
var xoaSinhVien = function (maSV) {
    // mangSinhVien=[{ma:1,ten:'a'},{ma:2,ten:b},{ma:3,ten:'c'}]
    for (var index = mangSinhVien.length - 1; index >= 0; index--) {
        // Moi lan duyet lay ra 1 doi tuong sinh vien
        var sv = mangSinhVien[index];
        //Lay  ma sinh vien cua tung doi tuong so sanh voi maSV duoc click
        if (sv.maSinhVien === maSV) {
            // splice la ham xoa phan tu cua mang dua vao index
            mangSinhVien.splice(index, 1);
        }
    }
    // Sau khi xoa du lieu trong mang goi ham tao lai table truyen vao mang sinh vien da xoa  phan tu 
    renderTable(mangSinhVien)

}


// Chinh sua thong tin
var chinhSua = function (maSV) {
    // sau khi bam nut chinh sua se khoa lai nhung thu khong  cho  nguoi dung chinh sua
    document.querySelector('#maSinhVien').disabled = true;
    //    Tu ma sinh vien => Tim ra sinh vien trong mangSinhVien
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sv = mangSinhVien[index];
        // So sanh neu maSV truyen vao === voi doi tuong dang duyet => gan nguoc lai len cac control phia tren
        if (maSV === sv.maSinhVien) {
            document.querySelector('#maSinhVien').value = sv.maSinhVien;
            document.querySelector('#tenSinhVien').value = sv.tenSinhVien;
            document.querySelector('#loaiSinhVien').value = sv.loaiSinhVien
            document.querySelector('#email').value = sv.email;
            document.querySelector('#soDienThoai').value = sv.soDienThoai;
            document.querySelector('#diemToan').value = sv.diemToan;
            document.querySelector('#diemLy').value = sv.diemLy;
            document.querySelector('#diemHoa').value = sv.diemHoa;
            document.querySelector('#diemRenLuyen').value = sv.diemRenLuyen;

        }
    }
}
// Viet ham luu tru du lieu xuong may tinh client
var luuLocalStorage = function () {
    // Bien mang sinh vien thanh chuoi
    var sMangSinhVien = JSON.stringify(mangSinhVien);
    // Dem mang sinh vien luu cao localstorage
    localStorage.setItem('mangSinhVien', sMangSinhVien);
}

// Viet phuong thuc lay du lieu tu localstore => khi nguoi dung vua vao trang web
var layMangSinhVienStorage = function () {
    // Kiem tra du lieu co trong localStorage khong
    if (localStorage.getItem('mangSinhVien')) {
        // Lay du lieu duoc luu trong localstorage ra ngoai
        var sMangSinhVien = localStorage.getItem('mangSinhVien');
        // Bien du lieu tu chuoi chuyen ve object javascript gan vao mangSinhVien
        mangSinhVien = JSON.parse(sMangSinhVien);
        // Sau khi lay du lieu ra goi ham tao bang 
        renderTable(mangSinhVien);
    }
}

layMangSinhVienStorage();


// Cap nhat thong tin nguoi dung 
document.querySelector('#btnLuuThongTin').onclick = function () {
    // Lay thong tin nguoi dung sau khi thay doi gan vao doi tuong sinhVien
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    // Tim trong mangSinhVien doi tuong cung ma => cap nhat lai gia tri
    for (var index = 0; index < mangSinhVien.length; index++) {
        var sinhVienCapNhat = mangSinhVien[index];
        // Tim ra sinhVien trong mang co ma = voi ma sv tren giao dien => cap nhat gia tri
        if (sinhVienCapNhat.maSinhVien === sv.maSinhVien) {
            sinhVienCapNhat.maSV = sv.maSinhVien;
            sinhVienCapNhat.tenSinhVien = sv.tenSinhVien;
            sinhVienCapNhat.email = sv.email;
            sinhVienCapNhat.soDienThoai = sv.soDienThoai;
            sinhVienCapNhat.diemToan = sv.diemToan;
            sinhVienCapNhat.diemLy = sv.diemLy;
            sinhVienCapNhat.diemHoa = sv.diemHoa;
            sinhVienCapNhat.diemRenLuyen = sv.diemRenLuyen;
        }
    }
    // Goi ham tao lai bang
    renderTable(mangSinhVien);
    // Goi ham luu vao localstorage
    luuLocalStorage()
    document.querySelector('#maSinhVien').disabled = false;
}