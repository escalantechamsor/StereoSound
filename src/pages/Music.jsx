import { IoMdMusicalNotes } from "react-icons/io";
import {
  BsMusicNote,
  BsMusicNoteBeamed,
  BsMusicNoteList,
  BsMusicPlayer,
} from "react-icons/bs";
function Music() {
  return (
    <div className="w-full min-h-[100vh] p-3">
      <div className="flex items-center w-full h-[20vh] justify-around text-gray-700 p-2">
        <button
          id="note1"
          className="w-[20%] h-20 flex items-center justify-center hover:bg-[#79C0E0] transition-all hover:text-gray-100 text-[4em] rounded-t-xl"
        >
          <BsMusicNoteBeamed />
        </button>
        <button
          id="note2"
          className="w-[20%] h-20 flex items-center justify-center hover:bg-[#79C0E0] transition-all hover:text-gray-100 text-[4em] rounded-t-xl"
        >
          <BsMusicPlayer />
        </button>
        <button
          id="note3"
          className="w-[20%] h-20 flex items-center justify-center hover:bg-[#79C0E0] transition-all hover:text-gray-100  text-[4em] rounded-t-xl"
        >
          <BsMusicNoteList />
        </button>
        <button
          id="note4"
          className="w-[20%] h-20 flex items-center justify-center  hover:bg-[#79C0E0] transition-all hover:text-gray-100 text-[4em] rounded-t-xl"
        >
          <IoMdMusicalNotes />
        </button>
        <button
          id="note5"
          className="w-[20%] h-20 flex items-center justify-center hover:bg-[#79C0E0] transition-all hover:text-gray-100  text-[4em] rounded-t-xl"
        >
          <BsMusicNote />
        </button>
      </div>
      <div className="w-full h-[80vh] bg-[#79C0E0]"></div>
    </div>
  );
}

export default Music;
