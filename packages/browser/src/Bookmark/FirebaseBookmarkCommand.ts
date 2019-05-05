import { injectable, inject } from "inversify";
import { BookmarkCommand, Bookmark, BookmarkId } from "@bkmk/core";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { symbols } from "../Firebase/index";
import omit from "lodash.omit";

const documentKey = "bookmarks";
@injectable()
export class FirebaseBookmarkCommand implements BookmarkCommand {
  public store: firebase.firestore.Firestore;
  constructor(@inject(symbols.firestore) store: firebase.firestore.Firestore) {
    this.store = store;
  }

  async create(bookmark: Bookmark) {
    this.store.collection(documentKey).add(bookmark);
  }

  async update(bookmark: Bookmark) {
    this.store
      .collection(documentKey)
      .doc(bookmark.id)
      .update(omit(bookmark, ["id"]));
  }
  async delete(bookmarkId: BookmarkId) {
    this.store
      .collection(documentKey)
      .doc(bookmarkId)
      .delete();
  }
}
