"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { SongDataType } from "../../data";

const MusikkCell = ({ content }: { content: SongDataType }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleBoxClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="mb-10 h-1/6">
      <motion.div
        className="box h-full"
        onClick={handleBoxClick}
        initial={{ scale: 1 }}
        animate={{ scale: isFlipped ? 1 : 1, rotateY: isFlipped ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-5 bg-blue-600 h-full">
          <div className="text-center p-2">{content.songTitle}</div>
          <div className="text-center">{content.word}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default MusikkCell;
