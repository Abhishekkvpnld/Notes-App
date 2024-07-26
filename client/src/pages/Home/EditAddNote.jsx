import { useState } from "react";
import TagInput from "../../components/Input/TagInput"
import { MdClose } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const EditAddNote = ({ onClose, noteData, type, getAllNotes }) => {

    const [content, setContent] = useState(noteData?.content || "");
    const [tags, setTags] = useState(noteData?.tags || "");
    const [title, setTitle] = useState(noteData?.title || "");
    const [error, setError] = useState(null);

    //Add notes
    const addNewNotes = async () => {
        try {
            const response = await axiosInstance.post("/add-note", { title, content, tags }, { withCredentials: true });

            if (response.data && response.data.success) {
                getAllNotes();
                onClose();
            }

        } catch (error) {
            console.log(error);
            if (error.response) {
                setError(error?.response?.data?.message)
            }
        }

    };

    //Edit Notes
    const onEditNote = async () => {
        try {
            const noteId = noteData?._id;
            const response = await axiosInstance.put("/edit-note/" + noteId, { title, content, tags }, { withCredentials: true });

            if (response.data && response.data.success) {
                getAllNotes();
                onClose();
            }

        } catch (error) {
            console.log(error);
            if (error.response) {
                setError(error?.response?.data?.message)
            }
        }

    };


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
    };


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

            <button className="btn-primary font-medium p-3 mt-5" onClick={handleAddNotes}>{type === "edit" ? "UPDATE" : "ADD"}</button>
        </div>
    )
}

export default EditAddNote;