import { View } from '../../layout/view/view';
import { RichText } from '@/_lib/types/block';
import hljs from 'highlight.js';
import { CODE_BLOCK, CODE_LANGUAGE, CODE_PRE } from './code.css';
import { Txt } from '../../typography/txt/txt';
import { Flex } from '../../layout/flex/flex';
import { getCodeLanguage } from '@/utils/get-code-language';
import { NotionComponentProps } from '@/_lib/types/component-common';

export function Code({ block }: NotionComponentProps<'code'>) {
  const codeHtml = hljs.highlight(block.code.rich_text.map(txt => txt.plain_text).join('\n'), {
    language: block.code.language,
  }).value;
  return (
    <View as="div" styleVariant={CODE_BLOCK}>
      <Flex justifyContents="spaceBetween" alignItems="center">
        <Txt bold size="XS" styleVariant={CODE_LANGUAGE}>
          {getCodeLanguage(block.code.language)}
        </Txt>
      </Flex>
      <pre className={CODE_PRE} dangerouslySetInnerHTML={{ __html: codeHtml }} />
    </View>
  );
}
