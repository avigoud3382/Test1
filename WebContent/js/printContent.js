function printContent(el) {
				var restorepage =document.body.innerHTML;
				var printcontent = document.getElementByID(el).innerHTML;
				document.body.innerHTML = printcontent;
				window.print();
				document.body.innerHTML = restorepage;				
}
