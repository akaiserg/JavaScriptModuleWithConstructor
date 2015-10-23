/**
 * Module2 was built in base a module pattern and   a  function  which  does  the work of the constructor.
 * This module once  gets  loaded  can show a value  of an internal variable  by pressing a  button
 * and  this same internal variable can be set  by other button.
 */
var Module2 = (function () {

    /**
     * Value used  to count  how many time the constructor has been called
     * @property  __numberOfInst
     * @type {Number}
     * @private
     * @default "0"
     */
    var __numberOfInst=0;

    /**
     * Value used  to count  how many time the method __showValue has been called
     * @property  __numberOfCallsMethod
     * @type {Number}
     * @private
     * @default "0"
     */
    var __numberOfCallsMethod=0;

    /**
     *  This method sets how many times the constructor was called
     * @method __setNumerOfInst
     * @private
     */
    var __setNumerOfInst=function(){

        __numberOfInst=__numberOfInst+1;
        LogModule.show("<b>Module2: Number of instances Module2 "+__numberOfInst+"</b>");

    };

    /**
     *  This method sets how many times the method __showValue has benn called
     * @method __setNumberOfCallsMethod
     * @private
     */
    var __setNumberOfCallsMethod=function(){

        __numberOfCallsMethod=__numberOfCallsMethod+1;
        LogModule.show("<b>Module2: number of times  the method __showValue has been called "+__numberOfCallsMethod+"</b>");

    };

    /***
     * Actives the input and buttons when the module is instantiated
     * @method __enableFields
     * @param inputModuleId{String} Id of the input  where  a new value can be set.
     * @param btnShowModuleId{String} Id of the button which shows the value of the internal variable.
     * @param btnSetModuleId{String}  Id of the button which takes the value of the "inputModuleId",
     * in order to set the internal variable.
     * @private
     */
    var __enableFields=function(inputModuleId,btnShowModuleId,btnSetModuleId){

        document.getElementById(btnShowModuleId).disabled = false;
        document.getElementById(btnSetModuleId).disabled = false;
        document.getElementById(inputModuleId).disabled = false;

    };

    /**
     *  Shows a value passed as a parameter into a div passed as a parameter as well.
     *  @method __showValue
     * @param divModuleId{String} div where the value will be shown
     * @param value{String } value  which will be  shown
     * @private
     */
    var __showValue=function(divModuleId,value){

        var htmlValue = document.createElement("p");
        htmlValue.innerHTML ="Value is: "+ value;
        document.getElementById(divModuleId).appendChild(htmlValue);
        LogModule.show("Module2 showed value "+value);
        __setNumberOfCallsMethod();


    };

    /**
     * this function will be returned like a constructor
     * Each value passed into the constructor will be unique for each  call or instance
     * @method constructor
     * @param divModuleId{String} Id of the div where  will be the scope of this module.
     * @param inputModuleId{String} Id of the input  where  a new value can be set.
     * @param btnShowModuleId{String} Id of the button which shows the value of the internal variable.
     * @param btnSetModuleId{String}  Id of the button which takes the value of the "inputModuleId",
     * in order to set the internal variable.
     * @constructor
     */
    function constructor(divModuleId,inputModuleId,btnShowModuleId,btnSetModuleId){

        /**
         * Id of the div where  will be the scope of this module
         * @property __divModuleId
         * @type {String}
         * @private
         */
        var  __divModuleId=divModuleId;

        /**
         * Id of the input  where  a new value can be set.
         * @property  __inputModuleId
         * @type {String}
         * @private
         */
        var __inputModuleId=inputModuleId;

        /**
         * Id of the button which shows the value of the internal variable.
         * @property  __btnShowModuleId
         * @type {String}
         * @private
         */
        var __btnShowModuleId=btnShowModuleId;

        /**
         * Id of the button which takes the value of the "inputModuleId" and sets __value
         * @property  __btnSetModuleId
         * @type {String}
         * @private
         */
        var __btnSetModuleId=btnSetModuleId;

        /**
         * Value which  is shown or set  by each instance of this module.
         * @property  __btnSetModuleId
         * @type {String}
         * @private
         * @default "Default value Module1"
         */
        var __value="Defalult value module 2";

        // calls to a global method  to set   how many times the  constructor has been called
        __setNumerOfInst();


        /**
         * Sets a new value to the internal value __value
         * @method __setValue
         * @param val{String} new value gotten
         * @private
         */
        var __setValue= function(val){

            __value=val;
            LogModule.show("Module2 set value "+__value);

        };

        /**
         *  Loads  all the actions needed to work with the buttons and  inputs
         * @method loadActions
         * @public
         */
        this.loadActions= function(){

            __enableFields(__inputModuleId,__btnShowModuleId,__btnSetModuleId);
            document.getElementById(__btnSetModuleId).addEventListener('click',function(){
                __setValue(document.getElementById(__inputModuleId).value);
            });
            document.getElementById(__btnShowModuleId).addEventListener('click',function(){
                __showValue( __divModuleId,__value);
            });

        };

    }
    // return the constructor
    return constructor;
})();
