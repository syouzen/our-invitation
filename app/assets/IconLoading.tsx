import {SVGProps} from 'react';

export default function IconLoading(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" opacity="0.2" />
      <path
        d="M22 12a10 10 0 0 1-10 10"
        stroke-dasharray="31.4"
        stroke-dashoffset="31.4"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="31.4"
          to="0"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
