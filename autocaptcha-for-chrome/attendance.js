function getDateString(date) {
	var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
	return ("0"+date.getDate()).slice(-2)
			+"-"+
			month[date.getMonth()]
			+"-"+
			date.getFullYear();
}

var dt = document.evaluate( '/html/body/table/tbody/tr/td[2]/table/tbody/tr[3]/td[3]/font', document, null, XPathResult.STRING_TYPE, null);

document.getElementsByName("from_date")[0].value=dt.stringValue;
document.getElementsByName("to_date")[0].value=getDateString(new Date());