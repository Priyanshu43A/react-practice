import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1673297180075-411992cad941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      songName: "Teri chahat",
      artistName: "Priyanshu",
      addedToFav: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1709884732294-ac35fa831eb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      songName: "Challanger",
      artistName: "Subh",
      addedToFav: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1723496954926-d6b4c06d9276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      songName: "Expresso",
      artistName: "Sabrina Carpeneter",
      addedToFav: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1709884732297-4b3c1a3f725b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
      songName: "Billionare",
      artistName: "Honey Singh",
      addedToFav: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        console.log(item);
        if (itemIndex === index) {
          return { ...item, addedToFav: !item.addedToFav };
        }
        return item;
      });
    });
  };

  return (
    <>
      <Navbar data={songData} />
      <div className="flex gap-10 mt-10 flex-wrap">
        {songData.map((songData, index) => {
          return (
            <Card
              key={index}
              index={index}
              handleClick={handleClick}
              songData={songData}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
