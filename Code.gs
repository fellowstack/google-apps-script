function doGet() {
  const html = HtmlService.createTemplateFromFile('index');
  return html.evaluate().addMetaTag('viewport', 'width=device-width, initial-scale=1').setTitle('Web App').setFaviconUrl('https://img.icons8.com/windows/452/mandalorian.png') ;
}

function require(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
