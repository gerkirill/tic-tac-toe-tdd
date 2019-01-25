# Tic-Tac-Toe TDD

render() - array to divs

move() - updates array if the move is legal

div click handler - calls move() and render() and stateChecker()

stateChecker() - decides if the mage is in progress or finished and what's the result (X / O / draw)

restart() - restarts the game

data:
  array
  nextMove

expansion
  online game - 
    instead of click handling - listen to websocket (use fire...)
    in addition to array update - send notification to firebase
    sync. game state?
    read-only mode for all except first two?
    maybe send whole game state with a move() ?
    reset() should also be sent
    

## Retro:

 - better call it nextMove of nextPlayer instead of "current"
 - btw - nextPlayer can be caclulated from the board state as well, in this case haveNstate is just an array instead of object
 - add one more point to "good function" description - it does not modify its input inplace (e.g. arrays, etc)
 - can try the same but with pair programming
 - add each function description in the file, in addition to the intro talk, as it gets forgotten quickly
 - fix unit tests so they work @ win
 - idea is to compose functions as less as possible, this makes parallel development of different features easy
 - the other good idea to say yout loud is integration tests are also required, in addition to the unit ones
 - function and its tests should be coded either by the same programmer or in a pair
