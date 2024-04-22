import * as React from 'react';
import { copyTextToClipboard } from '@/utils/copy-to-clipboard';

function useCopyText() {
  const [isCopied, setIsCopied] = React.useState(false);
  const [copiedValueType, setCopiedValueType] = React.useState('');

  const handleCopyClick = async (text: string, type: string) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      const timoutId: any = setTimeout(() => {
        setIsCopied(false);
        clearTimeout(timoutId);
      }, 1500);
    } catch {
      setIsCopied(false);
      alert('Unable to copy!');
    }
  };

  return { isCopied, copiedValueType, handleCopyClick };
}

export default useCopyText;
