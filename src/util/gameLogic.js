import cloneDeep from 'lodash.clonedeep';
import modes from './modes';
import { updateTile } from './api';

export function parseAction(state, tileIndex, game, tile) {
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
      updateTile(tileIndex, {
        player: board[selectedTile].player,
      });
      updateTile(selectedTile, {
        player: 0,
      });
      break;
    case modes.addLevel:
      updateTile(tileIndex, {
        level: Math.min(tile.level + 1, 3),
      });
      break;
    case modes.removeLevel:
      updateTile(tileIndex, {
        level: Math.max(tile.level - 1, 0),
      });
      break;
    case modes.addWorker:
      updateTile(tileIndex, {
        player: team,
      });
      break;
    case modes.removeWorker:
      updateTile(tileIndex, {
        player: 0,
      });
      break;
    case modes.addRoof:
      updateTile(tileIndex, {
        roof: true,
      });
      break;
    case modes.removeRoof:
      updateTile(tileIndex, {
        roof: false,
      });
      break;
    default:
      break;
  }
}
