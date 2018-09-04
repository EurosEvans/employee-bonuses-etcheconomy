function saveTen(){
  var xhttp = new XMLHttpRequest();
  
  xhttp.open("POST", "/api/save_number", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("data=" + 10);

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.satus ==200){
       var data = JSON.parse(this.response);
       console.log(data);
    }
  };
}
