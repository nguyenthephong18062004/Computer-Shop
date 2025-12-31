import React from "react";
import { formatPrice } from "../../utils/formatPrice";

const ProductOrder = ({ data }) => {
  return (
    <div className="flex flex-col items-start mt-5 w-full">
      {data?.length > 0 &&
        data.map((item, index) => {
          const uniqueKey = item?.product?._id || item?.product?.id || `product-order-${index}`;
          const imageUrl = item?.product?.images?.[0];
          const isValidUrl = imageUrl && (imageUrl.startsWith('http://') || imageUrl.startsWith('https://') || (imageUrl.startsWith('/') && imageUrl.length > 1));
          const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
          
          return (
          <div
            className="flex items-start justify-between w-full"
            key={uniqueKey}
          >
            <div className="flex items-start gap-x-2">
              <img
                src={isValidUrl ? imageUrl : fallbackImage}
                alt={item?.product?.title || "Product image"}
                className="w-[120px] h-[120px] object-cover"
                onError={(e) => {
                  e.target.src = fallbackImage;
                }}
              />
              <div className="flex flex-col items-start gap-y-2">
                <span className="text-base font-medium">
                  {item?.product.title}
                </span>
                <span className="text-sm">SKU: {item?.product?._id}</span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-base font-medium">
                {formatPrice(item?.product?.promotion)}
              </span>
              <span className="text-sm line-through">
                {formatPrice(item?.product?.price)}
              </span>
              <span className="text-base font-medium">X{item?.quantity || 0}</span>
            </div>
          </div>
          );
        })}
    </div>
  );
};

export default ProductOrder;
