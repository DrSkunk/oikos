import cloneDeep from 'lodash.clonedeep';
import modes from './modes';

export function parseAction(state, index, tile) {
  const { mode, selectedTile, team } = state;
  const newState = cloneDeep(state);
  console.log('newState', newState);
  switch (mode) {
    case modes.moveWorker:
      break;
    case modes.addLevel:
      addLevel();
      break;
    case modes.removeLevel:
      break;
    case modes.addWorker:
      break;
    case modes.removeWorker:
      break;
    case modes.addRoof:
      break;
    case modes.removeRoof:
      break;
    default:
      break;
  }
}
export function addLevel() {}
