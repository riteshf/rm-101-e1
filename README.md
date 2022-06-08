## Problem

- Create the following APP: [TODO App with Item Count](https://rct-101-e1.herokuapp.com/) using the Provided Boilerplate

## Getting Started

1. Clone/Fork this repository [https://github.com/riteshf/rct-101-e1.git](https://github.com/riteshf/rct-101-e1)
2. navigate to the folder `cd rct-101-e1`
3. npm install
4. npm start

## [Video Explanation](https://masai-course.s3.ap-south-1.amazonaws.com/problem/rct-101/rct-101.e1.mp4)

## Understanding Component Structure

- [App](./src/App.js)
  - [TaskApp](./src/components/TaskApp.jsx)
    - [TaskHeader](./src/components/TaskHeader/TaskHeader.jsx)
    - [AddTask](./src/components/AddTask/AddTask.jsx)
    - [Tasks](./src/components/Tasks/Tasks.jsx)
      - [Task](./src/components/Tasks/Task/Task.jsx)
        - [Counter](./src/components/Tasks/Task/Counter/Counter.jsx)

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Understanding Data Structure

- [tasks.json](./src/data/tasks.json)
  - Initial Tasks to be shown on screen.

**Note** - `Make sure you use only the given data and dont create new data. Changing data might result in giving you zero marks`

## Features to build

1. User should be able to add task from `AddTask` component.
   - User Should not be able to add empty task.
   - User Should not be able to add duplicate tasks.
   - Whenever a new Task is added count value is `1` by default.
2. User Should be able to mark Task as Completed in `Task` component.
3. Every Task should have different internal `Counter` with values.
   **Note** - `Make sure you implelement features one by one and deploy the app correctly`

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-testid="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

#### Submission

- You need to Submit Github Link as well as netify link.
- Make sure you use masai github account provided by MasaiSchool(submit link to root folder of your repository on github).
- Make Sure you have netify account, else you will be getting zero marks as metify takes down your app in few days if your account does not exist.
