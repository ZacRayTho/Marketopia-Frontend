import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useGlobalState } from "../../context/GlobalState";
import moment from "moment";
import axios from "axios";
import { API_URL } from "../../services/auth.constants";
import toast from "react-hot-toast";
import MessageComponent from "../../components/MessageComponent";
import pusher from "../../../pusher";
import useSWR from "swr";
import request from "../../services/api.request";
import Chatbox from "../../components/Chatbox";

function Chat() {
  const [state, dispatch] = useGlobalState();
  // const [chat, setChat] = useState([]);
  const [review, setReview] = useState([]);
  const router = useRouter();
  const urldata = router?.query.chat;
  const ref = useRef();
  const bottom = useRef();
  const [name, setName] = useState("")

  useEffect(() => {
    let ls = localStorage.getItem('name')
    setName(ls)
  }, [])

  // const fetcher = (url) => axios.get(url).then((res) => res.data);

  // const { data, error, mutate } = useSWR(
  //   () =>
  //     router.isReady
  //       ? API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`
  //       : null,
  //   fetcher
  // );

  // // console.log(data);

  // // useEffect(() => {
  // //   if (!router.isReady) return;
  // //   axios
  // //     .get(API_URL + `message_list/${state.currentUser?.user_id}/${urldata}/`)
  // //     .then((resp) => {
  // //       setChat(resp.data);
  // //     });

  // //   axios
  // //     .get(API_URL + `review_fetch/${state.currentUser?.user_id}/${urldata}/`)
  // //     .then((resp) => {
  // //       setReview(resp.data);
  // //     });
  // // }, [router.isReady]);

  // useEffect(() => {
  //   const channel = pusher.subscribe("messages");

  //   channel.bind("new-message", async (newData) => {
  //     if (!data) {
  //       mutate(fetcher);
  //     } else {
  //       mutate(fetcher, {
  //         optimisticData: [...data, newData],
  //         rollbackOnError: true,
  //       });
  //     }
  //   });

  //   bottom.current?.scrollIntoView({ behavior: 'smooth' });
  // }, [data, mutate, pusher]);

  // async function send() {
  //   await axios
  //     .post(API_URL + "messages/", {
  //       text: ref.current.value,
  //       sender: state.currentUser?.user_id,
  //       recipient: urldata,
  //       viewed: false,
  //       date_time_sent: Date.now(),
  //       timestamp: moment().format("MM-DD-YYYY hh:mm"),
  //     })
  //     .then((resp) => {
  //       console.log(resp.data, "CHECK ME OUT HERE");
  //       mutate([...data, resp.data], {
  //         optimisticData: [...data, resp.data],
  //         rollbackOnError: true,
  //       });
  //       ref.current.value = "";
  //     });
  //   // window.location.reload(true);
  // }

  function newReview(stars) {
    if (review.length == 0) {
      axios
        .post(API_URL + "reviews/", {
          seller: data,
          reviewer: state.currentUser.user_id,
          rating: stars,
        })
        .then((resp) => {
          // console.log(resp, "REVIEW RESP")
          toast("REVIEW POSTED");
        });
    } else {
      axios
        .patch(API_URL + `reviews/${review[0].id}/`, {
          rating: stars,
        })
        .then((resp) => {
          // console.log(resp, "PATCHED")
          toast("REVIEW UPDATED");
        });
    }
  }

  return (
    <div className="w-full h-[calc(100vh-3.4rem)] lg:h-[calc(100vh-6.4rem)] border-r-2 border-l-2 flex justify-center">
      <div className="bg-mtgray md:w-1/2 h-full text-center lg:text-xl relative overflow-y-auto">
        <div className="flex justify-between px-2 items-center">
          <div className="items-center">You're Messaging {name}!</div>
          <div className="text-sm space-x-2 flex items-center">
            <div>Review</div>
            <div>
              <button
                onClick={() => newReview(1)}
                className="rounded-l-lg bg-mtpurple p-2 text-white"
              >
                1
              </button>
              <button
                onClick={() => newReview(2)}
                className="bg-mtpurple p-2 text-white"
              >
                2
              </button>
              <button
                onClick={() => newReview(3)}
                className="bg-mtpurple p-2 text-white"
              >
                3
              </button>
              <button
                onClick={() => newReview(4)}
                className="bg-mtpurple p-2 text-white"
              >
                4
              </button>
              <button
                onClick={() => newReview(5)}
                className="rounded-r-lg bg-mtpurple p-2 text-white"
              >
                5
              </button>
            </div>
          </div>
        </div>
        <Chatbox state={state} urldata={urldata} />
        {/* <div className="border h-[calc(100vh-10.5rem)]">
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
        </form> */}
      </div>
    </div>
  );
}

export default Chat;
