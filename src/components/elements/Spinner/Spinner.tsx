import { twMerge } from "tailwind-merge"

interface SpinnerProps {
  spinnerColor?: string
}

export default function Spinner(props: SpinnerProps) {
  const { spinnerColor = "border-white" } = props

  return <div className={twMerge("spinner w-6 h-6 border-2", spinnerColor)} />
}
