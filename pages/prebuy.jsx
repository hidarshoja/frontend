
import PageHead from "../src/components/Helpers/PageHead";
import Layout from "../src/components/Partials/Layout";
import { useState } from "react";



function Account () { 
  
  const[account , setAccount] = useState(true);
  const[addToCart , setAddToCart] = useState(false);
  const[ completionOrder , setCompletionOrder] = useState(false);
  const [payment , setPayment] = useState(false);
  const [addressInput , setAddressInput] = useState("");
  const [priceInput , setPriceInput ] = useState(null);
  const [weightInput , setWeightInput] = useState(null);
  const [numberInput , setNumberInput] = useState(null);
  const[description , setDescription] = useState(null);


  const clickHandler = () => {
    setAccount(false);
    setAddToCart(true);
  }

  const addToCartFun = () => {
    setAccount(false);
    setAddToCart(false);
    setCompletionOrder(true);
  }
  const addToCartFunBack = () => {
    setAccount(true);
    setAddToCart(false);
    setCompletionOrder(false);
  }


  const OrderCompletion = () => {
    setAccount(false);
    setAddToCart(false);
    setCompletionOrder(false);
    setPayment(true)
  }
  const OrderCompletionBack = () => {
    setAccount(false);
    setAddToCart(true);
    setCompletionOrder(false);
    setPayment(false)
  }

  const paymentBtn = () => {
    alert("شما به درگاه بانک رفتید")
  }
  const paymentBtnBack = () => {
    setAccount(false);
    setAddToCart(false);
    setCompletionOrder(true);
    setPayment(false)
  }


  return (
    <>
      <PageHead title="Tracking order" />
      <Layout childrenClasses="pt-0 pb-0">
      {
        account && (
          <div className='flex justify-between flex-col items-center gap-5  w-4/5 h-[750px] lg:flex-row-reverse  lg:h-96 mx-auto my-16 bg-white rounded-md shadow-xl shadow-slate-400 border-2 border-orange-100 p-2'>
            <div className='flex flex-col gap-4 w-[90%] lg:w-[65%]' dir='rtl'>
                 <div className='flex flex-col'>
                    <label>لینک محصول</label>
                    <input type="text" value={addressInput} onChange={(e) => {setAddressInput(e.target.value)}} placeholder='لینک محصول خود را وارد کنید ' className='p-3 outline-none rounded text-xs  shadow-inner shadow-gray-400'/>
                 </div>
                 <div className='flex gap-2 w-full flex-col  lg:flex-row'>
                    <div className='flex flex-col w-full'>
                      <label> قیمت</label>
                      <input type="number" value={priceInput} onChange={(e) => {setPriceInput(e.target.value)}} placeholder='قیمت محصول خود را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label> وزن</label>
                      <input type="number" value={weightInput} onChange={(e) => {setWeightInput(e.target.value)}} placeholder='وزن تقریبی محصول را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label> تعداد</label>
                      <input type="number" value={numberInput} onChange={(e) => {setNumberInput(e.target.value)}} placeholder='تعداد محصول مورد نظر را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                    </div>
                 </div>
                 <div className='flex flex-col'>
                    <label> توضیحات</label>
                    <input type="text" value={description} onChange={(e) => {setDescription(e.target.value)}} placeholder='توضیحات رنگ ، سایز و ... محصول ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                 </div>
                 <div>
                   <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={clickHandler} >
                       محاسبه قیمت 
                    </button>
                 </div>
            </div>
            <div dir='rtl' className='flex flex-col gap-10 w-[90%] lg:w-[35%] bg-slate-200 h-72 p-2 rounded'>
            <h1 className='text-xl'>راهنمای خرید </h1>
            <p className='text-sm'>
                ابتدا لینک محصول خود را از سایت های مورد نظر کپی کرده و در همین فرم وارد کنید . قیمت 
                و وزن حدودی محصول را هم وارد کنید و با کلیک بر روی دکمه محاسبه قیمت ، قیمت نهایی آنرا 
                مشاهده و با کلیک بر روی دکمه افزودن به سبد خرید ، آنرا به سبد خرید خود اضافه 
                و پس از بررسی روی دکمه تکمیل سفارش کلیک کنید 
            </p>
            </div>      
    </div>
        ) 
      }
      {
        addToCart && (
          <div className='flex justify-center lg:justify-between flex-col items-center gap-5 w-4/5 h-[1000px] lg:flex-row-reverse  lg:h-[420px] mx-auto my-16 bg-white rounded-md shadow-xl shadow-slate-400 border-2 border-orange-100 p-2'>
             <div className='flex flex-col gap-4 w-[90%] lg:w-[65%]' dir='rtl'>
                 <div className='flex flex-col'>
                    <label>لینک محصول</label>
                    <input type="text" value={addressInput} placeholder='لینک محصول خود را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                 </div>
                 <div className='flex gap-2 w-full flex-col lg:flex-row'>
                    <div className='flex flex-col w-full'>
                      <label> قیمت</label>
                      <input type="number" value={priceInput} placeholder='قیمت محصول خود را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label> وزن</label>
                      <input type="number" value={weightInput} placeholder='وزن تقریبی محصول را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                    </div>
                    <div className='flex flex-col w-full'>
                      <label> تعداد</label>
                      <input type="number" value={numberInput} placeholder='تعداد محصول مورد نظر را وارد کنید ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                    </div>
                 </div>
                 <div className='flex flex-col'>
                    <label> توضیحات</label>
                    <input type="text" value={description} placeholder='توضیحات رنگ ، سایز و ... محصول ' className='p-3 outline-none rounded text-xs shadow-inner shadow-gray-400'/>
                 </div>
                 <div>
                   <button className='w-64 h-12   bg-white rounded border-2 border-neutral-400 opacity-80 cursor-auto' >
                       محاسبه قیمت 
                    </button>
                 </div>
                 <div>
                    <p>
                     قیمت نهایی محصول :
                    <span className="text-[red]"> 30,000,000</span>
                    تومان
                    </p>
                 </div>
                 <div className="flex gap-2">
                 <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={addToCartFunBack}>
                     بازگشت به مرحله قبل
                    </button>
                   <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={addToCartFun}>
                       افزودن به سبد خرید 
                    </button>
                    
                 </div>
             </div>
            <div dir='rtl' className='flex flex-col w-[90%] lg:w-[35%]  p-2 rounded'>
                <img src="/assets/images/sidebarBannerTwo.png" alt="play"/>
            </div> 
         </div>
        )
      }
      {
        completionOrder && (
          <div className="w-4/5  h-[450px] lg:h-96  bg-white rounded-md shadow-xl shadow-slate-400 border-2 border-orange-100 mx-auto my-16">
             <div className='flex flex-col lg:flex-row-reverse justify-around items-center gap-3 w-4/5 h-48 mx-auto mt-16 bg-slate-100 rounded-md shadow-xl shadow-slate-400 border-2 border-orange-100 p-2'>
             <div className="w-[20%] rounded-md overflow-hidden">
                   <img src="/assets/images/sidebarBannerTwo.png" alt="play"/>
             </div>
               <div className="w-[70%]" dir="rtl">
                   <h1>{addressInput}</h1>
                   <p> وزن :  <span> {weightInput}</span> گرم</p>
                   <p> تعداد : <span> {numberInput} </span> عدد </p>
                   <p> توضیحات : <span> {description}</span></p>
               </div>
             </div>
             <div className=" lg:ml-[110px] mt-2 flex flex-col gap-3 items-center  lg:items-start">
                       <p> قیمت نهایی محصول :  <span className="text-[red]"> 30,000,000</span> تومان</p>
                 <div className="flex flex-col-reverse lg:flex-row gap-2">
                   <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={OrderCompletion} >
                      تکمیل سفارش 
                    </button>
                    <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={OrderCompletionBack}>
                        بازگشت به مرحله قبل
                    </button> 
                 </div>     
             </div>
          </div>
        )
      }
      {
        payment && (
          <div className="w-4/5 h-[550px] lg:h-[450px]  bg-white rounded-md shadow-xl shadow-slate-400 border-2 border-orange-100 mx-auto my-16">
             <div dir="rtl" className="mt-5 mx-auto w-[80%] h-[100px]  bg-slate-100 rounded-md shadow-xl shadow-slate-200 border-2 border-orange-100 p-3">
                 <h1>آدرس شما </h1>
                 <input type="text" placeholder="آدرس خود را وارد کنید " className="w-full p-2 outline-none rounded-sm"/>
             </div>
             <div className='flex flex-col lg:flex-row-reverse justify-around items-center gap-3 w-4/5 h-48 mx-auto mt-4 bg-slate-100 rounded-md shadow-xl shadow-slate-400 border-2 border-orange-100 p-2'>
               <div className="w-[20%] rounded-md overflow-hidden">
                   <img src="/assets/images/sidebarBannerTwo.png" alt="play"/>
               </div>
             <div className="w-[70%]" dir="rtl">
                 <h1>{addressInput}</h1>
                 <p> وزن :  <span> {weightInput} </span> گرم</p>
                 <p> تعداد : <span> {numberInput} </span> عدد </p>
                 <p> توضیحات : <span>{description}  </span></p>
             </div>

             </div>
             <div className=" lg:ml-[110px] mt-2 flex flex-col gap-3 items-center  lg:items-start">
                 <p> قیمت نهایی محصول :  <span className="text-[red]"> 30,000,000</span> تومان</p>
                 <div className="flex flex-col-reverse lg:flex-row gap-2">
                    <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={paymentBtn} >
                     پرداخت 
                    </button>
                    <button className='w-64 h-12   bg-amber-300 rounded hover:bg-amber-400  hover:text-[white]' onClick={paymentBtnBack}>
                     بازگشت به مرحله قبل
                    </button>
                 </div>
             </div>
          </div>
        )
      }
      </Layout>
    </>
  );
}

export default Account;
