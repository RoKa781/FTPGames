export interface IScreenshots {
  id: number;
  img: string;
}

export interface IMinSystemReq {
  os: string;
  processor: string;
  memory: string;
  graphics: string;
  storage: string;
}

export interface IGame {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: IMinSystemReq;
  screenshots: IScreenshots[];
}

export type TStatus = "idle" | "loading" | "succeeded" | "failed";

export enum EStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCEEDED = "succeeded",
  FAILED = "failed",
}

export const mockGames: IGame[] = [
  {
    id: 1,
    title: "Game One",
    thumbnail: "https://example.com/thumbnails/game1.jpg",
    status: "Released",
    short_description: "This is a short description of Game One.",
    description: "This is a detailed description of Game One. It provides a deep dive into the game mechanics and features.",
    game_url: "https://example.com/games/game-one",
    genre: "Action",
    platform: "PC",
    publisher: "Game Publisher One",
    developer: "Game Developer One",
    release_date: "2022-01-01",
    freetogame_profile_url: "https://freetogame.com/game/game-one",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 660",
      storage: "20 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game1-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game1-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game1-screenshot3.jpg" },
    ],
  },
  {
    id: 2,
    title: "Game Two",
    thumbnail: "https://example.com/thumbnails/game2.jpg",
    status: "In Development",
    short_description: "This is a short description of Game Two.",
    description: "This is a detailed description of Game Two. It offers unique gameplay and an immersive story.",
    game_url: "https://example.com/games/game-two",
    genre: "RPG",
    platform: "PC, Console",
    publisher: "Game Publisher Two",
    developer: "Game Developer Two",
    release_date: "2023-06-15",
    freetogame_profile_url: "https://freetogame.com/game/game-two",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce GTX 970",
      storage: "30 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game2-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game2-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game2-screenshot3.jpg" },
    ],
  },
  {
    id: 3,
    title: "Game Three",
    thumbnail: "https://example.com/thumbnails/game3.jpg",
    status: "Released",
    short_description: "An exciting adventure in a vast open world.",
    description: "Game Three offers players an expansive world to explore, filled with quests and characters to meet.",
    game_url: "https://example.com/games/game-three",
    genre: "Adventure",
    platform: "PC, Xbox, PlayStation",
    publisher: "Game Publisher Three",
    developer: "Game Developer Three",
    release_date: "2021-09-20",
    freetogame_profile_url: "https://freetogame.com/game/game-three",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1050",
      storage: "25 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game3-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game3-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game3-screenshot3.jpg" },
    ],
  },
  {
    id: 4,
    title: "Game Four",
    thumbnail: "https://example.com/thumbnails/game4.jpg",
    status: "Released",
    short_description: "Fight for survival in a post-apocalyptic world.",
    description: "In Game Four, players must scavenge for resources and build alliances to survive in a harsh environment.",
    game_url: "https://example.com/games/game-four",
    genre: "Survival",
    platform: "PC",
    publisher: "Game Publisher Four",
    developer: "Game Developer Four",
    release_date: "2023-03-10",
    freetogame_profile_url: "https://freetogame.com/game/game-four",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "AMD Ryzen 5",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 960",
      storage: "30 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game4-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game4-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game4-screenshot3.jpg" },
    ],
  },
  {
    id: 5,
    title: "Game Five",
    thumbnail: "https://example.com/thumbnails/game5.jpg",
    status: "Released",
    short_description: "Engage in tactical battles with other players.",
    description: "Game Five features intense multiplayer combat, with a variety of maps and game modes.",
    game_url: "https://example.com/games/game-five",
    genre: "Shooter",
    platform: "PC, Console",
    publisher: "Game Publisher Five",
    developer: "Game Developer Five",
    release_date: "2020-11-05",
    freetogame_profile_url: "https://freetogame.com/game/game-five",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060",
      storage: "20 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game5-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game5-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game5-screenshot3.jpg" },
    ],
  },
  {
    id: 6,
    title: "Game Six",
    thumbnail: "https://example.com/thumbnails/game6.jpg",
    status: "Released",
    short_description: "Puzzle your way through challenging levels.",
    description: "Game Six offers an engaging puzzle experience with hundreds of levels to conquer.",
    game_url: "https://example.com/games/game-six",
    genre: "Puzzle",
    platform: "PC, Mobile",
    publisher: "Game Publisher Six",
    developer: "Game Developer Six",
    release_date: "2022-12-12",
    freetogame_profile_url: "https://freetogame.com/game/game-six",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i3",
      memory: "4 GB RAM",
      graphics: "Integrated Graphics",
      storage: "10 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game6-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game6-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game6-screenshot3.jpg" },
    ],
  },
  {
    id: 7,
    title: "Game Seven",
    thumbnail: "https://example.com/thumbnails/game7.jpg",
    status: "Released",
    short_description: "Experience thrilling racing action.",
    description: "Game Seven takes players on a fast-paced racing adventure with stunning graphics and realistic physics.",
    game_url: "https://example.com/games/game-seven",
    genre: "Racing",
    platform: "PC, Console",
    publisher: "Game Publisher Seven",
    developer: "Game Developer Seven",
    release_date: "2024-01-15",
    freetogame_profile_url: "https://freetogame.com/game/game-seven",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 1050",
      storage: "25 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game7-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game7-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game7-screenshot3.jpg" },
    ],
  },
  {
    id: 8,
    title: "Game Eight",
    thumbnail: "https://example.com/thumbnails/game8.jpg",
    status: "Released",
    short_description: "Join the epic fantasy battle.",
    description: "Game Eight immerses players in a magical world where they can battle against mythical creatures.",
    game_url: "https://example.com/games/game-eight",
    genre: "Fantasy",
    platform: "PC, Console",
    publisher: "Game Publisher Eight",
    developer: "Game Developer Eight",
    release_date: "2023-07-22",
    freetogame_profile_url: "https://freetogame.com/game/game-eight",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i5",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 660",
      storage: "20 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game8-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game8-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game8-screenshot3.jpg" },
    ],
  },
  {
    id: 9,
    title: "Game Nine",
    thumbnail: "https://example.com/thumbnails/game9.jpg",
    status: "Released",
    short_description: "Survive in the wild and build your shelter.",
    description: "In Game Nine, players must gather resources and craft items to survive in a hostile environment.",
    game_url: "https://example.com/games/game-nine",
    genre: "Survival",
    platform: "PC",
    publisher: "Game Publisher Nine",
    developer: "Game Developer Nine",
    release_date: "2023-05-30",
    freetogame_profile_url: "https://freetogame.com/game/game-nine",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "AMD Ryzen 5",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 960",
      storage: "25 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game9-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game9-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game9-screenshot3.jpg" },
    ],
  },
  {
    id: 10,
    title: "Game Ten",
    thumbnail: "https://example.com/thumbnails/game10.jpg",
    status: "Released",
    short_description: "Explore the universe in a spaceship.",
    description: "Game Ten allows players to travel across galaxies, discovering new planets and civilizations.",
    game_url: "https://example.com/games/game-ten",
    genre: "Space Exploration",
    platform: "PC, Console",
    publisher: "Game Publisher Ten",
    developer: "Game Developer Ten",
    release_date: "2023-08-18",
    freetogame_profile_url: "https://freetogame.com/game/game-ten",
    minimum_system_requirements: {
      os: "Windows 10",
      processor: "Intel i7",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce GTX 1070",
      storage: "40 GB available space",
    },
    screenshots: [
      { id: 1, img: "https://example.com/screenshots/game10-screenshot1.jpg" },
      { id: 2, img: "https://example.com/screenshots/game10-screenshot2.jpg" },
      { id: 3, img: "https://example.com/screenshots/game10-screenshot3.jpg" },
    ],
  },
];

