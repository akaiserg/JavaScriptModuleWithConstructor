LogModule={

    active:true,

    show:function(value){

        if(this.active){
            var htmlValue = document.createElement("p");
            htmlValue.innerHTML =value;
            document.getElementById("div_log_id").appendChild(htmlValue);
        }

    }

}