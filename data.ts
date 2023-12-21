export interface SongDataType {
  songTitle: string;
  word: string;
  url?: string;
}
export interface MusicGameType {
  places: SongDataType[];
  drugs: SongDataType[];
  number: SongDataType[];
  time: SongDataType[];
  language: SongDataType[];
}

export const data: MusicGameType = {
  places: [
    {
      songTitle: "Empire State Of mind",
      word: "New York",
    },
    {
      songTitle: "My House",
      word: "Mitt Hus",
    },
    {
      songTitle: "Pause fra Pausen",
      word: "Tøyen",
    },
    {
      songTitle: "Tante",
      word: "Trenches",
    },
    {
      songTitle: "You want it darker",
      word: "Lillehammer",
    },
  ],
  drugs: [
    {
      songTitle: "I'm in love with the coco",
      word: "Kokain",
    },
    {
      songTitle: "Young, Wild and free",
      word: "Weed",
    },
    {
      songTitle: "Kjøpe hele Sverige",
      word: "Sopp",
    },
    {
      songTitle: "Rockstar",
      word: "Piller",
    },
    {
      songTitle: "Den jeg vil ha",
      word: "Psykedelisk",
    },
  ],
  number: [
    {
      songTitle: "Summer of 69",
      word: "69",
    },
    {
      songTitle: "In da club",
      word: "50",
    },
    {
      songTitle: "Spis din syvende sans",
      word: "7",
    },
    {
      songTitle: "31 etasje",
      word: "31",
    },
    {
      songTitle: "17 mai",
      word: "17",
    },
  ],
  time: [
    {
      songTitle: "Fredag",
      word: "Fredag",
    },
    {
      songTitle: "Morgenstemning",
      word: "Morgen",
    },
    {
      songTitle: "Born in the USA",
      word: "Vår",
    },
    {
      songTitle: "Saturday Sun",
      word: "Lørdag",
    },
    {
      songTitle: "Give me the night",
      word: "Natt",
    },
  ],
  language: [
    {
      songTitle: "Jeg kommer",
      word: "Svensk",
    },
    {
      songTitle: "99 Luftballongs",
      word: "Tysk",
    },
    {
      songTitle: "Dragostea din tei",
      word: "Rumensk",
    },
    {
      songTitle: "Narkotik kal",
      word: "Russisk",
    },
    {
      songTitle: "Unforgettagle",
      word: "Fransk",
    },
  ],
};
