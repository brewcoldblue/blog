import { useId } from 'react';
import { View } from '../../layout/view/view';
import { Txt } from '../../typography/txt/txt';
import { BASE, INNER } from './bookmark.css';
import type { NotionComponentProps } from '@/_lib/types/component-common';
import type { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { NotionImg } from '../image/notion-img';
import Image from 'next/image';
import { Heading_3 } from '../headings/heading_3';
import { Heading } from '../../typography/heading/heading';
import { Flex } from '../../layout/flex/flex';
import { Spacing } from '../../layout/spacing/spacing';

export function Bookmark({ block }: NotionComponentProps<'bookmark'>) {
  //TODO: unfurl 패키지 적용해 클라이언트에서 북마크 미리보기 생성
  const id = useId();
  const og = block.bookmarkInfo.open_graph;
  const icon = block.bookmarkInfo.favicon;
  return (
    <View styleVariant={BASE}>
      <a href={block.bookmark.url} target="_blank">
        <Flex as="div" styleVariant={INNER} flexDirection="column" justifyContents="center" alignItems="flexStart">
          <Heading color="gray" as="h3" size="L">
            {block.bookmarkInfo.title}
          </Heading>
          <Spacing size="0.15rem" />
          {og.url && (
            <Flex justifyContents="flexStart">
              {icon && (
                <i
                  style={{
                    width: '0.85rem',
                    height: '0.85rem',
                    backgroundImage: `url('${icon}')`,
                    backgroundSize: '0.85rem',
                    backgroundRepeat: 'no-repeat',
                    display: 'inline',
                    marginRight: '0.35rem',
                  }}
                />
              )}
              <Txt as="span" size="XS" color="gray">
                {og.url}
              </Txt>
            </Flex>
          )}
          {og.description && (
            <Txt color="gray" size="XS">
              {og.description}
            </Txt>
          )}

          {block.bookmark.caption.map((txt: RichTextItemResponse) => (
            <Txt color="gray" key={id} as="p" richText={txt} />
          ))}
        </Flex>
      </a>
    </View>
  );
}
