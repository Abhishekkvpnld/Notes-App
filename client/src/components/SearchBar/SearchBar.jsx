import { IoMdSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const SearchBar = ({ handleOnChange, handleSearch, onClearSearch, value }) => {
    return (
        <div className="flex w-80 items-center bg-slate-100 px-4 rounded-lg">
            <input
                className="w-full text-xs py-[11px] bg-slate-100 outline-none "
                type="text"
                value={value}
                onChange={handleOnChange}
                name="search"
                id="search"
                placeholder="Search Notes"
            />
            {value && <IoCloseOutline onClick={onClearSearch} size={20} className="text-slate-500 cursor-pointer hover:text-black mr-1" />}
            <IoMdSearch size={25} onClick={handleSearch} className="text-slate-400 hover:text-black cursor-pointer" />
        </div>
    )
}

export default SearchBar;