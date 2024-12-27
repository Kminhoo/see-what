import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    const appkey = process.env.NEXT_PUBLIC_KAKAOMAP_KEY;
    
  useKakaoLoaderOrigin({
    appkey,
    libraries: ["clusterer", "drawing", "services"],
  })
}
