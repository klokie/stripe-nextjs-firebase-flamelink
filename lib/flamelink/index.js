import { auth, firestore, firebase } from '../firebase'

import flamelink from 'flamelink/app'

// Add additional modules that you want to use
import 'flamelink/content'
import 'flamelink/storage'
// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

const flamelinkApp = flamelink({
  firebaseApp: firebase,
  env: 'production', // optional, defaults to `production`
  locale: 'en-US', // optional, defaults to `en-US`
  dbType: 'cf',
})

export { auth, firestore, firebase, flamelinkApp };
