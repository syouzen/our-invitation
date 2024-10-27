import {SVGProps} from 'react';

export default function IconLoading(props: SVGProps<SVGSVGElement>) {
  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
        className="loading-icon"
        {...props}
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="#E3E3E3"
          strokeWidth="5"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="gray"
          strokeWidth="5"
          fill="none"
          strokeDasharray="126.92"
          strokeDashoffset="126.92"
          className="loading-circle"
        />
      </svg>
      <style data-jsx="true">{`
    .loading-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .loading-icon {
      animation: spin 2s linear infinite;
    }
    .loading-circle {
      animation: dash 1.5s ease-in-out infinite;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 126.92;
        stroke-dashoffset: 126.92;
      }
      50% {
        stroke-dasharray: 126.92;
        stroke-dashoffset: 63.46;
      }
      100% {
        stroke-dasharray: 126.92;
        stroke-dashoffset: 126.92;
      }
    }
  `}</style>
    </>
  );
}
