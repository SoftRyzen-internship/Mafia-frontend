import ReactMarkdown from 'react-markdown';

import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

import { fetchPrivacyPolicy } from '@/utils/api/fetchPrivacyPolicy';
import transformMarkdownText from '@/utils/helpers/transformMarkdownText';

export const PrivacyPolicyInfo = async () => {
  const text = await fetchPrivacyPolicy();
  const updateText = transformMarkdownText(text);

  return (
    <>
      <div className={`base md:w-[624px]`}>
        {updateText ? (
          <ReactMarkdown
            remarkPlugins={[remarkGfm as any]}
            rehypePlugins={[rehypeRaw as any]}
          >
            {updateText}
          </ReactMarkdown>
        ) : null}
      </div>
    </>
  );
};
