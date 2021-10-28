function gui_thong_tin() {
    if(hoten.value=="" || hoten==null)
            {
                thong_bao.innerHTML="Ban chưa nhập họ tên";
                hoten.focus();
                return false;
            }
            if(dia_chi.value=="" || dia_chi==null)
            {
                thong_bao.innerHTML="Ban chưa nhập địa chỉ";
                dia_chi.focus();
                return false;
            }
            if(phone.value=="" || phone==null)
            {
                thong_bao.innerHTML="Ban chưa nhập sdt";
                phone.focus();
                return false;
            }
            if(nguoi_lon.value=="" || nguoi_lon==null)
            {
                thong_bao.innerHTML="Ban chưa nhập số người";
                nguoi_lon.focus();
                return false;
            }
            if(Tre_em.value=="" || Tre_em==null)
            {
                thong_bao.innerHTML="Ban chưa nhập số người";
                Tre_em.focus();
                return false;
            }
            if(hoten.value!="" && dia_chi.value!="" && phone.value!="")
            {
                thong_bao.innerHTML="Bạn đã đăng kí thành công!!!";
            }
}