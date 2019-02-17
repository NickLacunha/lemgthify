walk(document.body);

function walk(node) 
{
	// I stole this function from http://is.gd/mwZp7E because the
    // author of Cloud to Butt Plus also stole it from there,
    
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
    v = v.replace(/n/g, "m");
	textNode.nodeValue = v;
}


