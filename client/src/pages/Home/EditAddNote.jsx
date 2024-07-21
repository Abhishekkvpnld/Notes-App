import { useState } from "react";
import TagInput from "../../components/Input/TagInput"
import { MdClose } from "react-icons/md";

const EditAddNote = ({ onClose, noteData, type }) => {

    const [content, setContent] = useState("");
    const [tags, setTags] = useState("");
    const [title, setTitle] = useState("");
    const [error, setError] = useState(null);

    //Add notes
    const addNewNotes = async () => {

    }

    //Edit Notes
    const onEditNote = async () => {

    }


    const handleAddNotes = () => {

        if (!title) {
            return setError("Please enter the title*");
        }

        if (!content) {
            return setError("Please enter the content*");
        }

        setError("");

        if (type === "edit") {
            onEditNote();
        } else {
            addNewNotes();
        }
    }

    return (
        <div className="relative">

            <button onClick={onClose} className="flex items-center justify-center w-6 h-6 rounded-full absolute -top-2 -right-1 hover:bg-red-800 transition-all  hover:text-white">
                <MdClose className="text-2xl text-slate-500 w-full h-full hover:text-white" />
            </button>

            <div className="flex flex-col gap-2">
                <label className="input-label font-semibold"> TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-900 outline-none"
                    placeholder="Add notes"
                    value={title}
                    onChange={(e) => setTitle(e.target)}
                />
            </div>

            <div className="flex flex-col mt-4 gap-2">
                <label className="input-label font-semibold">CONTENT</label>
                <textarea
                    type="text"
                    className="text-sm text-slate-900 outline-none bg-slate-50 p-2 rounded-md"
                    placeholder="Add Content"
                    rows={10}
                    value={content}
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>

            <div className="mt-3">
                <label className="input-label font-semibold">TAGS</label>
                <TagInput
                    tags={tags}
                    setTags={setTags}
                />
            </div>

            {
                error && (
                    <span className="text-red-400 pt-4 text-xs">{error}</span>
                )
            }

            <button className="btn-primary font-medium p-3 mt-5" onClick={handleAddNotes}>ADD</button>
        </div>
    )
}

export default EditAddNote;