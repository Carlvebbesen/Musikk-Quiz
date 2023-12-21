import Header from "../components/header";
import MusikkCell from "../components/musikkCell";
import MainHeader from "@/components/mainHeader";
import Row from "../components/row";
import { SongDataType, data } from "../../data";
import ColHeader from "@/components/colHeader";
import Snowfall from "@/components/snowflake";

export default function Home() {
  const getCells = (cells: SongDataType[], header: string) => {
    const songCells = cells.map((song) => {
      return <MusikkCell key={song.songTitle} content={song} />;
    });
    return [<Header key={header} type={header} />, ...songCells];
  };
  return (
    <main>
      <Snowfall count={75} /> {/* Render the Snowfall component */}
      <div className="relative z-10 p-10">
        <MainHeader title="🎵Carl og Julie's Musikkquiz🎵" />
        <div className="grid grid-cols-6 gap-10 h-full w-full">
          <Row>
            <Header type="Poeng" />
            <ColHeader title="100 ⛸️" />
            <ColHeader title="200 🎅🏻" />
            <ColHeader title="300 🎁" />
            <ColHeader title="400 🛷" />
            <ColHeader title="500 🎄" />
          </Row>
          <Row>{getCells(data.places, "Steder")}</Row>
          <Row>{getCells(data.drugs, "Drugs")}</Row>
          <Row>{getCells(data.number, "Tall")}</Row>
          <Row>{getCells(data.time, "Tid")}</Row>
          <Row>{getCells(data.language, "Språk")}</Row>
        </div>
      </div>
    </main>
  );
}
