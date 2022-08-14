# bugsquashers-edu-app

<img align="left" src="./download.jpeg" width="400px">

some text aligned to the right of the image

<br clear="left"/>

and some text that is below the image (without an obnoxious number of <br /> tags).

Source Code Repository Details:

The source code repository can be found here:
https://github.com/Ali-Jahankah/bugsquashers-edu-app
The source codes consist of two folders:
● client - which contains source codes for the Graphical User Interface (GUI) of the
app
● server - which contains source codes for the API to the database

Deployment Instructions:

Database:
The app requires a PostgreSQL database, which needs to be configured prior to running the
app. The database.sql file, which contains scripts to create the database tables, can be
found in server/database.sql within the source code.
Environment Variables
Once the database is configured, an environment variable needs to be defined prior to the
starting of the app, which will be used by the app to connect to the database, for example:

REACT_APP_DATABASE_URL=postgres://{user}:{password}@{hostname}:{po
rt}/{database-name}

It is also possible to change the location of the attachments uploaded into the app. This can
be done by defining the following environment variable:

REACT_APP_UPLOAD_PATH=/path/to/upload/

By default, the upload path is set to ./uploads/ (relative to the location of the app)

Building and Running the Application
The application consists of the front-end, which consists of the GUI (Graphical User
Interface) of the app and the back-end, which consists of the API to connect to the database.

Front-End
The front-end part of the app needs to be built by running the following command on the
client folder within the source code:
npm run build
The command will create the build folder, which can be deployed into the web server.
Once the contents of the build folder are deployed in the web server, the app can be run
with these commands:
// install dependencies
npm install
npm start

Back-End
The back-end part of the app can be found in the server folder within the source code. This
folder can be directly deployed into the web server. The following commands should be run
to start the back-end application.
// install dependencies
npm install
// run the app
npm run dev

Log into the App
The app has the following users, which can be used to log into the dashboards:
Teacher dashboard:
Email: ali@yahoo.com
Password: 11111111
Student dashboard:
Email: shadi@yahoo.com
Password: 11111111

Known Defects
The following features were incomplete due to lack of time and they require further
development:
● Updating students profile
● Updating lessons
● Deletion of lessons, including the lesson documents
● Deletion of modules

Future Enhancements
● Allow teachers to create questions and expected answers for each lesson
● Advance through a progression system allowing students to access higher level
educational resources
● Play educational games
● Earn credits to redeem items by completing lessons or playing games
● Multi-language support
