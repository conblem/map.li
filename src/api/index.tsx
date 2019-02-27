import Firebase from "firebase/app";

export class Api {
  constructor(firebase: Promise<typeof Firebase>) {
    console.log("api created");
  }
}
