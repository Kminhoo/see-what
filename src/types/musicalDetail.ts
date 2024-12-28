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
  entrpsnm: string;
  entrpsnmP: string;
  prfcrew: string;
  prfcast: string;
  styurls: string[];
}

export interface MusicalPageProps {
  params: {
    id: string;
  };
}

export interface TabProps {
  tabs: string[];
  children: React.ReactNode[];
}
