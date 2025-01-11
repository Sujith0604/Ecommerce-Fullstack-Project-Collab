import { useState } from "react";
import { IconStar } from "../components/IconStar";

const ProductDetailPage = () => {
  const [details, setDetails] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handleDetails = (details) => {
    setDetails(details);
  };

  const handleImage = (imageUrl) => {
    setImageUrl(imageUrl);
  };

  return (
    <div className="flex flex-col gap-11 ">
      <div className=" w-full h-full grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center  ">
        <div className="  w-full h-full grid md:grid-cols-2 grid-cols-1 place-content-center place-items-center ">
          <div className=" flex flex-col gap-2 w-full justify-center items-center ">
            <img
              onClick={() => handleImage("/images/1.jpg")}
              className=" lg:h-[200px] h-[100px]"
              src="/images/1.jpg"
            />
            <img
              onClick={() => handleImage("/images/2.jpg")}
              className=" lg:h-[200px] h-[100px]"
              src="/images/2.jpg"
            />
            <img
              onClick={() => handleImage("/images/Product.webp")}
              className=" lg:h-[200px] h-[100px]"
              src="/images/Product.webp"
            />
          </div>
          <div className=" flex flex-col  gap-2">
            {imageUrl ? (
              <img src={imageUrl} className=" lg:h-[400px]" />
            ) : (
              <img className=" lg:h-[400px] " src="/images/Product.webp" />
            )}
          </div>
        </div>

        <div className=" w-full  justify-center flex flex-col h-full  gap-5 px-2">
          <h1 className="text-2xl">
            COSRX Acne Pimple Master Patch (24 Pimple Patches)
          </h1>
          <p>Earn 40 Reward Points</p>

          <p className=" flex gap-2">
            <span>
              <del className=" text-gray-500">₹280 </del>
            </span>
            <span>₹199</span>
          </p>
          <p className=" text-gray-500">Inclusive of all taxes</p>

          <div className=" flex items-center">
            {" "}
            <IconStar /> <IconStar /> <IconStar /> <IconStar /> <IconStar />{" "}
            <p>445 Reviews</p>
          </div>

          <div className=" flex">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button className="px-4 py-2 text-white bg-black ">
              Add to Cart
            </button>
          </div>

          <div className=" flex flex-col h-full  gap-5">
            <ul className=" flex gap-5">
              <li
                className=" hover:cursor-pointer"
                onClick={() => handleDetails("description")}
              >
                Description
              </li>
              <li
                className=" hover:cursor-pointer"
                onClick={() => handleDetails("ingrediants")}
              >
                Ingrediants
              </li>
              <li
                className=" hover:cursor-pointer"
                onClick={() => handleDetails("howtouse")}
              >
                How to use
              </li>
              <li
                className=" hover:cursor-pointer"
                onClick={() => handleDetails("shipping")}
              >
                Shipping & Handling
              </li>
            </ul>
            {details === "description" && (
              <p className=" text-gray-500">
                This is a gentle acne patch made with natural ingredients that
                contain essential ingredients for your skin to recover and clear
                up acne. It's safe for everyone, including pregnant women and
                people with sensitive skin. This product is made with organic
                ingredients and certified fair trade.
              </p>
            )}
            {details === "ingrediants" && (
              <p className=" text-gray-500">
                Ingredients: Snail Secretion Filtrate, Betaine, Caprylic/Capric
                Triglyceride, Cetearyl Olivate, Sorbitan Olivate, Sodium
                Hyaluronate, Cetearyl Alcohol, stearic acid, Arginine,
                Dimethicone, Carbomer, Panthenol, Allantoin, Sodium
                Polyacrylate, Xanthan Gum, Ethyl Hexanediol, Adenosine,
                Phenoxyethanol.
              </p>
            )}
            {details === "howtouse" && (
              <p className=" text-gray-500">
                To use this acne patch, apply it to your skin and rub it gently
                with a soft cloth or face mask. Leave it on for about 15-20
                minutes and wash it off with a warm washcloth.
              </p>
            )}
            {details === "shipping" && (
              <p className=" text-gray-500">
                Shipping and handling fees are included in the price of this
                product. Please note that there may be additional shipping fees
                depending on your location.
              </p>
            )}
          </div>
        </div>
      </div>

      <div className=" flex items-center justify-center w-full ">
        <div className=" flex flex-col gap-5 items-center justify-center w-[80%]">
          <div className=" flex gap-2 flex-col items-center justify-center">
            <h1 className=" text-xl font-bold">Category</h1>
            <p className=" text-sm text-center text-pink-400">
              Cosrx, Essence Toner & serum, Effective Acne Skin Care Products,
              Best Anti-Aging Products Online, Hydration, Pigmentation Skin Care
              Products, Facial Redness Reducing Products, Sensitive Skin
              Products, All
            </p>
          </div>

          <div className=" flex gap-2  flex-col  items-center justify-center">
            <h1 className=" text-xl font-bold">Tags</h1>
            <p className=" text-sm text-center text-pink-400">
              BB ANNIVERSARY SALE, Best Acne Care, Bestsellers, Bestselling
              Skincare Under 999, Combination and Dehydrated, Cosrx Advanced
              Snail, COSRX Snail Mucin, Dry and Acne, Dry Skin With Acne Routine
              (Winter Edition), Festive Sale | Best Deals, Fragrance Free, Rice
              Toner Best Paired With, Snail Mucin, Vegan Beauty
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-5  p-4">
        <h1 className=" text-2xl font-bold ">Similar Products</h1>
        <div className=" flex items-center justify-around flex-wrap">
          <div className=" flex flex-col gap-2 p-2 border ">
            <img
              className=" w-full h-[300px]"
              src="/images/1.jpg"
              alt="Product 1"
            />
            <h1 className=" text-xl font-bold">Product 1</h1>
            <p className=" text-gray-600">Womens Beauty collection</p>
            <p className=" flex gap-2">
              <span>
                <del className=" text-gray-500">₹280 </del>
              </span>
              <span>₹199</span>
            </p>
            <button className="px-4 py-2 text-white bg-black ">
              Add to Cart
            </button>
          </div>

          <div className=" flex flex-col gap-2 p-2 border ">
            <img
              className=" w-full h-[300px]"
              src="/images/1.jpg"
              alt="Product 1"
            />
            <h1 className=" text-xl font-bold">Product 1</h1>
            <p className=" text-gray-600">Womens Beauty collection</p>
            <p className=" flex gap-2">
              <span>
                <del className=" text-gray-500">₹280 </del>
              </span>
              <span>₹199</span>
            </p>
            <button className="px-4 py-2 text-white bg-black ">
              Add to Cart
            </button>
          </div>

          <div className=" flex flex-col gap-2 p-2 border ">
            <img
              className=" w-full h-[300px]"
              src="/images/1.jpg"
              alt="Product 1"
            />
            <h1 className=" text-xl font-bold">Product 1</h1>
            <p className=" text-gray-600">Womens Beauty collection</p>
            <p className=" flex gap-2">
              <span>
                <del className=" text-gray-500">₹280 </del>
              </span>
              <span>₹199</span>
            </p>
            <button className="px-4 py-2 text-white bg-black ">
              Add to Cart
            </button>
          </div>

          <div className=" flex flex-col gap-2 p-2 border ">
            <img
              className=" w-full h-[300px]"
              src="/images/1.jpg"
              alt="Product 1"
            />
            <h1 className=" text-xl font-bold">Product 1</h1>
            <p className=" text-gray-600">Womens Beauty collection</p>
            <p className=" flex gap-2">
              <span>
                <del className=" text-gray-500">₹280 </del>
              </span>
              <span>₹199</span>
            </p>
            <button className="px-4 py-2 text-white bg-black ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
