const categoryCodeLength = 8;

function parse_tree()
{
	var output = '';
	var div = $jq("#TVArbo");
	var children = $jq("table a", div);
	
	output += '\n';
	
	children.each(
		function(rootIdx, header)
		{
			var headerText = header.text;
			
			if (headerText.trim().length == 0)
				return;
				
			var colonIndex = headerText.indexOf(':');
			var codeWithNameSeparatedByDash = headerText.slice(colonIndex + 1, headerText.length).trim();
			
			var indexOfDash = codeWithNameSeparatedByDash.indexOf('-');
			
			var code = codeWithNameSeparatedByDash.slice(0, indexOfDash - 1);
			var name = codeWithNameSeparatedByDash.slice(indexOfDash + 1, headerText.length);
			
			if (code.length < categoryCodeLength - 1)
				fillCodeToNormalLength(code);
			
			output = output + code + '\t' + name + '\n';
		});		
	
	console.log(output);
}

function fillCodeToNormalLength(code)
{	
	for(var i=code.length; i < categoryCodeLength; i++)
		code += '0';
		
	return code;
}

// Due to requirement of plain list we don't need to search tree recursively.

/*function parse_node(node, numberOfTabs)
{
	var children = node.children;

	children.each(
		function(idx,element)
			{
				if (element.tagName.toLowerCase() == 'table')
				{
					var ref = $jq(" > tbody > tr > td > a", element);
					var txt = ref.text;
					
					if (txt.trim())
					{
						output = output + txt + '\n';
					}
				}
				
				if (element.tagName.toLowerCase() == 'div')
				{
					parse_node($jq(element), numberOfTabs + 1);
				}
			});
}*/
