export default function ImageIcon({ file, onClick }) {
  console.log(file);
  return (
    <div className="w-36 h-auto">
      <div className="  relative">
        <button
          onClick={onClick}
          className="border border-white hover:border-red-600 absolute top-0 right-0 w-6 h-6 text-xs text-center flex justify-center items-center p-1 rounded-full bg-red-600 text-white hover:text-red-600 hover:bg-white "
        >
          x
        </button>
      </div>
      <div className=" mt-2 w-36 border border-[#EDEDED] p-2">
        <img src={file.preview} alt="" width={140} />
        <span className="text-xs text-qgraytwo w-16 word-brake ">
          {file.name}
        </span>
      </div>
    </div>
  );
}
