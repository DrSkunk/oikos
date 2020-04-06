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
export async function updateTile(id, tileIndex, newValue) {
  return firebase.ref.child('board').child(tileIndex).update(newValue);
}
