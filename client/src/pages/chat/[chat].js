import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useGlobalState } from "../../context/GlobalState";
import moment from "moment";
import axios from "axios";
import { API_URL } from "../../services/auth.constants";

function chat() {
  const [state, dispatch] = useGlobalState();
  const [chat, setChat] = useState([]);
  const router = useRouter();
  const data = router?.query.chat;
  const name = router?.query.fname + " " + router?.query.lname;
  const ref = useRef();

  useEffect(() => {
    if (!router.isReady) return;
    axios
      .get(API_URL + `message_list/${state.currentUser?.user_id}/${data}/`)
      .then((resp) => {
        setChat(resp.data);
      });
  }, [router.isReady]);

  async function send() {
    await axios
      .post(API_URL + "messages/", {
        text: ref.current.value,
        sender: state.currentUser?.user_id,
        recipient: data,
        viewed: false,
        date_time_sent: Date.now(),
        timestamp: moment().format("MM-DD-YYYY hh:mm"),
      })
      .then((resp) => {
        console.log(resp);
      });
    window.location.reload(true);
  }
  console.log(chat);
  return (
    <div className="w-full h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center">
      <div className="bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative overflow-y-auto">
        <div>You're Messaging {name}!</div>
        <div>
          Review ?
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <div className="border h-[calc(100vh-10.5rem)]">
          {chat.map((message) => {
            return (
              <div
                className={
                  message.sender == state.currentUser?.user_id
                    ? "w-full flex justify-end"
                    : "w-full flex justify-start"
                }
              >
                <div
                  className={
                    message.sender == state.currentUser?.user_id
                      ? "border px-4 rounded-full border-mtpurple w-fit"
                      : "border px-4 rounded-full"
                  }
                >
                  {message.text}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex absolute bottom-0 w-full">
          <input
            type="text"
            placeholder="Type your message!"
            className="border bg-slate-100 rounded-l-full w-full px-5"
            ref={ref}
          />
          <button className="bg-mtpurple p-2 rounded-r-full" onClick={send}>
            <Image
              src="../img/send.svg"
              height={25}
              width={25}
              alt=""
              className="invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default chat;
