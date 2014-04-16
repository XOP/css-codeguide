JS Codeguide
============

> In addition to [Google styleguide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml) and more

## Comments!

*Stage 1 comment*

		//
		// STAGE 1 COMMENT
		//

*Stage 2 comment*

		//
		// stage 2 comment
		
		document.write(code);

*Stage 3 comments*

		// stage 3 comment
		document.write(code);
		
		// multiline stage 3 comment
		// here's line two
		document.write(moreCode);

		/*
		* block comment
		* another line
		* and another line
		* */

*Stage 4 comment*

		document.write(code); // stage 1 comment

*Delimiters*

		// =====================================================================

*JS doc*

Just [Use it](http://usejsdoc.org/) already!

## Code guide

*Naming couple of variables*

	var myVar = 'foo';
	var myFoo = 'bar';

*Naming stack of variables*

		var
			
			  variable = 'string'
			, longVariableName = 'other string'
			//, commentedVariable = 'foobar'
			, isParamEnabled = true
		
			, someArray = [ 'aaa', 'bbb', 'ccc'	]
			, longArray = [
				'aaaAAA',
				'bbbBBB',
				'cccCCC'
			]
		
			, someObject = {
				key1 : value1,
				key2 : value2
			}
		
			, myKlass = 'myCssKlass'
			, myId = 'myCssId'
		
			, mySelector = '.' + myKlass
			, mySelector = '.myCssKlass'
			, mySpecialSelector = '.stableKlass'
		
			, myJqueryObject = $(mySelector)
			, myChildJqueryObject = myJqueryObject.find(mySpecialSelector)
		
			, myObject = {}
			, myJqueryWrapper = $(myObject)
		
			, myEvent = 'mouseover'
			, myState = '__active'
		
			;
		
		var specialVariable = 'superFooBar';
		var anotherSpecial = 'dooperFooBar';

## jQuery in action

*Organizing event delegation*

		myJqueryObject.on('click' + ' ' + myEvent, mySelector, function(e){
			e.preventDefault();
		
			var
				_this = $(this)
				, parent = _this.parent()
				, target = _this.find('.ac')
				;
		
			// your code
		
		});

*Multiple handling*

		myJqueryObject
			.on('click', '.myCssKlass', function(e){
				e.preventDefault();
				// your code
			})
			.on(myEvent, mySelector, function(e){
				e.preventDefault();
				// your code
			})
			;

*Multiple listening*

		myJqueryObject.on({
			click : function(){
				// your code
			},
			'mouseover mousemove' : function(){
				// your code
			}
		});

### Chaining

		// good :)
		myJqueryObject.find(mySelector).remove();
		
		// NOT good :(
		myJqueryObject.find(mySelector).replaceWith(myJqueryWrapper).end().addClass(myState);
		
		// good! :)
		myJqueryObject
			.find(mySelector).replaceWith(myJqueryWrapper)
			.end().addClass(myState);

-----

Feel free to ask questions via [email](mailto:wdybih@gmail.com).  
All content is available for free distribution.  
[Link to source](https://github.com/XOP/css-codeguide) is mandatory when copying materials.