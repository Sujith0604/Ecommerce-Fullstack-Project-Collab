import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const CategoryDropdown = () => {
  const [rating, setRating] = useState(false);
  const [brand, setBrand] = useState(false)
  return (
    <div>
      <div>
        <p className="text-gray-500 text-sm">Filter</p>
        <div onClick={() => setRating(!rating)} className="flex items-center justify-between py-2">
          <p className="font-semibold">Rating</p>
          <FaAngleDown className="font-thin text-lg"/>
        </div>
        {rating && (
          <div>
            <div className="flex items-center gap-2">
              <div>
                <input type="radio" />
              </div>
              <div className="flex">
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
              </div>
              <div>
                <p>4 & up (120)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input type="radio" />
              </div>
              <div className="flex">
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
              </div>
              <div>
                <p>4 & up (120)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input type="radio" />
              </div>
              <div className="flex">
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
              </div>
              <div>
                <p>4 & up (120)</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input type="radio" />
              </div>
              <div className="flex">
                <IoIosStar className="text-yellow-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
                <IoIosStar className="text-gray-400 text-[14px]" />
              </div>
              <div>
                <p>4 & up (120)</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div>
        <div onClick={() => setBrand(!brand)} className="flex items-center justify-between py-2">
          <p className="font-semibold">Brand</p>
          <FaAngleDown />
        </div>
        {brand && (
          <div>
            <div className="flex items-center gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <p>Cosrx</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <p>Beauty of Joseon</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <p>Dear Klairs</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <input type="checkbox" />
              </div>
              <div>
                <p>By Wishtrend</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
    </div>
  );
};

export default CategoryDropdown;
