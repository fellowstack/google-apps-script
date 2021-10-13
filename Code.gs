function doGet() {
  const html = HtmlService.createTemplateFromFile('index');
  return html.evaluate()
}

function require(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
