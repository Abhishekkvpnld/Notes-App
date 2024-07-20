import { useState } from "react";
import Modal from "react-modal";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md";
import EditAddNote from "./EditAddNote";



const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: true,
    type: "add",
    data: null
  });

  return (
    <>
      <Navbar />

      <div className="container mx-auto">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">
          <NoteCard
            title={"Meting on 7 th april"}
            date={"6 APR 2017"}
            content={"Meting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th april"}
            tags={"#meeting"}
            isPinned={true}
            handleOnDelete={() => { }}
            handleOnEdit={() => { }}
            handleOnPinNote={() => { }}
          />

          <NoteCard
            title={"Meting on 7 th april"}
            date={"6 APR 2017"}
            content={"Meting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th april"}
            tags={"#meeting"}
            isPinned={true}
            handleOnDelete={() => { }}
            handleOnEdit={() => { }}
            handleOnPinNote={() => { }}
          />

          <NoteCard
            title={"Meting on 7 th april"}
            date={"6 APR 2017"}
            content={"Meting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th april"}
            tags={"#meeting"}
            isPinned={true}
            handleOnDelete={() => { }}
            handleOnEdit={() => { }}
            handleOnPinNote={() => { }}
          />

          <NoteCard
            title={"Meting on 7 th april"}
            date={"6 APR 2017"}
            content={"Meting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th april"}
            tags={"#meeting"}
            isPinned={true}
            handleOnDelete={() => { }}
            handleOnEdit={() => { }}
            handleOnPinNote={() => { }}
          />

          <NoteCard
            title={"Meting on 7 th april"}
            date={"6 APR 2017"}
            content={"Meting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th april"}
            tags={"#meeting"}
            isPinned={true}
            handleOnDelete={() => { }}
            handleOnEdit={() => { }}
            handleOnPinNote={() => { }}
          />

          <NoteCard
            title={"Meting on 7 th april"}
            date={"6 APR 2017"}
            content={"Meting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th aprilMeting on 7 th april"}
            tags={"#meeting"}
            isPinned={true}
            handleOnDelete={() => { }}
            handleOnEdit={() => { }}
            handleOnPinNote={() => { }}
          />
        </div>

        <button className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-700 hover:bg-blue-800 absolute right-10 bottom-10">
          <MdAdd className="text-[35px] text-white" />
        </button>
      </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay:{
            backgroundColor:"rgba(0,0,0,0.2)"
          }
        }}
        contentLabel=""
        className={"w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"}
      >
        <EditAddNote/>
      </Modal>
    </>
  )
}

export default Home;
