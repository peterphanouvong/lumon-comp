# Kinde Auth Competition - NextJS

This is a NextJS integration competition with [KindeAuth](https://kinde.com/docs/sdks/nextjs-sdk).  
To win the competition you have to integrate this app with KindeAuth and log in with a migrated user in the fastest time.

## Configure the app

1. Environment variables: rename `.env_sample` to `.env` and change the client ID and client secret to match the App keys on the [Backend app details page](https://lumon.kinde.com/admin/cx/_:nav&m:application_details::_:submenu&s:details&id:3c9eb86e66144335b2d31479d6930b68).

```
// .env_sample (rename to .env)

KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_ISSUER_URL=https://lumon.kinde.com
KINDE_CLIENT_ID=your_client_id
KINDE_CLIENT_SECRET=your_client_secret
```

2. Set up Kinde Auth endpoints

```
// pages/api/auth/[...kindeAuth]

import {handleAuth} from "@kinde-oss/kinde-auth-nextjs";

export default handleAuth();
```

## Integrate with your app

1. Wrap the App in a KindeProvider

```
// pages/_app.js

import {KindeProvider} from "@kinde-oss/kinde-auth-nextjs";

function MyApp({Component, pageProps}) {
    return (
        <KindeProvider>
            <Component {...pageProps} />
        </KindeProvider>
    );
}

export default MyApp;
```

2. Check if authenticated: use the useKindeAuth hook to check if the current user is authenticated or if the data is loading.

```
// pages/index.js

import {useKindeAuth} from "@kinde-oss/kinde-auth-nextjs";
...

const {isAuthenticated, isLoading} = useKindeAuth();
```

3. Link to the login endpoint

```
// components/LoggedIn.jsx

...

<Link className="btn btn-dark" href="/api/auth/login">
  SVRD ACCESS
</Link>

...
```

> 💡 Now if you click the link you should be able taken to the Lumon login page.

## Enable Google Auth

Go to `Settings`>`Applications`>`Backend app`>`Authentication` to enable Google Auth (don't forget to press save).

> 💡 Now you should be able to see the "Continue with Google" button on the login page.

## Migrate Users

Go to `Users`>`Add users`>`Import users`>`Custom` and select the `lumon_characters.csv` file to migrate users across.

> 💡 Now you should be able to see the users listed on the Users page.

## Get SVRD access!

Finally, log into the Lumon app with one of the following accounts:
| Email | Password |
| -------------------- | --------- |
| employee_1@lumon.com | severance |
| employee_2@lumon.com | severance |
| employee_3@lumon.com | severance |
| employee_4@lumon.com | severance |
