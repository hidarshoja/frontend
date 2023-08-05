import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import settings from "../../../utils/settings";
import Commafy from "../Commafy/Commafy";

function CheckProductIsExistsInFlashSale({
  id,
  price,
  sign = true,
  className,
}) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const [flashSale, setData] = useState(null);
  const [calPrice, setPrice] = useState(null);
  useEffect(() => {
    if (websiteSetup) {
      setData({
        flashSale: websiteSetup.payload.flashSale,
        flashSaleActive: websiteSetup.payload.flashSaleActive,
        flashSaleProducts: websiteSetup.payload.flashSaleProducts,
      });
    }
  }, [websiteSetup]);
  const calcProductPrice = (id, price) => {
    // console.log(id, price);
    // console.log(flashSale);
    if (flashSale && flashSale.flashSaleActive) {
      const getId = flashSale.flashSaleProducts.find(
        (item) => parseInt(item.product_id) === parseInt(id)
      );
      if (getId) {
        const offer = parseInt(flashSale.flashSale.offer);
        const discountPrice = (offer / 100) * price;
        const mainPrice = parseFloat(price) - discountPrice;
        setPrice(mainPrice);
      } else {
        setPrice(price);
      }
    } else {
      setPrice(price);
    }
  };
  useEffect(() => {
    if (id && price) {
      calcProductPrice(id, price);
    }
  });

  
  const { currency_icon } = settings();
  // if (sign) {
   //return " " + parseFloat(calPrice).toFixed(3) + " " + "  تومان   ";
   return  Number(12500000).toLocaleString()+ " " + "  تومان   ";
  //  return  Number(calPrice).toLocaleString()+ " " + "  تومان   ";
  // return " " +  Commafy(calPrice) + " " + "  تومان   ";
  // return currency_icon ? parseFloat(calPrice).toFixed(3);
      // + " تومان " :  parseFloat(calPrice).toFixed(3) + " تومان " ;
  // } else {
  //   return parseFloat(calPrice).toFixed(6);
  // }
}

export default CheckProductIsExistsInFlashSale;

//(27 * 20 /100)-27

//offer =(20/100*price)
//total=price-offer