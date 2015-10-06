/**
 * Module1 which  was built as a function.
 * This modules once  gets  loaded  can show a value  of an internal variable  by pressing a  button
 * and  this same internal variable can be set  by other button.
 * This module receives  the ids of buttons, input and divs as  parameters  at the constructor.
 * @param divModuleId{String} Id of the div where  will be the scope of this module.
 * @param inputModuleId{String} Id of the input  where  a new value can be set.
 * @param btnShowModuleId{String} Id of the button which shows the value of the internal variable.
 * @param btnSetModuleId{String}  Id of the button which takes the value of the "inputModuleId",
 * in order to set the internal variable.
 * @constructor
 */
var Module1 =function (divModuleId,inputModuleId,btnShowModuleId,btnSetModuleId) {

    /**
     * Id of the div where  will be the scope of this module
     * @property __divModuleId
     * @type {String}
     * @private
     */
    var __divModuleId=divModuleId;

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
    var __value="Default value Module1";

    /**
     * Value used  to count  how many time the method __showValue has been called
     * @property  __numberOfCallsMethod
     * @type {Number}
     * @private
     * @default "0"
     */
    var __numberOfCallsMethod=0;

    /**
     *  This method sets how many times the method __showValue has benn called
     * @method __setNumberOfCallsMethod
     * @private
     */
    var __setNumberOfCallsMethod=function(){

        __numberOfCallsMethod=__numberOfCallsMethod+1;
        LogModule.show("<b> Module1: number of times  the method __showValue has been called "+__numberOfCallsMethod+"</b>");

    };

    /**
     *  Loads  all the actions needed to work with the buttons and  inputs
     * @method loadActions
     * @public
     */
    this.loadActions=function(){

        __enableFields();
        document.getElementById(__btnShowModuleId).addEventListener('click',function(){
            __showValue();
        });
        document.getElementById(__btnSetModuleId).addEventListener('click',function(){
            __setValue(document.getElementById(__inputModuleId).value);
        });

    };

    /**
     * Sets a new value to the internal value __value
     * @method __setValue
     * @param val{String} new value gotten
     * @private
     */
    var __setValue= function(val){

        __value=val;
        LogModule.show("Module1: set value "+__value);

    };

    /**
     *  Actives the input and buttons when the module is instantiated
     * @method __enableFields
     * @private
     */
    var __enableFields=function(){

        document.getElementById(__btnShowModuleId).disabled = false;
        document.getElementById(__btnSetModuleId).disabled = false;
        document.getElementById(__inputModuleId).disabled = false;

    };

    /**
     *  Shows the internal value  called __value
     * @method __enableFields
     * @private
     */
    var __showValue=function(){

        var htmlValue = document.createElement("p");
        htmlValue.innerHTML ="Value is: "+ __value;
        document.getElementById(__divModuleId).appendChild(htmlValue);
        LogModule.show("Module1: showed value "+__value);
        __setNumberOfCallsMethod();

    };

};