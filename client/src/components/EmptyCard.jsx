import NoteImg from "../assets/note.svg"


const EmptyCard = ({handleOnEdit}) => {
    return (
        <div className='flex items-center justify-center flex-col mt-20'>
            <img src={NoteImg} alt="No notes" className='w-32 text-slate-300' onClick={handleOnEdit}/>

            <p className='w-1/2 text-xs font-medium text-slate-800 text-center leading-7 mt-5'>
                {`Start creating your first note! Click the 'Add' button to note down your thoughts,ideas and reminders. Lets's get started!` }
            </p>
        </div>
    )
}

export default EmptyCard;