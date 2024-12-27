interface ArrowProps {
  fill?: string;
}

export const NextArrow = ({ fill = '#515151' }: ArrowProps) => {
  return (
    <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"
        fill={fill}
      />
    </svg>
  );
};

export const PrevArrow = ({ fill = '#515151' }: ArrowProps) => {
  return (
    <svg height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,0.8c0.878,0.877,0.878,2.316,0,3.194  L13.968,16l7.315,7.315c0.878,0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,14.748,7.701,14.276z"
        fill={fill}
      />
    </svg>
  );
};

export const RightArrows = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="160,115.4 180.7,96 352,256 180.7,416 160,396.7 310.5,256 " />
    </svg>
  );
};

export const LeftArrow = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
    </svg>
  );
};

export const DownArrow = ({ className }: { className: string }) => {
  return (
    <svg className={className} version="1.1" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <g id="Layer_1">
        <path d="M25,49c13.233,0,24-10.767,24-24S38.233,1,25,1S1,11.767,1,25S11.767,49,25,49z M25,3c12.131,0,22,9.869,22,22   s-9.869,22-22,22S3,37.131,3,25S12.869,3,25,3z" />
        <polygon points="39.707,20.707 38.293,19.293 25,32.586 11.707,19.293 10.293,20.707 25,35.414  " />
      </g>
      <g />
    </svg>
  );
};
