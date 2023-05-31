import React, { useRef, useEffect } from "react";
import MessageComponent from "./MessageComponent";
import pusher from "../../pusher";
import useSWR from "swr";
import request from "../services/api.request";
import Image from "next/image";
import { useRouter } from "next/router";
import { API_URL } from "../services/auth.constants";
import axios from "axios";
import moment from "moment";

function Chatbox({ state }) {
  const router = useRouter();
  const urldata = router?.query.chat;
  const ref = useRef();
  const bottom = useRef();
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, mutate } = useSWR(
    () =>
      router.isReady
        ? API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`
        : null,
    fetcher
  );

  // console.log(data);

  // useEffect(() => {
  //   if (!router.isReady) return;
  //   axios
  //     .get(API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`)
  //     .then((resp) => {
  //         console.log(resp.data)
  //     //   setChat(resp.data);
  //     });

  //   axios
  //     .get(API_URL + `review_fetch/${state.currentUser?.user_id}/${urldata}/`)
  //     .then((resp) => {
  //     //   setReview(resp.data);
  //     });
  // }, [router.isReady]);

  useEffect(() => {
    const channel = pusher.subscribe("messages");

    channel.bind("new-message", async (newData) => {
      if (!data) {
        mutate(fetcher);
      } else {
        mutate(fetcher, {
          optimisticData: [...data, newData],
          rollbackOnError: true,
        });
      }
    });

    bottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [data, mutate, pusher]);

  async function send(event) {
    event.preventDefault()
    await axios
      .post(API_URL + "messages/", {
        text: ref.current.value,
        sender: state.currentUser?.user_id,
        recipient: urldata,
        viewed: false,
        date_time_sent: Date.now(),
        timestamp: moment().format("MM-DD-YYYY hh:mm"),
      })
      .then((resp) => {
        console.log(resp.data, "CHECK ME OUT HERE");
        mutate([...data, resp.data], {
          optimisticData: [...data, resp.data],
          rollbackOnError: true,
        });
        ref.current.value = "";
      });
    // window.location.reload(true);
  }

  return (
    <div>
      <div className="border h-[calc(100vh-10.5rem)]">
        <div className="h-full  overflow-y-auto">
          {typeof data === "object"
            ? data?.map((message, index) => {
                return (
                  <div className="space-y-5 px-1 pt-1" key={index}>
                    <MessageComponent message={message} state={state} />
                  </div>
                  // <div
                  //   className={
                  //     message.sender == state.currentUser?.user_id
                  //       ? "w-full flex justify-end"
                  //       : "w-full flex justify-start"
                  //   }
                  // >
                  //   <div
                  //     className={
                  //       message.sender == state.currentUser?.user_id
                  //         ? "border px-4 rounded-full border-mtpurple w-fit"
                  //         : "border px-4 rounded-full"
                  //     }
                  //   >
                  //     {message.text}
                  //   </div>
                  // </div>
                );
              })
            : null}
          <div ref={bottom}></div>
        </div>
      </div>
      <form className="flex absolute bottom-0 w-full">
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
      </form>
    </div>
  );
}

export default Chatbox;
