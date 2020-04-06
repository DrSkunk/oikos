import firebase from './firebase';

export function createGame() {
  const board = [
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

  firebase.ref
    .set({
      board,
    })
    .catch((e) => console.error(e));
}
export function updateTile(tileIndex, newValue) {
  firebase.ref.update({ lastUpdated: firebase.serverTime });
  return firebase.ref.child('board').child(tileIndex).update(newValue);
}
