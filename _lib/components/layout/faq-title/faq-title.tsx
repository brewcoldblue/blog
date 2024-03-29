import { Heading } from '../../typography/heading/heading';
import { getTitle } from '@/utils/get-title';
import { View } from '../view/view';
import type { GetPageResponse } from '@notionhq/client/build/src/api-endpoints';
import { Txt } from '../../typography/txt/txt';
import { getLastEditedTime } from '@/utils/get-last-edited-time';

import { BASE, TITLE_TEXT_PLACEMENT, TITLE, DATE_GRID_PLACEMENT, DEPTH3_TEXT } from '../post-title/post-title.css';

export function FaqTitle({ ...meta }: GetPageResponse) {
  return (
    <View styleVariant={BASE}>
      <View styleVariant={TITLE_TEXT_PLACEMENT}>
        <Heading as="h1" styleVariant={TITLE}>
          {getTitle(meta)}
        </Heading>
      </View>
      <View styleVariant={DATE_GRID_PLACEMENT}>
        <Txt styleVariant={DEPTH3_TEXT}>{`Last Updated ${getLastEditedTime(meta)}`}</Txt>
      </View>
    </View>
  );
}
