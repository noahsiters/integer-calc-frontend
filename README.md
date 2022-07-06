## Setting up & Running
First you will need to clone this project onto your local machine, which can be done with:
```
git clone git@github.com:noahsiters/integer-calc-frontend.git
```
In the project directory, you can run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

You can then enter digits and operators, and then click the equal button to send the request to the backend.

## 'sh react-scripts command not found' error
When running the command `npm start` after cloning the project, you may get an "sh react-scripts command not found" error. If this occurs, you can perform one of the following solutions:
### Solution 1:
Simply run the `npm i react-scripts` commmand. After doing this, you should be able to successfully start the application.
### Solution 2:
Another solution that also works just as well is first deleting the 'package-lock.json' with:
```
rm -rf package-lock.json
```
Then install the dependencies:
```
npm install
```
Either of these solutions should result in a successful running of the application.
## Additional Info
If the back end is not running when clicking the equals sign, you will just get a result of '0'.
This application is sending HTTP requests to [http://localhost:8080](http://localhost:8080).

The project for the back end API that this application is connected to can be found at [github.com/noahsiters/integer-calc-backend](https://github.com/noahsiters/integer-calc-backend)

### About
This application was built using the React JavaScript library.
