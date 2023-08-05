import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ServeLangItem from "../Helpers/ServeLangItem";

export default function TermsCondition({ datas }) {
  const { terms_conditions } = datas;
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="terms-condition-page w-full bg-white pb-[30px] min-h-screen">
        <div className="w-full mb-[30px]">
          <PageTitle
            breadcrumb={[
              { name: ServeLangItem()?.home, path: "/" },
              {
                name: ServeLangItem()?.Term_and_Conditions,
                path: "/terms-conditions",
              },
            ]}
            title="شرایط و ضوابط"
          />
        </div>
        <div className="w-full" dir="rtl">
          <div
            className="container-x mx-auto"
            
          >
          <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                شرایط همکاری با دیگر فروشگاهای اینترنتی
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                همکار برای پذیرش در سامانه همکاری در فروش باید شرایط و استاندارهای فنی ذیل را داشته باشد، در غیر اینصورت تایید نخواهد شد :

                <br/> – در صورت داشتن وب سایت از نظر طراحی و گرافیک وب، در سطح مطلوب باشد؛
        <br/>– وب سایت دارای پاپ آپ یا نمایش بیش از حد تبلیغات نباشد؛
        <br/>– وب سایت و یا شبکه اجتماعی دارای مطالب و محتوای کافی و آرشیو باشد؛
        <br/> – در زمان بررسی توسط مینی بیاب در دسترس باشد؛
        <br/> – جزو سایت‌های تجاری، چت روم‌ها، باکس‌ها و سایت‌های افزایش رتبه (Rank) و موارد مشابه نباشد .
        <br/> – حاوی اطلاعات ناقص و یا ناهمگون نباشد.
        <br/> – حاوی مطالب غیر اخلاقی و خلاف مصلحت عمومی نباشد.
        <br/> – فعالیت سیاسی نداشته باشد.
        <br/> – مطابق با قوانین و مقررات حاکم باشد.
              </p>
            </div>
          
           <div className="content-item w-full mb-10">

              <h2 className="text-[18px] font-medium text-qblack mb-5">
               شرایط و ضوابط وب سایت 
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
              شرایط و ضوابط وب سایت باید برای هر دو طرف منصفانه باشد.
               شما باید مواردی که مسئولیت آن با شماست و یا مواردی را که ممکن است باعث ایجاد 
              مشکل شوند، بیان کنید. اگر سخت‌گیری بیش از حد در قوانین تعیین شده داشته باشید، 
              هیچ کس با شما تجارت نخواهد کرد، بنابراین سعی کنید همه شرایط معقول و نرمال باشد.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
                شرایط خرید از وب سایت 
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7 mb-10">
              برای بسیاری از کسانی که خرید از برندهای شناخته شده و معتبر را در برنامه خود دارند، 
              همواره این دغدغه وجود دارد که بتوانند کالایی با اصالت و اورجینال را تهیه.
                <br />
                <br />
                باید دقت داشته باشید
                 برای انجام مراحل کاری سایت فروشگاهی خارجی مد نظرتان، از جمله شرایط و
                 نحوه خرید محصول و راه های پرداخت ارز ، هزینه ها و نحوه ارسال و یا حتی ..
              </p>
              <div>
                <h2 className="text-[18px] font-medium text-qblack mb-5">
                 شرایط ویژه کاربران 
                </h2>

                <ul className="list-disc ml-5">
                  <li className="text-[15px] text-qgraytwo leading-7">
                    مدت دوره ثبت نام متغیر است 
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    در قبال هر خرید در خرید بعدی 5 درصد تخفیف دریافت خواهید کرد 
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    خرید بالای دو میلیون تومان ارسال رایگان می باشد 
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                    امکان عودت کالا فراهم می باشد 
                  </li>
                </ul>
              </div>
            </div>

            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
               پیگیری مرسولات 
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
              در صورتی که شما هم از خرید اینترنتی استقبال می کنید، حتما با پست و
               رهگیری مرسوله پستی سر و کار داشته اید. شاید خریداری کردن یک وسیله از اینترنت کار ساده ای به ...
              
               رهگیری تیپاکس جهت پیگیری لحظه‌‌ای وضعیت بسته و پاکت ها در سراسر کشور 
               ایجاد ... قوانین جبران خسارت تیپاکس می‌توانید وارد صفحه جبران خسارت مرسوله پستی شوید.
              </p>
            </div>
            
           
          </div>
        </div>
      </div>
    </Layout>
  );
}
