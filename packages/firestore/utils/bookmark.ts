import * as faker from "faker"
import * as firebase from "@firebase/testing"

export default function(overwrite?) {
  return {
    url: faker.internet.url(),
    bodyHtml: faker.lorem.text(),
    bodyText: faker.lorem.text(),
    title: faker.lorem.sentence(),
    comment: faker.lorem.paragraph(),
    createdAt: firebase.firestore.Timestamp.now(),
    updatedAt: firebase.firestore.Timestamp.now()
  }
}
