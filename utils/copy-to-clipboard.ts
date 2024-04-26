export const copyTextToClipboard = async (text: string) =>
  'clipboard' in navigator
    ? navigator.clipboard.writeText(text)
    : document.execCommand('copy', true, text);
