interface RestaurantIconProps {
    width?: string;
    height?: string;
    color?: string;
  }
  
  export const RestaurantIcon = ({
    width = '50px',
    height = '50px',
    color = 'white',
  }: RestaurantIconProps) => {
    return (
      <svg
        id="Layer_1"
        style={{ enableBackground: 'new 0 0 30 30' }}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        fill={color}
      >
        <path d="M23,19l-3.328-3.232C19.239,15.273,19,14.637,19,13.98V12c0-4.945,3.157-9.535,3.157-9.535L23,2.999V19z" />
        <circle cx="23" cy="3" r="1" />
        <path d="M24,3h-2l-1,10v13.5c0,0.828,0.672,1.5,1.5,1.5h0c0.828,0,1.5-0.672,1.5-1.5V3z" />
        <path d="M13.087,2.445C13.037,2.186,12.811,2,12.548,2C12.245,2,12,2.245,12,2.548v5.807C12,8.711,11.711,9,11.355,9  c-0.329,0-0.605-0.247-0.641-0.574l-0.66-5.939C10.023,2.21,9.789,2,9.509,2H9.5H9.491C9.211,2,8.977,2.21,8.946,2.488l-0.66,5.939  C8.25,8.753,7.974,9,7.645,9C7.289,9,7,8.711,7,8.355V2.548C7,2.245,6.755,2,6.452,2C6.189,2,5.963,2.186,5.913,2.445  C5.671,3.713,5,7.362,5,9c0,4,3,5,3,5v12.5C8,27.328,8.672,28,9.5,28s1.5-0.672,1.5-1.5V14c0,0,3-1,3-5  C14,7.362,13.329,3.713,13.087,2.445z" />
      </svg>
    );
  };