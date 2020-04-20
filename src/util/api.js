import firebase from './firebase';

const emptyBoard = [
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
  {
    level: 0,
    roof: false,
    player: 0,
  },
];

export function createGame() {
  firebase.ref
    .set({
      board: emptyBoard,
    })
    .catch((e) => console.error(e));
}
export function updateTile(tileIndex, newValue) {
  firebase.ref.update({ lastUpdated: firebase.serverTime });
  return firebase.ref.child('board').child(tileIndex).update(newValue);
}

export function resetBoard() {
  createGame();
}
