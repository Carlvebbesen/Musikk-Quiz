"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SongDataType } from "../../data";

interface MusikkCellProps {
  content: SongDataType;
}

const MusicCell: React.FC<MusikkCellProps> = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleBoxClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="mb-5 h-24">
      <motion.div
        className="box h-full relative"
        onClick={handleBoxClick}
        initial={{ scale: 1 }}
        animate={{ scale: isFlipped ? 1 : 1, rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isFlipped && (
          <>
            <div className="ribbon-horizontal"></div>
            <div className="ribbon-vertical"></div>
          </>
        )}

        <motion.div
          className="p-5 bg-red-600 h-full flex justify-center items-center"
          animate={{ rotateY: isFlipped ? -180 : 0 }} // Counteract the rotation of the box
        >
          {/* Render the text only when isFlipped is true */}
          {isFlipped && (
            <div className=" text-center text-3xl">{content.word}</div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MusicCell;
