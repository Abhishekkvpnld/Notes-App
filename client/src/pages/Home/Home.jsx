import { useEffect, useState } from "react";
import Modal from "react-modal";
import NoteCard from "../../components/Cards/NoteCard";
import Navbar from "../../components/Navbar/Navbar";
import { MdAdd } from "react-icons/md";
import EditAddNote from "./EditAddNote";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import EmptyCard from "../../components/EmptyCard";


const Home = () => {

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null
  });


  const getUserInfo = async () => {
    try {

      const response = await axiosInstance.get("/auth/get-user", { withCredentials: true });
      if (response?.data && response?.data?.user) {
        setUserInfo(response?.data?.user);
      }

    } catch (error) {
      if (error?.response?.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  const getAllNotes = async () => {
    try {
      const response = await axiosInstance.get("/all-notes", { withCredentials: true });

      if (response.data && response.data?.data?.Notes) {
        setAllNotes()
        console.log(response.data?.data?.Notes)
      }

    } catch (error) {
      console.log("An unexpected error occured.Please try again.");
    }
  };

  const handleEdit = async (noteDetails) => {
    try {
      setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
    } catch (error) {
      console.log(error)
    }
  };

  //Delete Notes
  const handleDeleteNote = async (data) => {

    const noteId = data._id;
    try {
      const response = await axiosInstance.delete("/delete-note/" + noteId, { withCredentials: true });

      if (response.data && response.data.success) {
        getAllNotes();
      }

    } catch (error) {
      console.log(error);
    }
  }

  //Search Notes
  const handleOnSearch = async (query) => {
    try {
      const response = await axiosInstance.get("/search-notes", { params: query, withCredentials: true });

      if (response.data && response.data.data) {
        setIsSearch(true);
        setAllNotes(response?.data?.data);
      }
    } catch (error) {
      console.log(error)
    }
  };

  //Clear Search
  const handleClearSearch = () => {
    setIsSearch(false);
    getAllNotes();
  };

  //Update Pin Note
  const handleUpdateIsPinned = async (noteData) => {
    try {
      const noteId = noteData?._id;
      const response = await axiosInstance.put("/update-note-pinned/" + noteId, { isPinned: !noteData.isPinned}, { withCredentials: true });

      if (response.data && response.data.success) {
          getAllNotes();
      }

  } catch (error) {
      console.log(error);
  }
  }


  useEffect(() => {
    getUserInfo();
    getAllNotes();
  });

  return (
    <>
      <Navbar userInfo={userInfo} onSearchNote={handleOnSearch} handleClearSearch={handleClearSearch} />

      <div className="container mx-auto">

        {allNotes?.length > 0 ?
          (<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">

            {
              allNotes?.map((item, index) => (
                <NoteCard
                  key={item?._id + index}
                  title={item?.title}
                  date={item?.createdAt}
                  content={item?.content}
                  tags={item?.tags}
                  isPinned={item?.isPinned}
                  handleOnDelete={() => handleDeleteNote(item)}
                  handleOnEdit={() => handleEdit(item)}
                  handleOnPinNote={() => handleUpdateIsPinned(item)}
                />
              ))
            }



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
          </div>) : <EmptyCard handleOnEdit={() => setOpenAddEditModal({ isShown: true, type: "add", data: null })} isSearch={isSearch} />}

        <button onClick={() => setOpenAddEditModal({ isShown: true, type: "add", data: null })} className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-700 hover:bg-blue-800 absolute right-10 bottom-10">
          <MdAdd className="text-[35px] text-white" />
        </button>
      </div>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => { }}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)"
          }
        }}
        contentLabel=""
        className={"w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 "}
      >
        <EditAddNote
          type={openAddEditModal?.type}
          noteData={openAddEditModal?.data}
          onClose={() => { setOpenAddEditModal({ isShown: false, type: "add", data: null }) }}
          getAllNotes={getAllNotes}
        />

      </Modal>
    </>
  )
}

export default Home;
