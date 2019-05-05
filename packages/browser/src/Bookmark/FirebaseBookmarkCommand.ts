import { injectable, inject } from "inversify";
import { BookmarkCommand, Bookmark } from "@bkmk/core";
import * as firebase from "firebase/app";
import "firebase/firestore";

const documentKey = "bookmarks";
@injectable()
export class FirebaseBookmarkCommand implements BookmarkCommand {
  constructor(public store: firebase.firestore.Firestore) {}

  async create(bookmark: Bookmark) {
    this.store.collection(documentKey).add(bookmark);
  }

  async update(bookmark: Bookmark) {
    this.store.collection(documentKey).doc(bookmark.id).update(bookmark);
  }
  delete();
}
