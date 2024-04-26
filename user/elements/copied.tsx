'use client';

import { Copy } from 'lucide-react';

import useCopyText from '../hooks/use-copy-text';
import IconButton from './icon-button';

function Copied({ className, email }: { className?: string, email: string }) {
  const { copiedValueType, handleCopyClick, isCopied } =
    useCopyText();

  return (
    <IconButton
      className={className}
      showTooltip={isCopied && copiedValueType === 'email'}
      tooltipText='Copied!'
      onClick={() => handleCopyClick(email, 'email')}
    >
      Copy Email
      <Copy className='text-neutral-300' />
    </IconButton>
  );
}

export default Copied;
