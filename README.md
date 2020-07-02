# To Do App
### Rochelle Crain

## Live Web App
Visit [rochellecrain.com](https://www.rochellecrain.com/) to see this app in action!

## Description
This To Do Web App is inspired by my favorite to do app, Google Keep. The goal of this app is to provide a simple task keeping system for users and to further develop my React skills.

## Development Process
To begin I followed this [tutorial](https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks), which produced a simple web app that I could start building on. I deployed this web app using AWS Amplify with a custom domain name through Amazon Route 53.

## Features
* Add, modify, and delete tasks
* Reorder tasks by draging and dropping
* Tasks saved in local storage
* Delete button appears only when hovering over a given task
* Deployed, available to the public: [rochellecrain.com](https://www.rochellecrain.com/)

## Technologies Used
* JavaScript
* React
* AWS
* HTML
* CSS
* HTML Web Storage API
* git
* Jest
* React Testing Library

## Bugs
Since the primary goal for this web app was for me to learn, I have documented some of the bugs I encountered and their solutions. 
* storage does only updates after hit enter
   * **fix**: ```useEffect``` for adding items to local storage, called whenever todos change so local storage updates after each render
* deleting first item on list crashes app!
  * **fix**: added conditional statement for focusing, was trying to focus on the ```[i-1]``` element which is out of bounds for when ```i=0```
* deleting a todo does not delete in local storage
    * **fix**: add code to remove local storage item using the id for the key, had to strigify the id
* after page refresh, the item order is not saved
  * **fix**: refactor data storage, "todoList" is the key for an array of todo item objects. this array is updated in the effect function of todos
* after adding drag and drop wrapper components, the input would only take one key at a time, forcing user to click before each letter typed! -- loss of focus when using input
  * React was unmounting each ```SortableListItem``` instead of re-rendering due to the React reconciliation process. Since the component with the input was unmounted after a state update, it would lose focus. 
  * **fix**: Moving the mapping function where the ```SortableListItem``` components are instantiated to inside the ```SortableList``` component. Now, the ```List``` component returns a single ```SortableList```, and React can resolve virtual DOM changes without needing to unmount and remount the components. 
  * Special thanks to this [issue](https://github.com/clauderic/react-sortable-hoc/issues/120) thread!
  * This bug really helped me understand the React component lifecycle better. It illustrated how the ```diff``` algorithm affects the rendering of components in the real DOM. Also using the spread syntax, ```{...props}```, for passing props is a lot easier because that's one less spot for typos or other errors!
* focus event on one input triggers all -- showing delete icon for every list item
  * event bubbling

## About Me
I am a Software Engineer with a passion for creating apps and actively seeking employment. Check out my [LinkedIn](https://www.linkedin.com/in/rochelle-roberts)!


## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Thanks to this [tutorial](https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks) for giving me a good starting point.

Delete "X" Icon made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Draggin Dots Icon made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

[React Sortable HOC](https://github.com/clauderic/react-sortable-hoc) used to implement the drag and drop feature
