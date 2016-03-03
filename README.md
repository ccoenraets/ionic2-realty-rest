## IonicRealty: Ionic 2 Sample App with REST services

Watch the video [here](https://youtu.be/oKHrh_PMHns).

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
    ```
    git clone https://github.com/ccoenraets/ionic2-realty-rest
    ```

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
    
### Resources
    
More information is available in this blog post: [Angular 2 and Ionic 2 Data Services - Part 2: Using REST Services](http://coenraets.org/blog/2016/02/angular2-ionic2-rest-services/)
    
Additional Resources:

- A version of the same application implemented with mock data services is also available. Read this blog post for  details: [Angular 2 and Ionic 2 Data Services - Part 1: Promises and Observables](http://coenraets.org/blog/2016/02/angular2-ionic2-data-services-promises-observables/)  

- A version of the same application with a Salesforce backend is also available. Read this blog post for details: [Building Customer-Facing Mobile Apps with Angular 2, Ionic 2, and Salesforce](http://coenraets.org/blog/2016/02/angular2-ionic2-salesforce/)      