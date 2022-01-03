# VIB Oman Web

Front-end SPA for VIB Oman - an online store for Gaming PCs, peripherals and esports community in Oman. This repository contains the code for the front-end web application

## Overview

* This project contains the code for VIB Oman's Single Page Application.
* The web app consumes VIB Oman API, which is also an [open source project](https://github.com/talal-najam/vib-oman-core).
* The front-end is built using ReactJS.
* The project uses Material UI and styled-components for UI, and Redux for state management

---

To run this project locally:
* Clone the repoistory on to your computer
* Copy the .env.example to create a new .env file as below

```bash
$ cp .env.example .env
```

In the same project directory, you can run:

```bash
# install dependencies
$ npm install   
```

Once packages are installed, start the development server in watch mode:

```bash
# watch mode
$ npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000). Any changes to the web app will be reflected automatically.

```bash
# production build
$ npm run build
```
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
