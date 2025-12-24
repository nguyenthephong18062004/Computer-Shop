import React from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    const path = slugify(data?.product?.title, { strict: true });
    navigate(`/${path}/${data?.id}`);
  };
  const imageUrl = data?.product?.images?.[0];
  const isValidUrl = imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://') || (imageUrl.startsWith('/') && imageUrl.length > 1));
  const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";

  return (
    <div className="flex items-center justify-start gap-x-3">
      <img
        src={isValidUrl ? imageUrl : fallbackImage}
        alt={data?.product?.title || "Product image"}
        className="w-[100px] h-[100px] object-cover border-2 border-solid"
        onError={(e) => {
          e.target.src = fallbackImage;
        }}
      />
      <div className="flex flex-col items-start flex-wrap gap-y-1">
        <span
          className="text-base font-medium hover:text-blue-800 cursor-pointer line-clamp-2"
          title={data?.product?.title || "Sản phẩm"}
          onClick={handleClick}
        >
          {data?.product?.title || "Sản phẩm"}
        </span>
        <span className="text-sm text-[#8e8db7]">SKU: {data?.product?.id || "N/A"}</span>
        <span className="text-orange-500 text-sm font-medium">
          Chỉ còn {data?.product?.inventory || 0} sản phẩm{" "}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
