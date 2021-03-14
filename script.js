function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");
   const close = document.getElementById('mySidenav')
    if(close.style.width === '250px'){
        close.style.width = "0px";
    }else{
          close.style.width = "250px";
    }
}

