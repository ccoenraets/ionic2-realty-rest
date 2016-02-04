## IonicRealty: Ionic 2 Sample App with REST services

### Deploying and Running on Heroku

1. Make sure you are logged in to the [Heroku Dashboard](https://dashboard.heroku.com)

1. Click the Button below to deploy the application on Heroku.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

Your own instance of the application is automatically deployed.


### Deploying and Running Locally

1. Install the the latest beta version of the Ionic CLI:
    ```
    npm install -g ionic@beta
    ```

    or 

    ```
    sudo npm install -g ionic@beta
    ```
    
1. Clone this repository

1. Navigate to the ionic2-realty-rest directory

1. Install the dependencies
    ```
    npm install
    ```
    
1. Start the server
    ```
    node server
    ```

1. Open another command prompt and type the following command to build the app and start it in the browser:
    ```
    ionic serve
    ```