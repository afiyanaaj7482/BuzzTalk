
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendMessageThunk } from "../../store/slice/message/message.thunk";

const SendMessage = () => {

  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.userReducer);
  console.log(selectedUser?._id)
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
 
    dispatch(
  sendMessageThunk({
    receiverId: selectedUser?._id, // ✅ Correct spelling
    message,
  })
);

    setMessage('');
  };

  return (
    <div className="w-full p-3 flex gap-2">
      <input
        type="text"
        placeholder="Type here..."
        className="input input-bordered input-primary w-full"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSendMessage}
        className="btn btn-square btn-outline btn-primary"
      >
        <IoIosSend />
      </button>
    </div>
  );
};

export default SendMessage;