const BrandCard = ({ brand }) => {
  return (
    <div className=" h-[300px] w-[300px] border flex flex-col items-center justify-center ">
      <img src={brand.imageUrl} alt={brand.title} />
      <h3>{brand.title}</h3>
    </div>
  );
};

export default BrandCard;
