import Image from "next/image";
import Lnik from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center mt-20 ">
     <Image className="m-auto mt-5" src="/image.png" alt="Vercel Logo" width={100} height={24} />
     <h1 className="m-auto mt-5 text-[#145DAA] text-[30px] font-sans">اطلب ماء وحاجيات
     </h1>
     <h1 className="m-auto text-[#145DAA] text-[30px] font-sans">نزل التطبيق</h1>
     <Lnik className="m-auto mt-5" href="https://apps.apple.com/jo/app/kooler/id6526497412" target="_blank">
     
     <Image className="m-auto mt-5" src="/App Store.png" alt="Vercel Logo" width={300} height={24} />
     
     </Lnik> 

      <Lnik className="m-auto mt-5" href="https://play.google.com/store/apps/details?id=com.kooler.water_user&pcampaignid=web_share" target="_blank">
     <Image className="m-auto mt-5" src="/Google Play.png" alt="Vercel Logo" width={300} height={24} />
      </Lnik>     

    </div>
  );
}
