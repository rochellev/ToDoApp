# To Do App
### Rochelle Crain
<br>

## Description
To Do App was created for users to keep track of tasks they need to complete. 

## Development Process
I developed this To Do App to practice my React and AWS skills. To begin I followed this [tutorial](https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks) to make a static version of the app using React functional components and hooks. I then deployed it using AWS Amplify with a custom domain name using Amazon Route 53. Now, I am refactoring to use smaller components and soon I will add other features and connect it to a database. You can see the app here, [rochellecrain.com](https://www.rochellecrain.com/). 

## Technologies Used
* JavaScript
* React
* AWS
* HTML
* CSS
* git

## Bugs/In progress
* storage does only updates after hit enter
   * **fix**: useEffect for adding items to local storage, called whenever todos change so local storage updates after each render
* deleting first item on list crashes app!
* color of link not very visible 
* deleting a todo does not delete in local storage

* the tab label still using default -- change 
* re-orders tasks when refresh page

## About Me, Rochelle Crain
[LinkedIn](https://www.linkedin.com/in/rochelle-roberts)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
