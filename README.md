![Alt Wiser](https://wearewiser.com/assets/images/wiser-logo/wiser-purple.svg)

# Frontend Developer Test

## About This Test

This test is for a frontend developer position with Wiser. This will test your knowlege of the Angular framework, API usage, programming practices, written skills, and TDD and code coverage. Fork this test to provide solutions. When complete, create a merge request into master and email engineering@wearewiser.com to let us know!

Please commit your code regularly. There is no time limit, though we will be looking at the commit metrics. We will be looking for DRY code and good coding practices with high code coverage. Update the README to explain the code-base.

## The Test

### Outcome Goals

The following table describes what we will be looking for in the test (_Table 1_). You should feel familiar with each of the following.

| Skill                  | Description                                                                            |
| :--------------------- | :------------------------------------------------------------------------------------- |
| Component pages        | Components used to generate pages node in child/parent page tree.                      |
| Component partials     | Components used to generage partials.                                                  |
| Shared services        | The service's dependency injection scope hierarchy.                                    |
| Routing                | Routing using the RouterModule.                                                        |
| Routing guards         | Superset of service classes used to manage routing events.                             |
| Lazy loading           | Loading module bundles when a targeted path is hit.                                    |
| Application modules    | Modules used to define a group of related view components that are loaded as a bundle. |
| Shared modules         | Modules used to define a group of related shared services, pipes, components, ect.     |
| HttpClient             | Module for making Http calls (AJAX) from the application.                              |
| Angular Forms          | Angular forms module for handling data binding across form elements.                   |
| Angular Animations     | Angular animation framework for coordinating animation events on triggers.             |
| RxJS/async data        | Handling async data elegantly (error handling, cleaned up subscriptions, ect. ).       |
| Structured directories | File and directory organization.                                                       |
| Coding practices       | Make use of _best practices_ (code reusability, readability, ect).                     |
| Unit testing           | Unit testing with `npm run test`.                                                      |
| Code coverage          | 100% code coverage with `npm run coverage`.                                            |
| Written skills         | A README and descriptive function / variable naming.                                   |

> _**Table 1**_
>
> Outcome Goals - Goals we wish to see you demonstrate throughout the course of your test.

### Project Outline

You will be makeing an authenticated application. The application will require at least three pages (_Table 2_). There will be some restrictions below on the functionallity of the authentication pieces, however, you are free to make your own design choices regarding these pages, and you are free to add any content you wish in the secure page(s).

| Page   | Route        | Description                                                                                                 |
| :----- | :----------- | :---------------------------------------------------------------------------------------------------------- |
| Login  | /auth/login  | Must play an animation on a failed login attempt. Redirect to `/secure` on success.                         |
| Logout | /auth/logout | Once accessed, the session is purged of any state and the user is redirected to `/auth/login` after 1500ms. |
| Secure | /secure/**   | Must be authenticated. Should be able to access on refresh. Free to make own content/design choices.        |

> _**Table 2**_
>
> Required pages to be implemented.

The authentication pages and the secure page(s) will live in two distinct application modules. These two modules will be required to be loaded using lazy loading. They should not require any code from any of the other modules - that is, the authentication module should not require code from the secure module or the _AppModule_, and the secure module should not require any code from the authentication module or the _AppModule_. Only a select number of files in the AppModule should be edited in order to complete this task, and no logic should change within these select files - no other files should be edited outside from the modules you will be defining (_List 1_).

- navbar.component.ts
- navbar.component.spec.ts
- environment.ts
- environment.prod.ts
- app.component.spec.ts
- app.module.ts
- README.md

> _**List 1**_
>
> Existing files may be modified.

Please note that we will require that a notification animation play on a failed login attempt - this must be choreographed with Angular animations framework. Finally, the secure route must be guarded against access using an authentication guard; the guard must be used to determine the validity of the access token each time a secure page is accessed _**HINT**: Access tokens expire, so always verify them against the API_.

You have been provided with an API to which you will make requests against (_Table 3_). This API provides single user authentication functionallity, using basic authentication. You are provided with the credentials necessary to authenticate (_Table 4_). You can test these authentication credentials using bash (_Figure 1_).

| Endpoint | Route                                          | Description                                                                                          | cURL                                                                                      |
| :------: | :--------------------------------------------- | :--------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------- |
| Ping     | https://dev-test-service.madebywiser.com/ping  | Probably useless for this project. Can be used for sanity during development.                        | `curl -X GET https://dev-test-service.madebywiser.com/ping`                               |
| Login    | https://dev-test-service.madebywiser.com/login | Will return an plaintext access token on successful basic authentication.                            | `curl -X GET https://dev-test-service.madebywiser.com/login -u <username>:<password>`     |
| Me       | https://dev-test-service.madebywiser.com/me    | Will return a `{username: string, expires: number}` object on JWT authentication with a valid token. | `curl -X GET https://dev-test-service.madebywiser.com/me -H 'Authorization: JWT <token>'` |

> _**Table 3**_
>
> Available API for authentication.

|          |            |
| :------: | :--------: |
| username | _wiserdev_ |
| password | _password_ |


> _**Table 4**_
>
> Authentication credentials.

```bash
curl -X GET https://dev-test-service.madebywiser.com/login -u wiserdev:password
```

> _**Figure 1**_
>
> Testing credentials against the API using cURL.

Finally, note that we will be running automated testing against the code base (_List 2_). Please ensure that your code passes all these tests.

- `npm run lint`
- `npm run test -- --browser=PhantomJS --watch=false`
- `npm run coverage`
- `npm run build -- --prod --aot`

> _**List 2**_
>
> Quality assurance scripts that will be run by continuous integration.

### Bonus Points

Below is a list of ideas that can earn you bonus points - feel free to be creative, as this is not a comprehensive list (_List 3_).

- Inactivity timeout with redirect to `/auth/logout`
- Multiple well thought out child pages to `/secure`.
- PWA feature support
- Additional animations or creative design

> _**List 3**_
>
> Bonus point ideas.

Please note that the core requirements are far more important than any possible bonus points. Please spend your time ensuring you've met the outcome goals before embarking on any additiona features.

### Project Demo

A completed demo of the project can be seen [here](https://demo.madebywiser.com). You can use the credentials outline above to authenticate (_Table 4_).

### Submission

Firstly, please ensure you have a well structured README.md file that explains your project. Please ensure that you have followed all the instructions, and that all the quality assurance tests pass (_List 2_).

Once you are ready to submit your code, open a merge request from your forked repository back into the [source repo](https://github.com/wearewiser/frontend-dev-test) on the _master_ branch. You can see the automated CI testing [here](https://travis-ci.org/wearewiser/frontend-dev-test/pull_requests). Finally, send us an email at engineering@wearewiser.com to let us know about the awesome thing you built!

_Have fun!_
