import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../services/auth.constants";
import { useGlobalState } from "../../context/GlobalState";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Index() {
  const [state, dispatch] = useGlobalState();
  const [chats, setChats] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    axios
      .get(API_URL + `chat_list/${state.currentUser.user_id}/`)
      .then((resp) => {
        setChats(resp.data);
      });
  }, []);

  function openChat(chat) {
    router.push({
      pathname: `/chat/${chat.id}`,
      query: {
        fname: chat.first_name,
        lname: chat.last_name,
      },
    });
  }

  return (
    <div>
      <div className="text-center">Recent Chats!</div>
      <div className="grid grid-cols-1 max-w-3xl mx-auto">
        {chats.map((chat) => (
          <div key={chat.id} className="py-2  my-2 border rounded-lg w-full">
            <button onClick={() => {openChat(chat)}} className="flex justify-center w-full">
              {chat.first_name} {chat.last_name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
