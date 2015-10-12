# Getting different instances  by using module pattern.

   Module pattern, one of the most famous design pattern in JS,  gives us a nice way to organize  code and   encapsulate   variables as   'private'.  With this kind of encapsulate   we can structure or organize  the code  similar to a java class or a php class. The problem is  that  normally these modules are global, hence  you can not get different instances of  the same module.


For instance, if we are using a literal object and we try to get two different instances of the object we only get the same object and every time we want to rewrite an attribute we will be  writing it globally.

```
var MyObjectLiteral = {
 
    attribute: 'Default value.',
 
    showInConsoleValue: function () {      
    		console.info(this.attribute);      
    }
    
};
var object1= MyObjectLiteral;
object1.showInConsoleValue(); // Default value.
object1.attribute="New value";
var object2= MyObjectLiteral;
object2.showInConsoleValue();// New value.

```

The common way to get a new instance of an object,  it's by using the operator 'new'.   

```

var ObjectFunction =function () {

	var __attribute='Default value.';
	
	this.showInConsoleValue= function () {      			
    		console.info(__attribute);      
    }
	
	this.setValue= function (newValue) {      
    		__attribute=newValue;
    }

}

object1=  new ObjectFunction();
object1.showInConsoleValue();// Default value.
object1.setValue("New value.");
object2= new ObjectFunction();
object2.showInConsoleValue();// Default value.

```
Inside the function, the methods which are using the word 'this' can be accessed from outside of the scope and the attribute with the word 'var' cannot. So with these two properties you can get a similar behavior  which is well-know in other languages.

Obviously you can't forget to use the word 'new',  because  you'd  be calling   the Window object instead of  the  function's scope.

```
var ObjectFunctionTest= function(){
	console.info(this);
}
console.info(new ObjectFunctionTest());
console.info( ObjectFunctionTest());


```

### A different way to  get an instance  with module pattern


 Revealing Module Pattern is an  useful  variant  of module pattern which  return a literal object where  it's the public access to some methods.

```

var MyModule = ( function(  ) {
  
  var __property="Default value.";
  
  var __setValue= function (newValue) {  
   __property=newValue;
  }
  
  var __showValueInConsole= function () {
    console.info(__property);
  }
  
  return {
    showValueInConsole : __showValueInConsole,
    setValue : __setValue
  };
  
} )( );

MyModule.showValueInConsole();	// Normal way to use it, without setting a variable.

var module1= MyModule;
module1.showValueInConsole();
module1.setValue("New value");
var module2= MyModule;
module2.showValueInConsole();

```
Here the problem is the same, you can't  get different instances  of the same module, but  if instead of returning  a literal object, the module returns a function  you can get  a module  which has two parts,  a dynamic part and a  global part.

```
var ModuleTest = (function () {

    var __numberOfInst=0;
    
    var __showValueInConsole=function(valueToShow){
        console.info(valueToShow);
    };
    
    var __showNumberOfInstance=function(){
        console.info(__numberOfInst)
    };
    
    function constructor(){
       
	    __numberOfInst++;//global
        var  __property="Default value";
        
        this.setValue= function(newValue){
            __property=newValue;
        };
        
        this.showValueInConsole= function(){
          __showValueInConsole(__property);
        };
		
		this.showNumberOfInstance=function(){
			__showNumberOfInstance();		
		};

    }
    // return the constructor
    return constructor;
})();


var m1=  new ModuleTest();
m1.showValueInConsole();
m1.setValue("New value.");
m1.showValueInConsole();
var m2=  new ModuleTest();
m2.showValueInConsole();
m2.setValue("New value2.");
m2.showValueInConsole();
m2.showNumberOfInstance();

```

By using a function  to  be able to use the operator  'new' can  be gotten  different instances  of the same  module.  The important part is to  keep  the dynamic part, or  better said,  all the varibles which  each instance needs to manage inside  of the  function's scope and  the abstract behavior must be defined into the module's scope, because it can be used it by  each instance.

In the code can be found two modules which do the same, but one was built by using a normal function and the other one by using a module which returns a function. Despite doing the same, the structure of these modules are very different.

Finally by using a module pattern which returns a function, you can get a very good structure to organize your modules,  because  it  should be clear   which methods and attributes  have an  abstract  behaviour, because  these are  in the module's scope. The down side is  that you have to pass a lot  of parameters   to  be able to use  these  methods with abstract behaviour.
