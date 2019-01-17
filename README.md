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