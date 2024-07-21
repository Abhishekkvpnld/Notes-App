import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {

  const [inputValue, setInputValue] = useState("");

  const addNewTag = async () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  }


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  }

  const handleRemoveTag = () => {

  }

  return (
    <div>

      {tags?.length > 0 && (
        <div className="flex items-center flex-wrap mt-2 gap-2">
          {
            tags?.map((tag, index) => (
              <span key={index} className="font-medium text-xs text-orange-800 flex items-center justify-center bg-slate-100 py-1 px-1 rounded-sm">
                # {tag}
                <button onClick={() => {
                  handleRemoveTag(tag)
                }}>
                  <MdClose  className="hover:text-black text-slate-500 ml-1"/>
                </button>
              </span>
            ))
          }
        </div>
      )}

      <div className="flex items-center gap-3 mt-3">
        <input
          type="text"
          className="bg-slate-50 p-2 text-sm rounded-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add tags"
          onKeyDown={handleKeyDown}
        />

        <button onClick={() => addNewTag()} className="p-1 rounded-full flex items-center justify-center hover:text-white border hover:bg-blue-800 border-blue-800">
          <MdAdd className="text-2xl text-blue-700 hover:text-white" />
        </button>

      </div>
    </div>
  )
}

export default TagInput;