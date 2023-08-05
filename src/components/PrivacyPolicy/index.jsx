import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import ServeLangItem from "../Helpers/ServeLangItem";

export default function PrivacyPolicy({ datas }) {
  const { privacyPolicy } = datas;
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="terms-condition-page w-full bg-white pb-[30px] min-h-screen">
        <div className="w-full mb-[30px]">
          <PageTitle
            breadcrumb={[
              { name: ServeLangItem()?.home, path: "/" },
              { name: ServeLangItem()?.Privacy_Policy, path: "privacy-policy" },
            ]}
            title=" شرایط و ضوابط"
          />
        </div>
        <div className="w-full">
          <div className="container-x mx-auto" style={{direction : "rtl"}}>
            {/* {privacyPolicy && (
              <div
                dangerouslySetInnerHTML={{
                  __html: privacyPolicy.privacy_policy,
                }}
              ></div>
            )} */}
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
              1. شرایط و ضوابط چیست؟
              
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
              هر سازمان یا شرکتی برای ایجاد نظم و انضباط کاری در فرآیند امور ذاتی 
              خود نیاز به تدوین برنامه‌ای راهبردی تحت عنوان آیین‌نامه و یا نظام‌نامه دارد
               که نظام‌نامه به‌طور عام و آیین‌نامه به‌طور خاص فارغ از قوانین بالادستی مانند
               : قانون کار ، قانون مالیاتی و قانون تجارت ، شامل قوانین و مقرراتی می‌باشد که با قوانین عام و 
               خاص نه تنها منافاتی نداشته، بلکه به یکایک حوزه‌ها و واحدهای سازمانی
               و کارکنان شاغل در آن کمک می‌کند که نحوه رفتار سازمانی (چه رفتار بین واحدها و چه 
               رفتار بین کارکنان) تعریف شده و فاقد نکات مبهم بوده و در پیشبرد اهداف غایی سازمان
               نیز مثمر ثمر باشد.
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
              2. شرایط و ضوابط تجارت الکترونیک 
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7 mb-10">
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
                با سایت خود تعامل کنید در اینجا برخی از مزایای عمده آن آورده شده است
                از جمله شرایط و ضوابط در سایت تجارت الکترونیک شما:
                <br />
                <br />
                نه تنها از پنج قرن، بلکه در جهش به آن جان سالم به در برده است
                حروف چینی الکترونیکی، اساساً بدون تغییر باقی مانده است. 
              </p>
              <div>
                <h2 className="text-[18px] font-medium text-qblack mb-5">
                2. آیا فروشگاه آنلاین من به شرایط و ضوابط نیاز دارد؟
                </h2>

                <ul className="list-disc ml-5">
                  <li className="text-[15px] text-qgraytwo leading-7">
                  بدنه باریک با روکش فلزی
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                  آخرین پردازنده Intel Core i5-1135G7 (4 هسته / 8 رشته)
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                  رم 8 گیگابایتی DDR4 و SSD سریع 512 گیگابایتی PCIe
                  </li>
                  <li className="text-[15px] text-qgraytwo leading-7">
                  کارت گرافیک NVIDIA GeForce MX350 2GB GDDR5 دارای نور پس زمینه
                    صفحه کلید، پد لمسی با پشتیبانی از حرکات
                  </li>
                </ul>
              </div>
            </div>

            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
              3. الگوی شرایط و ضوابط تجارت الکترونیک [رایگان]
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
               
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
              4. مواردی که باید در شرایط و ضوابط فروشگاه های آنلاین گنجانده شود
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
               
                <br />
                <br />
                
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
               
              </p>
            </div>
            <div className="content-item w-full mb-10">
              <h2 className="text-[18px] font-medium text-qblack mb-5">
              5. قیمت گذاری و شرایط پرداخت
              </h2>
              <p className="text-[15px] text-qgraytwo leading-7">
                
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
               
                <br />
                <br />
                
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
               
                <br />
                <br />
                
              در حالی که از نظر قانونی برای وب سایت های تجارت الکترونیک الزامی نیست
                شرایط و ضوابط قرارداد، اضافه کردن یکی به محافظت کمک می کند
                کسب و کار آنلاین شما. همانطور که شرایط و ضوابط قانونی هستند
                قوانین قابل اجرا، آنها به شما امکان می دهند 
                استانداردهایی را برای نحوه استفاده از کاربران تعیین کنید
               
              </p>
            </div> 
            {/* {privacyPolicy && privacyPolicy.privacy_policy} */}
           
          </div>
        </div>
      </div>
    </Layout>
  );
}
