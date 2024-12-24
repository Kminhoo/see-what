export interface MusicalDetailData {
  mt20id: string;
  prfnm: string;
  prfpdfrom: string;
  prfpdto: string;
  fcltynm: string;
  prfstate: string;
  genrenm: string;
  sty: string;
  poster: string;
  prfruntime: string;
  prfage: string;
  prfcast: string;
  styurl: string;
}

export interface MusicalPageProps {
  params: {
    id: string;
  };
}
