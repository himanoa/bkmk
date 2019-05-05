export type BookmarkId = string;
export interface Bookmark {
  id: BookmarkId;
  title: string;
  bodyHtml: string;
  bodyText: string;
  authorId: string;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
