let btn = document.querySelector(".get-text");
btn.addEventListener('click', () =>{
    var xhr = new XMLHttpRequest;

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);
            document.querySelector(".text-field").innerHTML = this.response;
        }
    }
     
    xhr.open('GET','content/demo.txt', true);
    xhr.send();
})
