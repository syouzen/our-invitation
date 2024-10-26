import { SVGProps } from "react";

export default function IconShare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
        <path strokeLinecap="round" d="M14.32 16.802L9 13.29m5.42-6.45L9.1 10.35" opacity=".5"></path>
        <path d="M19 18.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-13a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"></path>
      </g>
    </svg>
  );
}
