export interface IScreenshots {
  id: number;
  image: string;
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