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
* HTML Web Storage API
* git

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
  * Each ```SortableListItem``` was being created at each render due to the React reconciliation process which discards and replaces components in DOM. This caused the loss of focus because input was removed then added back to the DOM
  * **fix**: Moving the mapping function where each ```SortableListItem``` is instantiated to inside the ```SortableList``` component. Now the ```List``` component returns a single ```SortableList```, passing all the functions as props. This way when a change happens, React will re-render the existing components as expected. Found solution in this [issue](https://github.com/clauderic/react-sortable-hoc/issues/120) thread.
  * Learned more about what causes re-render and the reconciliation process. Also, feel more confident about passing props. I started using this spread syntax ```{...props}``` so I don't have to write out each prop explicitly, very useful! However, React still has some element of magic that I am figuring out.

## In Development
* delete button only shows when focused on the item
* completed items moved to bottom of list

## About Me
[LinkedIn](https://www.linkedin.com/in/rochelle-roberts)


## Credits
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Delete "X" Icon made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Draggin Dots Icon made by <a href="https://smashicons.com/" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Drag and drop tutorial https://css-tricks.com/draggin-and-droppin-in-react/

React Sortable HOC https://github.com/clauderic/react-sortable-hoc