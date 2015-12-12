got gh-page working need index.html in root with relative link to bundle.js
which has to be the production version no t develop webpack


## Testing vs. Calling actions.whatever for dispatching to store.

I just want to remind myself the difference or more what is going on in the Main.js component and the tests with regards to the actions. In order to mutate the Redux state(store) I need to describe them in objects with a type property, which is a sting constant. This action.type is read by the reducer function and them returns the next state. **Testing** is done with the Reduc store API `dispatch()` and passing in the 'mutation description object' returned by the `action`(in actions/game) function I import. This then updates the store and I can do the expecting in the test. However with the React components I bind all the action functions to the `action` property of the props for that component. Done in containers/App.js. I know at top level that connect wraps all these action function in the dispatch() function of the store. That is why I see no `store.dispatch()` in the Main.js component or anywhere in the app folder. 



Need to diable when there has been a marker placed.


