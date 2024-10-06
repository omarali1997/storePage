'use client'
import Image from "next/image";
import Lnik from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        router.push('https://apps.apple.com/jo/app/kooler-%D9%83%D9%88%D9%84%D8%B1/id6526497412');
    } else if (/android/i.test(userAgent)) {
        router.push('https://play.google.com/store/apps/details?id=com.kooler.water_user&pcampaignid=web_share');
    } else {
        router.push('https://store-page-two.vercel.app/');
    }
}, []);
  return (
    <div className="flex flex-col justify-center mt-20 ">
     <Image className="m-auto mt-5" src="/image.png" alt="Vercel Logo" width={100} height={24} />
     <h1 className="m-auto mt-5 text-[#145DAA] text-[30px] font-sans">اطلب ماء وحاجيات
     </h1>
     <h1 className="m-auto text-[#145DAA] text-[30px] font-sans">نزل التطبيق</h1>
     <Lnik className="m-auto mt-5" href="https://apps.apple.com/jo/app/kooler/id6526497412" target="_blank">
     
     <Image className="m-auto mt-5" src="/App Store.png" alt="Vercel Logo" width={250} height={24} />
     
     </Lnik> 

      <Lnik className="m-auto mt-2" href="https://play.google.com/store/apps/details?id=com.kooler.water_user&pcampaignid=web_share" target="_blank">
     <Image className="m-auto mt-2" src="/Google Play.png" alt="Vercel Logo" width={250} height={24} />
      </Lnik>     
      

    </div>
  );
}
