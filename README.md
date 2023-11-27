# Continuous Integration, Deployment & Delivery

## Contents
- [Learning Objectives](#learning-objectives)
- [Introduction](#introduction)
    - [Continuous Integration (CI)](#continuous-integration-ci)
    - [Continuous Deployment (CD)](#continuous-deployment-cd)
    - [Continuous Delivery (also CD)](#continuous-delivery-also-cd)
    - [CI Workflow Example](#ci-workflow-example)
- [Exercise 1](#exercise-1)
- [Exercise 2](#exercise-2)

## Learning Objectives

- Explain the differences between integration, deployment and delivery during automated workflows
- Use a continuous workflow to deploy an application

## Introduction

Continuous automation is the process of taking code written by a developer and performing some automated task with it in order to remove the manual bottleneck that comes with testing and/or deploying a piece of software.

There are 3 flavours of automation:

1. Continuous Integration
2. Continuous Deployment
3. Continuous Delivery

The approach used largely depends on the team needs, with Continuous Delivery & Integration being the most common.

## Continuous Integration (CI)

You've been doing this on the Boolean course already! CI is the process of taking a developer's code and automatically running tests on it. If you check your previous pull requests, your latest commits should have either a green check mark or a red X attached.

This is continuous integration - your code is cloned into an automated service, which then installs all of the packages defined in your `package.json` file and runs any tests included in the project. If all tests pass, you get a green check - if even one fails, you get a red X.

![](./_assets/continuous-integration.PNG)

This process helps the dev team to know if merging a feature into the `main` branch is likely to cause issues.

## Continuous Deployment (CD)

Like CI, continuous deployment automates the testing of your commits. CD will introduce another automated step after testing - deployment! With CD, your code changes will automatically be published to the live application if all of the tests are passing.

![](./_assets/continuous-deployment.PNG)

As you can probably imagine, this comes with a bit of a trade-off. It removes the need for any human interaction, stream-lining the process, but it can also open up the possibility of high priority bugs making their way into your live app.

## Continuous Delivery (also CD)

Continuous delivery is usually the method referenced when somebody says "CD". It's almost exactly the same as Continuous Deployment, except we introduce a manual step before a deployment happens. This allows us to stream-line _most_ of the deployment process, but requires a real human to press a button that triggers the automated deployment. With this approach, we can have a manual tester check that the app has no bugs before the deployment happens.

![](./_assets/continuous-delivery.PNG)

## CI Workflow Example

In a github repo, we use YAML files to configure CI/CD workflows. There's a file in the `.github/workflows` directory named [example.yml](./.github/workflows/example.yml). You'll find some comments in there that will help you digest what each line is doing.

That workflow will run every time the `main` branch gets pushed to, or a pull request is opened that wants to merge into the main branch. [Here's an example PR to demonstrate this in action](https://github.com/boolean-uk/continuous-automation/pull/1).

## Exercise 1

**Fork this repository!**

In the root directory of this project you'll find [example.js](./example.js) and [example.test.js](./example.test.js) files. Right now, the test is failing. This is intentional - you'll fix it later. Your task:

1. Create a new `.yml` file in the `.github/workflows` directory, name it something like `test.yml`
2. Using the `example.yml` file as a reference, have your workflow run the `npm ci` command to install node packages
3. Have your workflow run the `npm test` command
4. Commit and push your work. If you visit your github repo after a couple of minutes, you should see a red X on your commit history. This is because the test in `example.test.js` is broken
5. Verify that your workflow is running on Pull Requests by checking out a new branch with `git checkout -b nameOfBranch` (replace nameOfBranch with the name of the branch you want to create)
6. Fix the broken test, then commit your changes and push your branch to github using `git push -u origin nameOfBranch` (replace nameOfBranch with the actual name of your branch)
7. Go to your repository in github and create a pull request to the main branch of your repo (not the Boolean UK repo!)
8. You should see a green checkmark on your commit in the pull request

## Exercise 2

Your teacher will demonstrate deploying an app using Netlify before you begin this exercise.

This project also contains a basic React app. You're going to deploy this app using [Netlify](https://www.netlify.com/)!

1. Visit [netlify.com](https://www.netlify.com/) and create an account - they let you do this by connecting to your github account directly. Choose this option.
2. [Deploy a project using Github](https://app.netlify.com/start)
3. When you complete the process, add the URL of your app below:

**YOUR APP URL**: https://
