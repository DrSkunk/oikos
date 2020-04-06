import cloneDeep from 'lodash.clonedeep';
import modes from './modes';
import { updateTile } from './api';

export function parseAction(gameId, state, tileIndex, game, tile) {
  const { mode, selectedTile, team } = state;
  const { board } = game;
  const newState = cloneDeep(state);
  console.log('newState', newState);
  switch (mode) {
    case modes.moveWorker:
      if (selectedTile === null) {
        return;
      }
      console.log('player', selectedTile, game, board[selectedTile]);
      updateTile(gameId, tileIndex, {
        player: board[selectedTile].player
      });
      updateTile(gameId, selectedTile, {
        player: 0
      });
      break;
    case modes.addLevel:
      updateTile(gameId, tileIndex, {
        level: Math.min(tile.level + 1, 3)
      });
      break;
    case modes.removeLevel:
      updateTile(gameId, tileIndex, {
        level: Math.max(tile.level - 1, 0)
      });
      break;
    case modes.addWorker:
      updateTile(gameId, tileIndex, {
        player: team
      });
      break;
    case modes.removeWorker:
      updateTile(gameId, tileIndex, {
        player: 0
      });
      break;
    case modes.addRoof:
      updateTile(gameId, tileIndex, {
        roof: true
      });
      break;
    case modes.removeRoof:
      updateTile(gameId, tileIndex, {
        roof: false
      });
      break;
    default:
      break;
  }
}
