export const formatRupiah = (value: number | null | undefined) => {
  if (!value && value !== 0) return ""

  return new Intl.NumberFormat(`id-ID`, {
    currency: `IDR`,
    style: "currency",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value)
}

export const formatMysteryPrice = (formattedPrice: string) => {
  if (formattedPrice.includes("Rp") === false) throw new Error("Invalid formatted price")

  const [target, ...rest] = formattedPrice.replace("Rp", "").trim().split(".")
  const mysteryPrice = target.replace(/[0-9]/g, "?")
  return `Rp${[mysteryPrice, ...rest].join(".")}`
}

export const range = (min: number, max: number) =>
  Array.from({ length: max - min + 1 }, (_, i) => min + i)

export const isInRange = (search: number, range: number[]) => {
  return range.includes(search)
}

export const formatNumber = (value?: number | string) => {
  if (!value && value !== 0) return ""

  return new Intl.NumberFormat("id-ID")
    .format(parseInt(value as string))
    .replace(/\D00(?=\D*$)/, "")
}
