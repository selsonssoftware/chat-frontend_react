import React, { useEffect } from "react";
import { X } from "lucide-react";
import { useChatStore } from "../../../store/useChatStore";
import { useAuthStore } from "../../../store/useAuthStore";

const GroupHeader = () => {
  const { onlineUsers } = useAuthStore();

  const {
    groupInfo,
    setSelectedUser,
    setSelectedGroupId,
    setGroupInfo,
    selectedGroupId
  } = useChatStore();

  console.log("group info", groupInfo)

  useEffect(() => {
    setGroupInfo();
  }, [selectedGroupId])

  if (!groupInfo) return (
    <div>
      fetching group details
    </div>
  );

  return (
    <div className="nochatbg text-main flex justify-between border-b border-gray-300  transition duration-100  opacity-100 hover:opacity-60">
      
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
      <button onClick={() => document.getElementById('my_modal_3').showModal()} className="cursor-pointer w-full flex p-3 gap-4 items-center">
        
        <img
          src={
            groupInfo.group_image ||
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          }
          alt={groupInfo.group_name}
          className="h-10 w-10 object-cover rounded-full border border-gray-300"
        />

        <div className="flex flex-col">
          <h2 className="text-sm text-left font-semibold text-black ">
            {groupInfo.group_name}
          </h2>



          <div className="text-xs text-left text-gray-500 flex flex-row">
            Click to View Details
            {/* {groupInfo.chat_users.map((item) => (
              <p>{item.user.name},</p>
            ))} */}
          </div>
        </div>
      </button>

      <button
        onClick={() => {
          setSelectedUser(null);
          setSelectedGroupId(null);
        }}
        className="mr-4 cursor-pointer text-black hover:text-gray-600"
      >
        <X />
      </button>
    </div>
  );
};

export default GroupHeader;
