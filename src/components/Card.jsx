import React from "react";

const Card = ({ songData, handleClick, index }) => {
  const { image, artistName, songName, addedToFav } = songData;
  return (
    <div className="px-20 mt-20">
      <div className="card w-60 bg-zinc-200 flex gap-4 p-4 relative pb-10 rounded-md">
        <div className="w-20 h-20 bg-orange-500 rounded-md">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{songName}</h3>
          <h4 className="text-sm">{artistName}</h4>
        </div>
        <button
          onClick={() => handleClick(index)}
          className={`px-4 font-semibold py-3 ${
            addedToFav === false ? "bg-red-500" : "bg-teal-500"
          } absolute bottom-0 translate-y-[50%] -translate-x-[50%] left-1/2 whitespace-nowrap text-white text-xs rounded-full`}
        >
          <span>
            {addedToFav ? "Remove from Favourites" : "Add to Favourites"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
