import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import axios from "axios";
import { API_URL } from "../services/auth.constants";
import request from "../services/api.request";
import { toast } from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";

function Modal({
  isVisible,
  setShowModal,
  modalData,
  router,
  state,
  bigPic,
  setBigPic,
  review,
}) {
  if (!isVisible) return null;

  function handleClose() {
    setShowModal(false);
  }

  function chat() {
    router.push({
      pathname: `/chat/${modalData.seller.id}`,
      query: {
        fname: modalData.seller.first_name,
        lname: modalData.seller.last_name,
      },
    });
  }

  async function saveListing() {
    axios
      .get(API_URL + `users/${state.currentUser?.user_id}`)
      .then(async (resp) => {
        let savedData = resp.data.saved || [];
        let options = {
          url: `users/p/${state.currentUser?.user_id}/`,
          method: "PATCH",
          data: {
            saved: [...savedData, modalData.id],
          },
        };
        await request(options);
        toast("Saved Listing!");
      });
  }

  // function imageSwap(direction) {
  //   switch (direction) {
  //     case "+":
  //       if (modalData.Image[])
  //       break
  //     case "-":
  //       break
  //   }
  // }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex z-40"
      // onClick={handleClose}
      id="wrapper"
    >
      <button
        className="fixed left-2 top-2 rounded-full bg-white px-3 py-1"
        onClick={handleClose}
      >
        X
      </button>
      <div className="h-3/5 w-full  lg:h-full lg:w-3/4">
        <div className="min-w-full flex h-full lg:h-5/6 justify-center items-center lg:mt-6">
          {/* <button className="mx-auto">
            <Image
              src="./img/chevronLeft.svg"
              height={100}
              width={100}
              alt=""
            />
          </button> */}
          <div className=" h-full w-[80%] relative items-center flex justify-center">
            <Image
              className="object-contain  rounded-lg"
              fill
              src={bigPic}
              alt=""
            />
          </div>
          {/* <button className="mx-auto" onClick={() => imageSwap("+")}>
            <Image
              src="./img/chevronRight.svg"
              height={100}
              width={100}
              alt=""
            />
          </button> */}
        </div>
        <div className="hidden min-w-full lg:flex lg:h-1/6 items-center justify-around">
          {modalData.Image.map((pic) => {
            return (
              <button
                key={pic}
                onClick={() => {
                  setBigPic(pic);
                }}
              >
                <Image src={pic} height={100} width={100} alt="" />
              </button>
            );
          })}
        </div>
      </div>
      <div className="h-2/5 overflow-scroll w-full bottom-0 absolute justify-self-end bg-mtgray p-4 space-y-3 lg:h-full lg:right-0 lg:w-1/4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-4xl flex">{modalData.title} </div>
          <button className="btn" onClick={saveListing}>
            Save
          </button>
        </div>
        <div className="font-bold">${modalData.price}</div>
        <div className="text-sm">
          {modalData.category.map((cate) => (
            <p key={cate.id} className="inline opacity-40">
              {cate.name},{" "}
            </p>
          ))}
        </div>
        <div>
          <div className="font-bold">Details:</div>
          {modalData.description}
        </div>
        <div>
          <div className="font-bold">Location:</div>
          Listed in {modalData.location}
        </div>
        <div>
          <iframe
            className="w-full"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}&q=${modalData.location}`}
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="font-bold">Seller Info:</div>
          <div className="flex items-center">
            <div>
              <Image
                src={modalData.seller.image}
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="mx-2 w-full flex justify-between items-center">
              <div>
                <div>
                  {modalData.seller.first_name} {modalData.seller.last_name}
                </div>
                <div>
                  <Rating value={review} style={{ maxWidth: 100 }} readOnly />
                  {/* <Image src="./img/star.svg" height={25} width={25} alt="" /> */}
                </div>
              </div>
              <div>
                <button
                  className="btn disabled:opacity-50"
                  onClick={chat}
                  disabled={state.currentUser?.user_id == undefined}
                >
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
