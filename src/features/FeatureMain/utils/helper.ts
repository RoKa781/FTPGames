import { IGame } from "../../../shared/types/types";

export const sectionsList = [
  {
    name: 'New',
    link: '/games?platform=all&sortBy=release-date'
  },
  {
    name: 'Shooter',
    link: '/games?platform=all&tags=shooter&sortBy=relevance'
  },
  {
    name: 'mmoRPG',
    link: '/games?platform=all&tags=mmorpg&sortBy=relevance'
  },
  {
    name: 'Moba',
    link: '/games?platform=all&tags=moba&sortBy=relevance'
  },
  {
    name: 'Strategy',
    link: '/games?platform=all&tags=strategy&sortBy=relevance'
  }
];

export const filterSection = (label: string, arr: IGame[]) => {
  switch (label) {
    case "New":
      return [...arr]
        .sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        )
        .slice(0, 3);
    case "Shooter":
      return arr.filter((game) => game.genre === "Shooter").slice(0, 3);
    case "mmoRPG":
      return arr.filter((game) => game.genre === "MMORPG").slice(0, 3);
    case "Moba":
      return arr.filter((game) => game.genre === "MOBA").slice(0, 3);
    case "Strategy":
      return arr.filter((game) => game.genre === "Strategy").slice(0, 3);
    default:
      return arr.slice(0, 3);
  }
};
