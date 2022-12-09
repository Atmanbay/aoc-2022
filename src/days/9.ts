export const part1 = (input: string) => {
  const moves = input
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const split = line.split(" ");
      return {
        direction: split[0],
        steps: Number.parseInt(split[1]),
      } as const;
    });

  const headLocation = { x: 0, y: 0 };
  const tailLocations: { x: number; y: number }[] = [{ x: 0, y: 0 }];

  moves.forEach((move) => {
    const tailLocation = tailLocations[tailLocations.length - 1];
    for (let i = 0; i < move.steps; i++) {
      const lastHeadLocation = { ...headLocation };

      switch (move.direction) {
        case "L":
          headLocation.x--;
          break;
        case "U":
          headLocation.y++;
          break;
        case "R":
          headLocation.x++;
          break;
        case "D":
          headLocation.y--;
          break;
      }

      const xDiff = Math.abs(headLocation.x - tailLocation.x);
      const yDiff = Math.abs(headLocation.y - tailLocation.y);

      if (xDiff > 1 || yDiff > 1) {
        tailLocations.push(lastHeadLocation);
      }
    }
  });

  return new Set(tailLocations.map((tl) => `${tl.x},${tl.y}`)).size;
};

export const part2 = (input: string) => {};
