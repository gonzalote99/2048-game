import React from 'react';

export const EndGame = ({board, onRestart}) => {
var contents = '';
if(board.hasWon()) {
  contents = 'good';
} else if (board.hasLost()) {
  contents = 'bad';
} if (!contents) {
  return null;
}
return (
  <div className="overlay">
   <p className="message">{contents}</p>
   <button className="tryAgain" onClick={onRestart} onTouchdEnd={onRestart}>try again</button>
    </div>
);

};