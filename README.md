# Blueprint UI

## Production
I did not host this UI anywhere in production. It does retrive questions from the Heroku hosted API but the UI must be run locally.

## Running locally

### Prerequisites
Nodejs v14.18.1 - I'm sure this will run on other versions of node but this is what I had installed.


Install dependenceis and stat the server
```
npm install

npm run start
```

## Description of the problem and solution
The problem addressed by this application is to take information provided by the API and present it to the end user in a useful way. Given the time constraints on implementation I opted to use off-the shelf components which would help me deliver a solution quickly - while leaving the solution open to customization. Specifically I generated a starter app using `create-react-app` as a starting point. I used Bulma as a CSS framework to quickly and easily structure information on the page. Long term I would think more about how best to present info to users but this was a starting place.

## Reasoning behind your technical choices
I prefer a separate front and backend as the presentation and data processing have different concerns and it eases the development, CI/CD, testing, etc. if the two are kept separate. It also means that your frontend can be packaged and distributed efficiently via a CDN. I chose react and bulma to be able to iterate quickly.

## Describe how you would deploy this as a true production app on the platform of your choice:
### How would ensure the application is highly available and performs well?
A React SPA can easily be compiled and deployed to a CDN designed for making sure your application can be efficiently distributed to users.

As of now there are little to no assets (images, CSS, etc.) for this application but I would monitor the size of assets over time. Those things can become bloated if not monitored and impact performance of the application.

### How would you secure it?
- Enforce use of SSL on the domain where it is hosted
- Add authentication and authorization to the application

### What would you add to make it easier to troubleshoot problems while it is running live?
- Exception tracking: I've used things like Sentry, Bugsnag, etc. in the past.
- User analytics: While not errors per se, I would keep an eye on how users are actually using the application. Unusual patterns in usage could indicate that a user is having a problem - even if there is no exception raised.

### Trade-offs you might have made, anything you left out, or what you might do differently if you were to spend additional time on the project
I did not end up delivering the responses to the API endpoint to get the recommended assessments. This would requiring passing the response data from the ScreenerForm component back up to the App component. I worried that this would take too much time and would require some refactoring of App.js to prevent it from becoming bloated with concerns that should likely be handled by a separate class and/or child component. I think if I rushed it then the code would have been poorly organized and difficult to read/maintain.

TESTS!
In a real work scenario I'm adamant about writing tests. Given more time I would have added unit tests and some light integration test to my components. 

### Link to other code you're particularly proud of
*Lurn*
I've not touched this in a while but started a machine learning library for Ruby, similar to scikit klearn.
https://github.com/dansbits/lurn


### Link to your resume or public profile
https://github.com/dansbits

Please send these deliverables over at least 48 hours in advance of your scheduled interview time so we can review and come prepared with questions! If we don't receive your submission, we may opt to cancel or reschedule the interview so we can be sure we're using your and our time effectively