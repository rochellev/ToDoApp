# To Do App
### Rochelle Crain
<br>

## Description
To Do App is modeled after my favorite to do app, Google Keep. Users can keep track of their tasks.

Visit [rochellecrain.com](https://www.rochellecrain.com/) to see this app in action. I currently have access restricted (worried about excessive charges!), but please feel free to visit my app with these credentials:
  username: user
  password: rochelle

## Development Process
I developed this To Do App to practice my React and AWS skills. To begin I followed this [tutorial](https://upmostly.com/tutorials/build-a-todo-app-in-react-using-hooks) to make a static version of the app using React functional components and hooks. I then deployed it using AWS Amplify with a custom domain name using Amazon Route 53. Now, I am refactoring and developing new features. You can see the app here, [rochellecrain.com](https://www.rochellecrain.com/). 

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

## In Development
* delete button only shows when focused on the item
* completed items moved to bottom of list
* multiple lists

## About Me
[LinkedIn](https://www.linkedin.com/in/rochelle-roberts)


## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Delete "X" Icon made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Draggin Dots Icon made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Drag and drop tutorial https://css-tricks.com/draggin-and-droppin-in-react/

React Sortable HOC https://github.com/clauderic/react-sortable-hoc