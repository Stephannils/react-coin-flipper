function choice(arr) {
  let rdnIdx = Math.floor(Math.random() * arr.length);
  return arr[rdnIdx];
}

export { choice };
