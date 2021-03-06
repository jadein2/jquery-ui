/*
 * resizable_core.js
 */

(function($) {

module("resizable: core");

/*
test("element types", function() {
	var typeNames = ('p,h1,h2,h3,h4,h5,h6,blockquote,ol,ul,dl,div,form'
		+ ',table,fieldset,address,ins,del,em,strong,q,cite,dfn,abbr'
		+ ',acronym,code,samp,kbd,var,img,object,hr'
		+ ',input,button,label,select,iframe').split(',');

	$.each(typeNames, function(i) {
		var typeName = typeNames[i];
		el = $(document.createElement(typeName)).appendTo('body');
		(typeName == 'table' && el.append("<tr><td>content</td></tr>"));
		el.resizable();
		ok(true, '$("&lt;' + typeName + '/&gt").resizable()');
		el.resizable("destroy");
		el.remove();
	});
});
*/

test("n", function() {
	expect(2);

	var handle = '.ui-resizable-n', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, 0, -50);
	equal( target.height(), 150, "compare height" );

	TestHelpers.resizable.drag(handle, 0, 50);
	equal( target.height(), 100, "compare height" );
});

test("s", function() {
	expect(2);

	var handle = '.ui-resizable-s', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, 0, 50);
	equal( target.height(), 150, "compare height" );

	TestHelpers.resizable.drag(handle, 0, -50);
	equal( target.height(), 100, "compare height" );
});

test("e", function() {
	expect(2);

	var handle = '.ui-resizable-e', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, 50);
	equal( target.width(), 150, "compare width");

	TestHelpers.resizable.drag(handle, -50);
	equal( target.width(), 100, "compare width" );
});

test("w", function() {
	expect(2);

	var handle = '.ui-resizable-w', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, -50);
	equal( target.width(), 150, "compare width" );

	TestHelpers.resizable.drag(handle, 50);
	equal( target.width(), 100, "compare width" );
});

test("ne", function() {
	expect(4);

	var handle = '.ui-resizable-ne', target = $('#resizable1').css({ overflow: 'hidden' }).resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, -50, -50);
	equal( target.width(), 50, "compare width" );
	equal( target.height(), 150, "compare height" );

	TestHelpers.resizable.drag(handle, 50, 50);
	equal( target.width(), 100, "compare width" );
	equal( target.height(), 100, "compare height" );
});

test("se", function() {
	expect(4);

	var handle = '.ui-resizable-se', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, 50, 50);
	equal( target.width(), 150, "compare width" );
	equal( target.height(), 150, "compare height" );

	TestHelpers.resizable.drag(handle, -50, -50);
	equal( target.width(), 100, "compare width" );
	equal( target.height(), 100, "compare height" );
});

test("sw", function() {
	expect(4);

	var handle = '.ui-resizable-sw', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, -50, -50);
	equal( target.width(), 150, "compare width" );
	equal( target.height(), 50, "compare height" );

	TestHelpers.resizable.drag(handle, 50, 50);
	equal( target.width(), 100, "compare width" );
	equal( target.height(), 100, "compare height" );
});

test("nw", function() {
	expect(4);

	var handle = '.ui-resizable-nw', target = $('#resizable1').resizable({ handles: 'all' });

	TestHelpers.resizable.drag(handle, -50, -50);
	equal( target.width(), 150, "compare width" );
	equal( target.height(), 150, "compare height" );

	TestHelpers.resizable.drag(handle, 50, 50);
	equal( target.width(), 100, "compare width" );
	equal( target.height(), 100, "compare height" );
});

})(jQuery);
