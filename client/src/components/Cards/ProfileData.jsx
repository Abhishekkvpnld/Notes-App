import { getInitials } from "../../utils/helper";

const ProfileData = ({onLogout,userInfo}) => {
    
    console.log("userInfo",userInfo)

    return (
        <>
            <div className="flex items-center justify-between gap-2">
                <div className="text-slate-600 px-2 py-2 rounded-full cursor-pointer hover:bg-slate-200 bg-slate-100">{getInitials("abhishek kv")}</div>
                <div className="font-medium text-gray-700-800">User</div>
                <div onClick={onLogout} className="px-4 bg-blue-100 py-1 ml-5 rounded-lg cursor-pointer text-slate-600 hover:text-white hover:bg-red-800 hover:shadow-2xl font-medium">Logout</div>
            </div>
        </>
    )
}

export default ProfileData;