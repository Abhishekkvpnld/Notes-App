import TagInput from "../../components/Input/TagInput"

const EditAddNote = () => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className="input-label"> TITLE</label>
                <input
                    type="text"
                    className="text-2xl text-slate-900 outline-none"
                    placeholder="Add notes"
                />
            </div>

            <div className="flex flex-col mt-4 gap-2">
                <label className="input-label">CONTENT</label>
                <textarea
                    type="text"
                    className="text-sm text-slate-900 outline-none bg-slate-50 p-2 rounded-md"
                    placeholder="Content"
                    rows={10}
                />
            </div>

            <div className="mt-3">
                <label className="input-label">TAGS</label>
                <TagInput/>
            </div>

            <button className="btn-primary font-medium p-3 mt-5" onClick={()=>{}}>ADD</button>
        </div>
    )
}

export default EditAddNote;