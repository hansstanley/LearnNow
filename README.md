# LearnNow

**LearnNow** is a mobile app for reading content, designed to provide a seamless reading experience with a simple authentication module to ensure that your progress is saved and secure.

The app features a user-friendly interface, with a list of contents divided into chapters, each with multiple sections. These sections include both text and images, providing a rich and engaging reading experience.

## Features

### Authentication

![Login and register screens](docs/images/auth.png)

Simple username-and-password based authentication to access the app.

### Chapters and Sections

![Chapters and sections screens](docs/images/chapters_sections.png)

The content from the backend is organised into chapters and sections for easy navigation. Additionally, the last-read section is pinned to the top of the `Chapters` screen, to jump straight back to reading.

Not only does the app remember the last section you read, but it also tracks the exact position in the section you stopped at. This works for all sections, which especially helps those who like to jump back and forth between sections. The overall progress through each chapter is also shown as the number of sections read, with each completed section marked.

Moreover, the read progress is saved to your username, meaning multiple users can use the same app on the same phone and still have their individual progresses right there when they need it.


https://user-images.githubusercontent.com/20805849/227531875-e98b08e9-301c-43d7-857f-c1cb491f1d4a.mp4


### Rich Content

![Text and images](docs/images/content.png)

Every sections can contain both text and images, enhancing the reading experience with more context.

### Profile

![Profile](docs/images/profile.png)

Users can also change their passwords or logout from the `Profile` screen.

## For Developers

### Tech Stack

Frontend (mobile app)
* [React Native](https://github.com/facebook/react-native) framework
* [NativeBase](https://github.com/GeekyAnts/NativeBase) UI component library

Backend
* [Django](https://github.com/django/django) framework

### Getting started with the backend

1. If you wish to use `venv`, activate it using `source path/to/venv/bin/activate`.
2. Ensure Django dependencies are installed.
3. `cd` into `LearnNow/backend`.
4. Start the server with `python manage.py runserver`.

### Getting started with the mobile app

**On an Android simulator**

1. Start the Android virtual device (AVD).
   1. For a list of AVD names, use `emulator -list-avds`.
   2. To start an AVD, use `emulator -avd @avd_name`.
2. `cd` into `LearnNow/mobile`.
3. Ensure the app dependencies are installed.
4. Start Metro with `npx react-native start`.
5. Install and run the app with `npx react-native run-android` in a new terminal window.
   1. To install on a specific devices, use `npx react-native run-android --deviceId=@device_id`.
   2. The list of device IDs can be shown with `adb devices`.

