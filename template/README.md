# React Web App with Firebase, Hosting

This project was intended as a starter for react web with firebase. 

## 1. Change Firebase Configuration
> Copy config from [Download Firebase config file or object](https://support.google.com/firebase/answer/7015592)

Change ./src/firebaseConfig.js
Change ./firebaserc

## 2. Install NPM packages
```bash
npm install --g firebase-tools
npm install --save firebase reactfire
```
## 3. Login and init
```bash
firebase login
firebase init
```

## 4. Create a document in Cloud Firestore

> If your project doesn't have a Cloud Firestore database instance yet, check out [these instructions](https://firebase.google.com/docs/firestore/quickstart#create) to create a new instance. Please initialize it in _locked mode_.

1. Go to the _Database_ tab in the [Firebase console](https://console.firebase.google.com).

1. Add a document.

   1. In the _Data_ tab of the console, click _Add Collection_

   1. Name the collection **_tryreactfire_**
   1. Add a document with ID **_burrito_** and boolean field `yummy: true`

   ![new document screenshot](https://firebasestorage.googleapis.com/v0/b/rxfire-525a3.appspot.com/o/docs%2FScreen%20Shot%202019-07-03%20at%202.19.11%20PM.png?alt=media&token=052d27ea-5db1-4a02-aad0-a3f017c1a975)

1. Add security rules to allow access to your burrito document.

   1. In the _Rules_ tab of the console, add the following security rules:

   ```text
   rules_version = '2';
   service cloud.firestore {
      match /databases/{database}/documents {
        match /tryreactfire/burrito {
          allow read, write: if true;
        }
      }
    }
   ```

   2. _Publish_ the rules.

## 4. Deploy
```bash
firebase deploy
```
or
```bash
npm run deploy
```

## Guides/Sources
https://www.geeksforgeeks.org/how-to-deploy-react-project-on-firebase/
https://github.com/FirebaseExtended/reactfire/blob/main/docs/quickstart.md/