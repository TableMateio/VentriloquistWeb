import type * as React from 'react';

interface TableOfContentsProps {
  data?: {
    json?: {
      toc?: TocItem[];
    };
  };
  className?: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
  items?: TocItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  data,
  className,
}) => {
  if (!data?.json?.toc) {
    return null;
  }

  const toc = Array.isArray(data.json.toc) ? data.json.toc : [];

  const renderTocItem = (item: TocItem) => (
    <li key={item.id} className="pl-3">
      <a
        className="line-clamp-3 flex rounded-sm text-foreground text-sm underline decoration-foreground/0 transition-colors hover:decoration-foreground/50"
        href={`#${item.id}`}
      >
        {item.text}
      </a>
      {item.items && item.items.length > 0 && (
        <ol className="flex list-none flex-col gap-2 text-sm">
          {item.items.map(renderTocItem)}
        </ol>
      )}
    </li>
  );

  return (
    <div className={className}>
      <ol className="flex list-none flex-col gap-2 text-sm">
        {toc.map(renderTocItem)}
      </ol>
    </div>
  );
};
