const Navbar = ({ data }) => {
  return (
    <div className="w-full px-20 py-3 flex justify-between items-center border-b-gray-200 border-b-2">
      <h1 className="font-bold text-2xl">Orange</h1>
      <div className="flex p-2 px-4 bg-orange-500 text-white gap-2 text-sm rounded-md">
        <h3>Favourites</h3>
        <h4>{data.filter((item) => item.addedToFav).length}</h4>
      </div>
    </div>
  );
};

export default Navbar;
