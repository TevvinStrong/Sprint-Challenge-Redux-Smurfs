1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions take actions and route them to reducers basically.    Which figure out what to do with the action that is bening    sent. Then it passes the data up to the store. The store is   the container for all of our data, It holds all of the        global state that we need for our app.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is available to all components in our       application from the redux store. Component state is          manages on a specific react component, but can still be       passed to other components as props if need be.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

- Redux-Thunk is middleware that allows for async abilities     for out application. It allows action-creators to perform     async API calls.
