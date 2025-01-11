import { useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import img from "../assets/image (3).webp";
import { IoIosStar } from "react-icons/io";
import { CiHeart } from "react-icons/ci";

const SearchPage = () => {
  const [sortType, setSortType] = useState("relevance");
  return (
    <main>
      <section className="flex gap-8 px-6 pt-6 w-screen justify-between">
        <div className="w-[18%]">
          <CategoryDropdown />
        </div>
        <div className="w-[100%]">
          <div className="flex justify-between w-[100%]">
            <div>
              <p className="text-gray-400 text-l">Result (28)</p>
            </div>
            <div>
              {" "}
              Sort by:{" "}
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="outline-none"
              >
                <option value="relevance">Relevance</option>
                <option value="price">Price</option>
                <option value="best-seller">Best Seller</option>
              </select>{" "}
            </div>
          </div>

          {/* Add products */}

          <div className="px-4 mt-8 grid grid-cols-4 gap-8">
            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>

            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>


            <div className="relative w-max flex flex-col items-center">
              <img src={img} alt="img" className="h-[250px]" />
              <div>
                <h3 className="text-[14px] font-semibold">COSRX The Retinol 0.1 Cream 20ml</h3>
                <p className="text-gray-600 text-[14px]">1 Varient</p>
                <div className="flex items-center text-rose-400">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <p className="text-black pl-2 text-[13px] font-semibold">4.0</p>
                </div>
                <h3 className="font-bold">Rs. 1677</h3>
              </div>
              <CiHeart className="absolute top-0 right-0 text-rose-500 text-lg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchPage;
