// 뮤지컬 상세 API and 뮤지컬 수상작 목록 API type
export interface Musical {
  mt20id: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  fcltynm: string;
  poster: string;
  area?: string;
  genrenm: string;
  openrun?: string;
  prfstate: string;
  awards?: string | string[];
}
