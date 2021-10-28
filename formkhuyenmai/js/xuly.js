function gui_thong_tin() {
    if(hoten.value=="" || hoten==null)
            {
                chaoban.innerHTML="Ban chưa nhập họ tên";
                hoten.focus();
                return false;
            }
            if(address.value=="" || address==null)
            {
                chaoban.innerHTML="Ban chưa nhập địa chỉ";
                address.focus();
                return false;
            }
            if(phone.value=="" || phone==null)
            {
                chaoban.innerHTML="Ban chưa nhập sdt";
                phone.focus();
                return false;
            }
            if(hoten.value!="" && address.value!="" && phone.value!="")
            {
                chaoban.innerHTML="Bạn đã đăng kí thành công!!!";
            }
}