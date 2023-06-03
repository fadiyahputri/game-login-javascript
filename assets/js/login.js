function login() {
    var user = document.getElementById("username");
    var user2 = document.getElementById("username").value;
    var pw = document.getElementById("password");
    var pw2 = document.getElementById("password").value;
    var userSalah = document.getElementById("userSalah");
    var userIsi = document.getElementById("userIsi");
    var pwSalah = document.getElementById("pwSalah");
    var pwIsi = document.getElementById("pwIsi");


    //Jika Username & Password Kosong
    if(document.getElementById("username").value.length < 1 && document.getElementById("password").value.length < 1) {
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("userIsi").style.display = "block";
        document.getElementById("pwIsi").style.display = "block";
    //Jika Username Kosong
    }else if(document.getElementById("username").value.length < 1) {
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("userIsi").style.display = "block";
    //Jika Password Kosong
    }else if(document.getElementById("password").value.length < 1) {
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("pwIsi").style.display = "block";
    //Jika Username & Password tidak sama data ini menampilkan User & Pw Salah
    }else if(user2 != "Padiyaa" && pw2 != "pad") {
        user.style.border = '1px solid red';
        pw.style.border = '1px solid red';
        userSalah.style.display = 'block';
        pwSalah.style.display = 'block';
    //Jika Username tidak sama data ini
    }else if(user2 != "user") {
        user.style.border = '1px solid red';
        userSalah.style.display = 'block';
    //Jika Password tidak sama data ini
    }else if(pw2 != "123") {
        pw.style.border = '1px solid red';
        pwSalah.style.display = 'block';
    //Jika Useraname & Password sama akan menampilkan alert
    }else if(user2 == "Padiyaa" && pw2 == "pad") {
        swal({
            title: "Login Success!",
            text: "Hello, Padiyaa you will redirect to the next screen.",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            timer: 2500,
        });
        var time
        time = setTimeout(startGame,5000)
    }
}

//jika username tidak di isi dan salah
function inputanUser(){
    document.getElementById("userSalah").style.display = "none";
    document.getElementById("userIsi").style.display = "none";
    document.getElementById("username").style.border = "1px solid black";
}

//jika password tidak di isi dan salah
function inputanPw(){
    document.getElementById("pwSalah").style.display = "none";
    document.getElementById("pwIsi").style.display = "none";
    document.getElementById("username").style.border = "1px solid black";
}