import { Bookmark, BookmarkId } from "./Bookmark";

export abstract class BookmarkCommand {
  public abstract create(bookmark: Bookmark): Promise<void>;
  public abstract update(bookmark: Bookmark): Promise<void>;
  public abstract delete(bookmarkId: BookmarkId): Promise<void>;
}

export default BookmarkCommand;
