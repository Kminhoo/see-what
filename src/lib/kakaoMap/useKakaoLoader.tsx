"use client"

import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    const appkey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;

    if(!appkey) {
      throw new Error("KaKao API Key is missing.")
    }
    
  useKakaoLoaderOrigin({
    appkey,
    libraries: ["clusterer", "drawing", "services"],
  })
}
