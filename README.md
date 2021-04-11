# 🔐 Rand Pass

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4776edea5a664de0afc508fe2221b778)](https://app.codacy.com/manual/hebertcisco/randpass_2?utm_source=github.com&utm_medium=referral&utm_content=hebertcisco/randpass&utm_campaign=Badge_Grade_Dashboard)

> #### [Download APK V1.03](https://github.com/hebertcisco/randpass/releases/download/v1.3/randpass-f8730b38189d45649e588b5eac61260f-signed.apk)

Password generator made with React Native.


<p align="center">Gostou o projeto? Por favor considere <a href="https://github.com/hebertcisco/hebertcisco/blob/main/.github/patreon.md">ser um apoiador</a> e receba brindes exclusivos!
 </p>
 
 
## User Stories

-   [x] The user can select the password length.
-   [x] User can generate a password by clicking on a button after choosing the password length.
-   [x] After generating the password, the user can copy to the transfer area.
-   [x] The user can choose the type of password, whether it is numeric, with strings or with characters.
-   [x] User can select one or multiple of the following: `Include uppercase letters`, `Include lowercase letters`, `Include numbers`, `Include symbols`

## Bonus features

-   [x] Use can see the password strength

## Useful links and resources

-   [App Ideas - Password Generator
    ](https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Password-Generator.md)

## Development environment

If you are new to mobile development, the easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator.

#### Remeber:

> Add `google-services.json` to root path, You can achieve this by creating a new project in firebase.


Assuming that you have [**Node 12 LTS**](https://nodejs.org/en/download/) or greater installed, you can use npm to install the Expo CLI command line utility:

```sh
npm install -g expo-cli
```

This will start a development server for you.

```sh
git clone https://github.com/tecnobert/randpass

cd randpass

npm install

npm start # you can also use: expo start
```

## Running the application 🚚

Install the [**Expo client**](https://expo.io/) app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the Camera app.

<figure>
<img height='200px' alt='Expo Link' src='.github/images/expo-link-randpass.png'/>
</figure>

> ###### QR Code generated with: [QRCC](https://qrcc.now.sh/)

## App subscription 🗝️

Android requires that all APKs be digitally signed with a certificate before they are installed on a device or updated. If you use Android App Bundles, you only need to subscribe to your app bundle before submitting it to the Play Console. The Google Play app subscription takes care of the rest. However, you can also subscribe to your app manually for upload to Google Play and other app stores. Visit the link below to learn how to sign your app:
[App subscription](https://developer.android.com/studio/publish/app-signing)

## Building your application 📦

Run `expo build:android` or to web `expo build:web` or `expo build:ios` to apple. If you don't already have a packager running for this project, expo will start one for you.

### Android

If you choose to let Expo generate a keystore for you, we strongly recommend that you later run `expo fetch:android:keystore` and backup your keystore to a safe location. Once you submit an app to the Google Play Store, all future updates to that app must be signed with the same keystore to be accepted by Google.

If, for any reason, you delete your project or clear your credentials in the future, you will not be able to submit any updates to your app if you have not backed up your keystore.

### iOS

If you choose to build for iOS
You can build standalone apps for iOS with two different types, an archive (`expo build:ios -t archive`) or simulator (expo `build:ios -t simulator`) build. With the simulator build, you can test your standalone app on a simulator. If you want to publish your app to the store or distribute it with tools like TestFlight, you have to use the archive.

When building for iOS, you are given a choice of letting the Expo client create the necessary credentials for you, while still having a chance to provide your own overrides. Your Apple ID and password are used locally and never saved on Expo's servers.
