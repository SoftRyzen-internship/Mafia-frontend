const transformMarkdownText = (text: string | undefined) => {
  if (text) return text?.replace(/\\n/gi, '\n').replace(/\n/gi, '<br/>');
  else return;
};

export default transformMarkdownText;
