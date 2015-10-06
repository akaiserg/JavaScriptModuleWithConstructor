var Module2 = (function () {


    var __divModuleId;
    var __inputModuleId;
    var __btnShowModuleId;
    var __btnSetModuleId;
    var __value="Default value Module1";


    var loadActions=function(){

        enableFields();
        document.getElementById(__btnShowModuleId).addEventListener('click',function(){
            showValue();
        });
        document.getElementById(__btnSetModuleId).addEventListener('click',function(){
            setValue(document.getElementById(__inputModuleId).value);
        });

    };

    var setValue= function(val){

        __value=val;

    };

    var enableFields=function(){

        document.getElementById(__btnShowModuleId).disabled = false;
        document.getElementById(__btnSetModuleId).disabled = false;
        document.getElementById(__inputModuleId).disabled = false;

    };

    var showValue=function(){

        var htmlValue = document.createElement("p");
        htmlValue.innerHTML ="Value is: "+ __value;
        document.getElementById(__divModuleId).appendChild(htmlValue);

    };


    function constructor(divModuleId,inputModuleId,btnShowModuleId,btnSetModuleId){

        __divModuleId=divModuleId;
        __inputModuleId=inputModuleId;
        __btnShowModuleId=btnShowModuleId;
        __btnSetModuleId=btnSetModuleId;

        this.loadActions= function(){
            loadActions();
        };




    }

    return constructor;
})();