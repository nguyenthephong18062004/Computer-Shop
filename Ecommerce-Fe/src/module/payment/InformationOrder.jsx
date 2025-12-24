import React from "react";
import { formatPrice } from "../../utils/formatPrice";
import slugify from "slugify";
import { useNavigate } from "react-router-dom";
const InformationOrder = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = slugify(data?.product?.title, { strict: true });
    navigate(`/${path}/${data.id}`);
  };
  const imageUrl = data?.product?.images?.[0];
  const isValidUrl = imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://') || (imageUrl.startsWith('/') && imageUrl.length > 1));
  const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

  return (
    <div className="flex items-center justify-between px-5 gap-x-5 py-5">
      <img
        src={isValidUrl ? imageUrl : fallbackImage}
        alt={data?.product?.title || "Product image"}
        className="w-[80px] h-[80px] border-2 border-solid object-cover"
        onError={(e) => {
          e.target.src = fallbackImage;
        }}
      />
      <div className="flex flex-col justify-start items-start">
        <span
          className="text-sm line-clamp-2 hover:text-blue-800 cursor-pointer font-medium"
          onClick={handleClick}
          title={data?.product?.title || "Sản phẩm"}
        >
          {data?.product?.title || "Sản phẩm"}
        </span>
        <span className="text-sm text-[#a28faa]">
          Số lượng: {data?.quantity || 0}
        </span>
        <span className="text-base font-semibold text-blue-700">
          {formatPrice(data?.product?.promotion || 0)}
        </span>
        <span className="text-sm text-[#a28faa] line-through">
          {formatPrice(data?.product?.price || 0)}
        </span>
      </div>
    </div>
  );
};

export default InformationOrder;
