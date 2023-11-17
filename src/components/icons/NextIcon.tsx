import React from "react";

type Props = {
  className?: string;
};

export default function NextIcon(props: Props) {
  const { className = "" } = props;

  return (
    <svg className={className} viewBox="0 0 45 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.73386 1.97319C2.11118 2.5946 1.61716 3.33271 1.2801 4.14528C0.943031 4.95786 0.769531 5.82893 0.769531 6.70864C0.769531 7.58834 0.943031 8.45941 1.2801 9.27199C1.61716 10.0846 2.11118 10.8227 2.73386 11.4441L28.7956 37.5058L2.73386 63.5676C1.47795 64.8235 0.772375 66.5269 0.772375 68.3031C0.772375 70.0792 1.47795 71.7826 2.73386 73.0385C3.98978 74.2944 5.69318 75 7.46931 75C9.24545 75 10.9488 74.2944 12.2048 73.0385L43.0356 42.2077C43.6582 41.5863 44.1523 40.8482 44.4893 40.0356C44.8264 39.223 44.9999 38.352 44.9999 37.4723C44.9999 36.5926 44.8264 35.7215 44.4893 34.9089C44.1523 34.0963 43.6582 33.3582 43.0356 32.7368L12.2048 1.90602C9.65232 -0.646425 5.35348 -0.646424 2.73386 1.97319Z"
        fill="#C4C4C4"
      />
    </svg>
  );
}