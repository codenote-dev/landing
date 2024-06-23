export const AddToChromeButton = () => {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        height="24"
        width="24"
      >
        <defs>
          <linearGradient
            id="a"
            x1="3.2173"
            y1="15"
            x2="44.7812"
            y2="15"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#d93025"></stop>
            <stop offset="1" stop-color="#ea4335"></stop>
          </linearGradient>
          <linearGradient
            id="b"
            x1="20.7219"
            y1="47.6791"
            x2="41.5039"
            y2="11.6837"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#fcc934"></stop>
            <stop offset="1" stop-color="#fbbc04"></stop>
          </linearGradient>
          <linearGradient
            id="c"
            x1="26.5981"
            y1="46.5015"
            x2="5.8161"
            y2="10.506"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#1e8e3e"></stop>
            <stop offset="1" stop-color="#34a853"></stop>
          </linearGradient>
        </defs>
        <circle cx="24" cy="23.9947" r="12" style="fill:#fff">
        </circle>
        <path
          d="M3.2154,36A24,24,0,1,0,12,3.2154,24,24,0,0,0,3.2154,36ZM34.3923,18A12,12,0,1,1,18,13.6077,12,12,0,0,1,34.3923,18Z"
          style="fill:none"
        >
        </path>
        <path
          d="M24,12H44.7812a23.9939,23.9939,0,0,0-41.5639.0029L13.6079,30l.0093-.0024A11.9852,11.9852,0,0,1,24,12Z"
          style="fill:url(#a)"
        >
        </path>
        <circle cx="24" cy="24" r="9.5" style="fill:#1a73e8"></circle>
        <path
          d="M34.3913,30.0029,24.0007,48A23.994,23.994,0,0,0,44.78,12.0031H23.9989l-.0025.0093A11.985,11.985,0,0,1,34.3913,30.0029Z"
          style="fill:url(#b)"
        >
        </path>
        <path
          d="M13.6086,30.0031,3.218,12.006A23.994,23.994,0,0,0,24.0025,48L34.3931,30.0029l-.0067-.0068a11.9852,11.9852,0,0,1-20.7778.007Z"
          style="fill:url(#c)"
        >
        </path>
      </svg>
      Add to Chrome
    </a>
  );
};