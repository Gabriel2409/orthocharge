// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // firebase is secured in the backend so its ok to copy frontend config here
  firebaseConfig: {
    apiKey: 'AIzaSyDwhTcveNoFbByDgec3gNT86KkUUBNeTDk',
    authDomain: 'ortho-charge.firebaseapp.com',
    projectId: 'ortho-charge',
    storageBucket: 'ortho-charge.appspot.com',
    messagingSenderId: '583241677425',
    appId: '1:583241677425:web:3a510744b2aff2ed05b9d0',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
