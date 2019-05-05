import { Bookmark, BookmarkId } from "./Bookmark"
import { AuthUser } from "../Auth/AuthUser"

export abstract class BookmarkQuery {
  public abstract resolve(id: BookmarkId): Promise<Bookmark>;
  public abstract list(user: AuthUser): Promise<Bookmark[]>;
}

export default BookmarkQuery
