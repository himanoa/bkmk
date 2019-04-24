import * as faker from "faker";
import * as firebase from "@firebase/testing";

interface Bookmark {
  url: string;
  authorId: string;
  bodyHtml: string;
  bodyText: string;
  title: string;
  comment: string;
  createdAt: firebase.firestore.Timestamp;
  updatedAt: firebase.firestore.Timestamp;
}
export default function(authorId: string, overwrite?: Bookmark): Bookmark {
  return {
    ...{
      url: faker.internet.url(),
      authorId,
      bodyHtml: faker.lorem.text(),
      bodyText: faker.lorem.text(),
      title: faker.lorem.sentence(),
      comment: faker.lorem.paragraph(),
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now()
    },
    ...overwrite
  };
}
