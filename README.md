# React concepts

##### React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

##### React components are JavaScript functions that return markup:

##### The export default keywords specify the main component in the file.

##### JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

### For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings. Usually, a key should be coming from your data, such as a database ID. React uses your keys to know what happened if you later insert, delete, or reorder the items.

### Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: you only need to pass it down. React will call your event handler when the user clicks the button.

### You’ll get two things from useState: the current state (count), and the function that lets you update it (setCount). 

### Isolated states are achieved because React treats each component instance as separate and assigns them their own internal state storage.
### useState calls are scoped to the instance where they are used.
### React maintains state consistency using the order of hooks and the component's position in the JSX tree.