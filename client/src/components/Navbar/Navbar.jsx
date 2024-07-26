import ProfileData from "../Cards/ProfileData";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";


const Navbar = ({ userInfo, onSearchNote,handleClearSearch }) => {

  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    if (searchValue) {
      onSearchNote(searchValue);
    }
  };

  const handleLogout = async () => {
    localStorage.clear();
    navigate("/login")
  };


const onClearSearch = ()=>{
  setSearchValue("");
  handleClearSearch();
};

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <Link to={"/"} className="font-medium text-slate-500 hover:text-slate-700 text-xl">Notes</Link>

      <SearchBar
        handleOnChange={(e) => setSearchValue(e.target.value)}
        handleSearch={handleSearch}
        onClearSearch={() => onClearSearch()}
        value={searchValue}
      />

      <ProfileData userInfo={userInfo} onLogout={handleLogout} />
    </div>
  )
}

export default Navbar;