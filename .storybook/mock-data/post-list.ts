import { PageObject } from '@/_lib/types/notion-response';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export const postListMock = {
  object: 'page',
  id: '123',
  created_time: '',
  last_edited_time: '',
  created_by: {},
  last_edited_by: {},
  cover: null,
  icon: null,
  parent: {},
  archived: false,
  properties: {
    ID: {
      id: 'string',
      type: 'unique_id',
      unique_id: {
        prefix: null,
        number: 0,
      },
    },
    date: {
      date: { start: null, end: null, time_zone: null },
    },
    title: {
      title: [
        {
          rich_text: {
            type: 'text',
            text: { content: 'abcd', link: null, type: 'text' },
            plain_text: 'abcd',
            annotations: {
              bold: false,
              italic: false,
              strikethrough: false,
              underline: false,
              code: false,
              color: 'default',
            },
            href: null,
          },
          plain_text: 'abcd',
        },
      ],
    },
    summary: {
      rich_text: [],
    },
    published: true,
    thumbnail: {
      thumbnail: [],
    },
    tags: {
      multi_select: [],
    },
  },
  url: '',
  public_url: null,
} as PageObject;
