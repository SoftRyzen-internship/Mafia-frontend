export function parseTextToHTML(text) {
  const paragraphs = text.split('\n');
  const htmlParagraphs = paragraphs.map(paragraph => {
    if (paragraph) return `<p>${paragraph}</p>`;
    return '<br>';
  });
  const htmlContent = htmlParagraphs.join('\n');

  return htmlContent;
}
