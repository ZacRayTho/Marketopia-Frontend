import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useGlobalState } from "../context/GlobalState";

function Modal({ isVisible, setShowModal, modalData }) {
  if (!isVisible) return null;
  const router = useRouter();
  const [state, dispatch] = useGlobalState();

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
          <button className="mx-auto">
            <Image
              src="./img/chevronLeft.svg"
              height={100}
              width={100}
              alt=""
            />
          </button>
          <div className=" h-full w-[80%] relative">
            <Image src={modalData.Image[0]} fill alt="" />
          </div>
          <button className="mx-auto">
            <Image
              src="./img/chevronRight.svg"
              height={100}
              width={100}
              alt=""
            />
          </button>
        </div>
        <div className="hidden min-w-full lg:flex lg:h-1/6 items-center justify-center">
          All Images mapped here
        </div>
      </div>
      <div className="h-2/5 overflow-scroll w-full bottom-0 absolute justify-self-end bg-mtgray p-4 space-y-3 lg:h-full lg:right-0 lg:w-1/4">
        <div className="font-bold text-4xl">{modalData.title}</div>
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
          <div className="font-bold">Seller Info:</div>
          <div className="flex items-center">
            <div>
              <Image
                src="https://zacraytho.github.io/img/zt-logo.png"
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
                  <Image src="./img/star.svg" height={25} width={25} alt="" />
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
