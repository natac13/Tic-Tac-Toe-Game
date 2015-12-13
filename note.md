got gh-page working need index.html in root with relative link to bundle.js
which has to be the production version no t develop webpack


## Testing vs. Calling actions.whatever for dispatching to store.

I just want to remind myself the difference or more what is going on in the Main.js component and the tests with regards to the actions. In order to mutate the Redux state(store) I need to describe them in objects with a type property, which is a sting constant. This action.type is read by the reducer function and them returns the next state. **Testing** is done with the Reduc store API `dispatch()` and passing in the 'mutation description object' returned by the `action`(in actions/game) function I import. This then updates the store and I can do the expecting in the test. However with the React components I bind all the action functions to the `action` property of the props for that component. Done in containers/App.js. I know at top level that connect wraps all these action function in the dispatch() function of the store. That is why I see no `store.dispatch()` in the Main.js component or anywhere in the app folder. 


## Bugs before submitting.

Fix some issues that came to light only after asking for comments from FCC community! 

2 bugs found when starting in the upper left diagonal and the comp will play center. Then user goes to the bottom left corner and the comp will block which creates a possible win for comp which the user then block. This will form a 'T' on it's side.
At this point the computer did not play since `takeOppositeCorner()` was returning 2 possible answers and forming a 'a3c3' square and not choosing one of them. This lead the user to continue play and capture a win. However game play did not stop after the user win. So the comp won as well. 
That second bug was fixed by added a line to the Main.js component so that the `compTurn()` would not happen when there was a found result from `findResult()`.
The first bug got fix by bring `takeOppositeCorner()` inline with `sidesEmpty()` and `cornersEmpty()` with finding the length and getting a random number with lodash to choose one or the other.

I fix the test to handle this case by making sure the square that is used in the action call to dispatch the store, was part of the original game board!


# Bug after submitting

I submitted to FCC but also ask for feedback from the local slack chat channel here in London Ontario. I got two very fast responses that informed me when the user wins the game gets hung up. I didn't even know the user could still win! Lucky one of those people uploaded a video of what happened for him so that I could reproduce and then fix the bug. 

<!-- insert video here -->

So the hung up issue watch easy to fix as line 52 (shown below) that in the `componentDidUpdate()` life cycle function I had the `clearBoard` action being placed on the stack and then the component would update. This is where the infinite loop happened since the component kept updating and placing `clearBoard()` calls on the stack. Removing the `setTimeout()` got everything running smoothly again. However the user still could win!

So looking at the video again I see that if the user has two outter middle adjoining squares then the computer should place a marker in between; in the corner. this is the function I came up with for that. I have a list of 'fork' objects that can be cycled through to produce a list of possible squares. Then check if a square is open on the board and return that value so that Main.js can dispatch to the store. 


