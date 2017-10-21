function displayAttr(node) {
	if (node.nodeType === 1) {
		// element node
		if (node.hasAttributes()) {
		  var attrs = node.attributes,
		      aLngth = node.attributes.length;
		  for(var i=0; i<aLngth; i++) {
            if (attrs[i].name === 'href') {
                console.log(attrs[i].value);    
            }
		  } 
		}
	}
}

function DOMComb (oParent, oCallback) {
  if (oParent.hasChildNodes()) {
    for (var oNode = oParent.firstChild; oNode; oNode = oNode.nextSibling) {
      DOMComb(oNode, oCallback);
    }
  }
  oCallback(oParent); // oCallback.call(oParent);
}

var rootEl = document.getElementsByTagName('body')[0];

DOMComb(rootEl, displayAttr);