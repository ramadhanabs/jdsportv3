import ContentLoader from "@/components/elements/ContentLoader"
import Text from "@/components/elements/Text"
import { BreadcrumbProps } from "@/types/commonTypes"
import Link from "next/link"
import { Fragment } from "react"

type BreadcrumbPropsData = {
  data: BreadcrumbProps[] | null | undefined
}

function Breadcrumb({ data }: BreadcrumbPropsData) {
  if (!data) return <ContentLoader width={300} height={15} />

  const { length } = data
  const lastIndex: number = length - 1

  if (length === 0) return null

  return (
    <nav aria-label="breadcrumb" className="py-0 pb-5 lg:py-5">
      <ul className="flex items-center gap-1 text-sm">
        {data.map((value: BreadcrumbProps, index: number) => {
          if (index === lastIndex) {
            return (
              <Fragment key={value.label}>
                <li className="flex-none" id="mcis-breadcrumb-current">
                  <Text className="text-stone-500 text-xs">{value.label}</Text>
                </li>
              </Fragment>
            )
          }

          return (
            <Fragment key={value.label}>
              <li className="flex-none">
                <Link href={value.href}>
                  <Text className="text-stone-500 text-xs">{value.label}</Text>
                </Link>
              </li>
              <li className="flex-none text-stone-500 " key={`separator-${value.label}`}>
                /
              </li>
            </Fragment>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
