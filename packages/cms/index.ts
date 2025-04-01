// Original import removed
// import { basehub as basehubClient, fragmentOn } from 'basehub';

// Direct client setup without relying on basehub dynamic imports
import { keys } from './keys';

// Define more specific types for our simplified implementation
type QueryObject = Record<string, unknown>;

// Define specific interfaces for our query responses
interface BlogResponse {
  blog: {
    posts: {
      items?: PostMeta[];
      item?: Post;
    };
  };
}

interface LegalPagesResponse {
  legalPages: {
    items?: LegalPost[];
    item?: LegalPost;
  };
}

// Create a client without relying on the basehub package
const basehub = {
  query: async <T>(query: QueryObject): Promise<T> => {
    const token = keys().BASEHUB_TOKEN;
    const response = await fetch('https://api.basehub.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query }),
    });
    const result = await response.json();
    return result.data as T;
  },
};

// Create a simple type-safe fragment helper
const fragment = <T extends string, F extends Record<string, unknown>>(
  type: T,
  fields: F
) => {
  return { __type: type, ...fields };
};

// Add type inference similar to basehub
namespace fragment {
  export type infer<T> = T extends { __type: infer U }
    ? Record<string, unknown>
    : never;
}

/* -------------------------------------------------------------------------------------------------
 * Common Fragments
 * -----------------------------------------------------------------------------------------------*/

const imageFragment = fragment('BlockImage', {
  url: true,
  width: true,
  height: true,
  alt: true,
  blurDataURL: true,
});

/* -------------------------------------------------------------------------------------------------
 * Blog Fragments & Queries
 * -----------------------------------------------------------------------------------------------*/

const postMetaFragment = fragment('PostsItem', {
  _slug: true,
  _title: true,
  authors: {
    _title: true,
    avatar: imageFragment,
    xUrl: true,
  },
  categories: {
    _title: true,
  },
  date: true,
  description: true,
  image: imageFragment,
});

const postFragment = fragment('PostsItem', {
  ...postMetaFragment,
  body: {
    plainText: true,
    json: {
      content: true,
      toc: true,
    },
    readingTime: true,
  },
});

export type PostMeta = fragment.infer<typeof postMetaFragment>;
export type Post = fragment.infer<typeof postFragment>;

export const blog = {
  postsQuery: fragment('Query', {
    blog: {
      posts: {
        items: postMetaFragment,
      },
    },
  }),

  latestPostQuery: fragment('Query', {
    blog: {
      posts: {
        __args: {
          orderBy: '_sys_createdAt__DESC',
        },
        item: postFragment,
      },
    },
  }),

  postQuery: (slug: string) => ({
    blog: {
      posts: {
        __args: {
          filter: {
            _sys_slug: { eq: slug },
          },
        },
        item: postFragment,
      },
    },
  }),

  getPosts: async (): Promise<PostMeta[]> => {
    const data = await basehub.query<BlogResponse>(blog.postsQuery);
    return data.blog.posts.items || [];
  },

  getLatestPost: async () => {
    const data = await basehub.query<BlogResponse>(blog.latestPostQuery);
    return data.blog.posts.item;
  },

  getPost: async (slug: string) => {
    const query = blog.postQuery(slug);
    const data = await basehub.query<BlogResponse>(query);
    return data.blog.posts.item;
  },
};

/* -------------------------------------------------------------------------------------------------
 * Legal Fragments & Queries
 * -----------------------------------------------------------------------------------------------*/

const legalPostMetaFragment = fragment('LegalPagesItem', {
  _slug: true,
  _title: true,
  description: true,
});

const legalPostFragment = fragment('LegalPagesItem', {
  ...legalPostMetaFragment,
  body: {
    plainText: true,
    json: {
      content: true,
      toc: true,
    },
    readingTime: true,
  },
});

export type LegalPostMeta = fragment.infer<typeof legalPostMetaFragment>;
export type LegalPost = fragment.infer<typeof legalPostFragment>;

export const legal = {
  postsQuery: fragment('Query', {
    legalPages: {
      items: legalPostFragment,
    },
  }),

  latestPostQuery: fragment('Query', {
    legalPages: {
      __args: {
        orderBy: '_sys_createdAt__DESC',
      },
      item: legalPostFragment,
    },
  }),

  postQuery: (slug: string) =>
    fragment('Query', {
      legalPages: {
        __args: {
          filter: {
            _sys_slug: { eq: slug },
          },
        },
        item: legalPostFragment,
      },
    }),

  getPosts: async (): Promise<LegalPost[]> => {
    const data = await basehub.query<LegalPagesResponse>(legal.postsQuery);
    return data.legalPages.items || [];
  },

  getLatestPost: async () => {
    const data = await basehub.query<LegalPagesResponse>(legal.latestPostQuery);
    return data.legalPages.item;
  },

  getPost: async (slug: string) => {
    const query = legal.postQuery(slug);
    const data = await basehub.query<LegalPagesResponse>(query);
    return data.legalPages.item;
  },
};
