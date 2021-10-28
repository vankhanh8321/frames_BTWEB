function gui_thong_tin()
        {
            if(tendn.value=="" || tendn==null)
            {
                chaoban.innerHTML="Ban chưa nhập tên đăng nhập";
                tendn.focus();
                return false;
            }
            if(passwordd.value=="" || passwordd==null)
            {
                chaoban.innerHTML="Ban chưa nhập mật khẩu";
                passwordd.focus();
                return false;
            }
            if(tendn.value!="" && passwordd.value!="")
            {
                chaoban.innerHTML="Chào bạn <b>"+tendn.value +'</b>';
                alert(chaoban.innerHTML="Chào bạn "+tendn.value );
            }
        }