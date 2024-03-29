import { notion } from './notion-client';
import { notion_env } from '@/env';
import {
  BlockObjectResponse,
  GetBlockResponse,
  GetPageResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  QueryDatabaseParameters,
} from '@notionhq/client/build/src/api-endpoints';
import { PageObject, PostListObject } from '@/_lib/types/notion-response';
import { NotionBlock, NotionBlockWithChildren } from '@/_lib/types/block';

export const getPostList = async (): Promise<PostListObject> => {
  const query: QueryDatabaseParameters = {
    database_id: notion_env.database_id,
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
    filter: {
      and: [
        {
          property: 'published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  };

  const response = await notion.databases.query(query);
  return response.results as PostListObject;
};

const POST_LIST_CACHE: { POSTS: PostListObject; TIMESTAMP: number; CACHE_DURATION: number } = {
  POSTS: [],
  TIMESTAMP: 0,
  CACHE_DURATION: 500,
};

export const getCachedPostList = async () => {
  const now = Date.now();
  if (POST_LIST_CACHE.POSTS.length > 0 && now - POST_LIST_CACHE.TIMESTAMP < POST_LIST_CACHE.CACHE_DURATION) {
    console.log('cache called');
    return POST_LIST_CACHE.POSTS;
  } else {
    const posts = await getPostList();
    console.log('fetch called');
    POST_LIST_CACHE.POSTS = posts || [];
    POST_LIST_CACHE.TIMESTAMP = now;
    return posts;
  }
};

export const getPostMetaData = async (page_id: string): Promise<GetPageResponse> => {
  const result = await notion.pages.retrieve({ page_id });

  return result;
};

export const getPost = async (block_id: string): Promise<(NotionBlock | NotionBlockWithChildren)[]> => {
  let results = [];
  let blocks = await notion.blocks.children.list({
    block_id,
    page_size: 100,
  });
  results = [...blocks.results];
  while (blocks.has_more) {
    block_id = blocks.next_cursor || '';
    blocks = await notion.blocks.children.list({
      block_id,
      page_size: 100,
    });
    results = [...results, ...blocks.results];
  }

  return results as (NotionBlock | NotionBlockWithChildren)[];
};

export const getSingleBlock = async (block_id: string): Promise<GetBlockResponse> =>
  await notion.blocks.retrieve({ block_id });
