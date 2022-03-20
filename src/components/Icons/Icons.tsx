export const ArrowLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13">
    <polyline
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      points=".5 12.5 6.5 6.5 .5 .5"
      opacity=".5"
      transform="matrix(-1 0 0 1 7 0)"
    />
  </svg>
);

export const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13">
    <polyline
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      stroke-linejoin="round"
      points=".5 12.5 6.5 6.5 .5 .5"
      opacity=".5"
    />
  </svg>
);

export const Breadcrumb = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="7"
    height="12"
    viewBox="0 0 7 12"
  >
    <defs>
      <path
        id="breadcrumb-a"
        d="M1.91422632,11.4052039 L6.34643225,1.40520393 C6.5702202,0.900290676 6.34232311,0.309561628 5.83740985,0.0857736753 C5.3324966,-0.138014277 4.74176755,0.0898828101 4.5179796,0.594796067 L0.0857736753,10.5947961 C-0.138014277,11.0997093 0.0898828101,11.6904384 0.594796067,11.9142263 C1.09970932,12.1380143 1.69043837,11.9101172 1.91422632,11.4052039 Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd">
      <mask id="breadcrumb-b" fill="#fff">
        <use xlinkHref="#breadcrumb-a" />
      </mask>
      <use fill="#000" fill-opacity="0" fill-rule="nonzero" xlinkHref="#breadcrumb-a" />
      <g fill="#000" fill-opacity=".4" mask="url(#breadcrumb-b)">
        <rect width="16" height="16" transform="translate(-5 -2)" />
      </g>
    </g>
  </svg>
);

export const Close = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11">
    <path
      fill="none"
      stroke="#000"
      stroke-linecap="round"
      d="M3.5,13.5 L13.5,3.5 M13.5,13.5 L3.5,3.5"
      opacity=".5"
      transform="matrix(-1 0 0 1 14 -3)"
    />
  </svg>
);

export const Separator = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1" height="60" viewBox="0 0 1 60">
    <defs>
      <linearGradient id="separator-a" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#E7E7EA" stop-opacity="0" />
        <stop offset="31.588%" stop-color="#E7E7EA" />
        <stop offset="49.952%" stop-color="#E7E7EA" />
        <stop offset="68.257%" stop-color="#E7E7EA" />
        <stop offset="100%" stop-color="#E7E7EA" stop-opacity="0" />
      </linearGradient>
    </defs>
    <rect
      width="1"
      height="60"
      y="2"
      fill="url(#separator-a)"
      fill-rule="evenodd"
      opacity=".6"
      transform="translate(0 -2)"
    />
  </svg>
);

export const SketchLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="27"
    height="25"
    viewBox="0 0 27 25"
  >
    <defs>
      <path
        id="sketch-logo-a"
        d="M6.12869318,2.46533203 L13.5,1.6875 L20.8713068,2.46533203 C20.8713068,2.46533203 26.578125,10.1118164 26.578125,10 C26.578125,10.1118164 13.5,25.3125 13.5,25.3125 L0.421875,10 L6.12869318,2.46533203 Z"
      />
    </defs>
    <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">
      <mask id="sketch-logo-b" fill="#fff">
        <use xlinkHref="#sketch-logo-a" />
      </mask>
      <use fill="#FDB300" xlinkHref="#sketch-logo-a" />
      <g mask="url(#sketch-logo-b)">
        <g transform="translate(.422 9.112)">
          <polygon fill="#EA6C00" points="5.297 .888 13.078 16.201 0 .888" />
          <polygon
            fill="#EA6C00"
            points="18.375 .888 26.156 16.201 13.078 .888"
            transform="matrix(-1 0 0 1 39.234 0)"
          />
          <polygon fill="#FDAD00" points="5.297 .888 20.859 .888 13.078 16.201" />
        </g>
      </g>
      <g mask="url(#sketch-logo-b)">
        <g transform="translate(.422 1.688)">
          <polygon fill="#FDD231" points="13.078 0 5.707 .778 5.297 8.313" />
          <polygon fill="#FDD231" points="20.859 0 13.488 .778 13.078 8.313" transform="matrix(-1 0 0 1 33.937 0)" />
          <polygon
            fill="#FDAD00"
            points="20.449 8.313 26.156 .778 25.748 8.313"
            transform="matrix(-1 0 0 1 46.606 0)"
          />
          <polygon fill="#FDAD00" points="0 8.313 5.707 .778 5.297 8.313" />
          <polygon fill="#FEEEB7" points="13.078 0 5.297 8.313 20.857 8.313" />
        </g>
      </g>
    </g>
  </svg>
);
