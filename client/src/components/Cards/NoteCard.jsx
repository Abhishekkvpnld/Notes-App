import { MdOutlinePushPin } from "react-icons/md";
import { RiUnpinLine } from "react-icons/ri";
import { MdOutlineCreate, MdDeleteOutline } from "react-icons/md";

const NoteCard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    handleOnEdit,
    handleOnDelete,
    handleOnPinNote
}) => {
    return (
        <div className="border bg-white rounded-md hover:shadow-xl p-4 transition-all ease-out">

            <div className="flex items-center justify-between">
                <div>
                    <h6 className="text-sm font-medium">{title}</h6>
                    <span className="text-xs text-slate-500">{date}</span>
                </div>

                {isPinned ? <RiUnpinLine className={`icon-btn ${isPinned ? "text-primary" : "text-slate-300"} `} /> : <MdOutlinePushPin className={`icon-btn "text-slate-300"`} />}
            </div>

            <p className="text-xs text-slate-600 mt-2">{content?.slice(0, 60)}</p>

            <div className="flex items-center justify-between mt-2">
                <div className="text-xs text-slate-500">{tags}</div>

                <div className="flex items-center gap-2">
                    <MdOutlineCreate className="icon-btn hover:text-green-600" />
                    <MdDeleteOutline className="icon-btn hover:text-red-700" />
                </div>
            </div>

        </div>
    )
}

export default NoteCard;