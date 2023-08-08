"use client";
import { Console } from "console";
import "/styles/font.css";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { cardsData4 } from "../data/Data4";
import Image0 from "../Image";

function Card({
  title,
  price,
  imageSrc,
  altText,
  width,
  height,
  titleSize,
  priceSize,
}: any) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function inc() {
    let number = document.querySelector('[name="number"]') as HTMLInputElement;
    if (number !== null) {
      number.value = (parseInt(number.value) + 1).toString();
    }
  }

  function dec() {
    let number = document.querySelector('[name="number"]') as HTMLInputElement;
    if (parseInt(number.value) > 0) {
      number.value = (parseInt(number.value) - 1).toString();
    }
  }

  return (
    <div className={`mt-5 border border-black w-20 h-32 sm:h-60 sm:w-52 md:h-96 md:w-80 lg:h-[450px] lg:w-[400px] shadow-xl`}>
      <div className="border-b border-black flex justify-center h-1/6 items-center">
        <p className={`font-['spectral'] text-[7px] sm:text-lg md:text-xl lg:text-2xl`}>{title}</p>
      </div>
      <div className="h-4/6 border-b border-black flex justify-center relative">
        <Image src={imageSrc} alt={altText} layout="fill" />
      </div>
      <div className="flex flex-row justify-center  h-1/6">
        <div className=" flex w-1/2 justify-center border-r border-black items-center">
          <p className={`font-['spectral'] font-black text-[8px] sm:text-lg md:text-xl lg:text-3xl`}>
            ${price}
          </p>
        </div>
        <div className="flex justify-center w-1/2 text-center items-center  ">
          <button onClick={openModal} className="font-['spectarl'] text-[7px] sm:text-lg md:text-xl lg:text-2xl">
            VIEW MORE
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="h-[90vh] w-1/2 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all">
                      <div>
                        <div className="p-6 mt-2 w-full flex">
                          <div className="relative h-[40vh] w-[75vh]">
                            <Image src={"/cookies1.png"} alt={"xxx"} fill />
                          </div>
                          <div className="ml-6">
                            <div className="flex flex-col justify-between">
                              <p className="font-['spectral'] text-2xl">
                                COOKIES
                              </p>
                              <p className="font-['spectral'] text-lg text-gray-500">
                                Indulge in the irresistible pleasure of our
                                handcrafted cookies, from classic.
                              </p>
                              <div className="flex justify-between my-10">
                                <p className="font-['spectral'] text-2xl font-bold">
                                  $9.99
                                </p>
                                <div className="w-[10vh] h-[7vh] flex border border-black">
                                  <input
                                    className="w-full outline-none p-3"
                                    name="number"
                                    type="text"
                                    readOnly
                                    value="0"
                                  />
                                  <div className="flex flex-col justify-between p-3">
                                    <button onClick={inc}>
                                      <IoIosArrowUp />
                                    </button>
                                    <button onClick={dec}>
                                      <IoIosArrowDown />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between gap-7">
                                <Link
                                  href="/cart"
                                  className="border border-black font-['spectral'] text-lg flex items-center justify-center w-1/2 h-[7vh]  "
                                >
                                  ADD TO CART
                                </Link>
                                <div className="flex justify-center items-center">
                                  <p className="font-['spectral'] text-2xl">
                                    TOTAL:
                                  </p>
                                  <p className="font-['spectral'] text-2xl font-bold">
                                    $9.99
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            className="inline-flex justify-center  px-4 py-2 text-3xl"
                            onClick={closeModal}
                          >
                            <CgCloseR />
                          </button>
                        </div>
                        <div className="h-1 w-full bg-gray-500"></div>
                        <div className="p-6 mt-2 w-full flex flex-col ">
                          <p
                            className="text-4xl mb-5"
                            style={{
                              fontFamily: "Butterfly Kids",
                            }}
                          >
                            Related Products
                          </p>
                          <div className="flex">
                            <div className="flex ">
                              {cardsData4.map((card, index) => (
                                <Image0
                                  source={card.imageSrc}
                                  altText={card.altText}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
}

export default Card;
