import { injectable, inject } from "inversify";
import { BookmarkQuery, BookmarkId, AuthUser, Bookmark } from "@bkmk/core";
import * as firebase from "firebase/app";
import "firebase/firestore";
import { symbols } from "../Firebase/index";

const documentKey = "bookmarks";
export class NotFoundBookmarkError extends Error {
  constructor() {
    super("Bookmark is not found");
  }
}
@injectable()
export class FirebaseBookmarkQuery implements BookmarkQuery {
  public store: firebase.firestore.Firestore;
  constructor(@inject(symbols.firestore) store: firebase.firestore.Firestore) {
    this.store = store;
  }

  async resolve(id: BookmarkId) {
    const doc = await this.store
      .collection(documentKey)
      .doc(id)
      .get();
    if (doc.exists) {
      const data = doc.data();
      if (data) {
        return {
          id,
          title: data.title,
          bodyHtml: data.bodyHtml,
          bodyText: data.bodyText,
          authorId: data.authorId,
          comment: data.comment,
          createdAt: data.createdAt.toDate(),
          updatedAt: data.updatedAt.toDate()
        };
      } else {
        throw new NotFoundBookmarkError();
      }
    } else {
      throw new NotFoundBookmarkError();
    }
  }
  async list(user: AuthUser) {
    const querySnapshot = await this.store
      .collection(documentKey)
      .where("authorId", "==", user.uid)
      .get();
    let docs: Bookmark[] = [];
    querySnapshot.forEach(doc => {
      const data = doc.data();
      if (data) {
        docs.push({
          id: data.id,
          title: data.title,
          bodyHtml: data.bodyHtml,
          bodyText: data.bodyText,
          authorId: data.authorId,
          comment: data.comment,
          createdAt: data.createdAt.toDate(),
          updatedAt: data.updatedAt.toDate()
        });
      }
    });
    return docs;
  }
}
