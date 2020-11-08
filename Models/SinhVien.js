// Khai bao lop doi tuong trong javascript class( Prototype)
var SinhVien = function (maSV,tenSV,loaiSV,email,soDienThoai,diemToan,diemLy,diemHoa,diemRenLuyen) {
    this.maSinhVien = maSV;
    this.tenSinhVien = tenSV;
    this.loaiSinhVien = loaiSV;
    this.email = email;
    this.soDienThoai = soDienThoai;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemRenLuyen = diemRenLuyen;
    this.tinhDiemTrungBinh=function(){
        var dtb =(Number(this.diemToan)+Number(this.diemLy)+Number(this.diemHoa))/3;
        return dtb;
    }
    this.xeploai=function(){
        var dtb=this.tinhDiemTrungBinh();
        if(this.diemRenLuyen<5){
            return "Yeu";
        }
      
            else if(dtb<5){
                return "Yeu";
            }else if(dtb>=5 && dtb<6){
                return "Trung Binh";
            }else if(dtb>=6 && dtb<7){
                return "Trung binh kha";
            }else if(dtb>=7 && dtb<8){
                return "Kha";
            }else if(dtb>=8 && dtb<9){
                return "Gioi";
            }else if(dtb>=9 && dtb<=10){
                return "Xuat sac";
            }
        else{
            return "Yeu";
        }
    }
}