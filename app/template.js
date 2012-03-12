var template_template = function() {
	this.text =	"<!DOCTYPE html>\
				<html lang='en-US'>\
					<meta charset='UTF-8'/>\
					<title>Node Lab</title>\
\
				<table>\
					<tr><td>Awesome:	<td>$0\
					<tr><td>Cool:		<td>$1\
					<tr><td>Groovy:		<td>$2\
					<tr><td>Rad:		<td>$3\
					<tr><td>Gnarly:		<td>$4\
				</table>\
\
				</html>";
}

template_template.prototype.fill = function(i, values) {
	if (i >= values.length)
		return text;

	text.replace("$" + i, values[i]);
	this.fill(i + 1, values);
	return text;
};

var template = new template_template();

module.exports = template;