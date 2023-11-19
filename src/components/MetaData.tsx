import { textBuilder } from "@/utils/stringUtils";
import Head from "next/head";

interface MetaDataProps {
  isPdp?: boolean;
  displayedTitle?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  imageUrl?: string;
  price?: number;
}

const settings = {
  title: "JD SPORTS Indonesia - Pusat Retail Sneakers & Sports Fashion",
  description:
    "Belanja Sepatu & Pakaian Olahraga Terbaru | GRATIS Ongkir | Dijamin Original | Koleksi Eksklusif | Belanja Sekarang!",
  keywords: "jd sports, jd",
  url: "NEXT_PUBLIC_HOST_URL",
  imageUrl: `${process.env.NEXT_PUBLIC_HOST_URL}/images/logo-jdsport.webp`,
};

const MetaData = (props: MetaDataProps) => {
  const {
    isPdp,
    displayedTitle,
    title = settings.title,
    description = settings.description,
    keywords = settings.keywords,
    url = settings.url,
    imageUrl = settings.imageUrl,
    price,
  } = props;

  let prefixTitle = "";
  const suffixTitle = "| JD SPORTS Indonesia";
  if (isPdp) prefixTitle = "Beli";

  const jsonLDRenderer = () => {
    let schemaType = "";
    if (isPdp) schemaType = "Product";
    else schemaType = "ProductCollection";

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": schemaType,
            name: builtTitle,
            about: description,
            url,
          }),
        }}
      />
    );
  };

  const builtTitle = `${textBuilder([prefixTitle, title])} ${suffixTitle}`;
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="application-name" content="ibox.co.id" />
      <title>{displayedTitle ? `${displayedTitle} ${suffixTitle}` : builtTitle}</title>
      <meta name="title" content={builtTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-72x72.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon.ico" />

      <meta
        property="og:site_name"
        content="JD SPORTS Indonesia - Pusat Retail Sneakers & Sports Fashion"
      />
      <meta name="googlebot" content="index, follow, follow" />
      <meta name="robots" content="index, follow" />
      <meta name="page-type" content="productdetailpage" />
      <meta property="product:price:currency" content="Rp" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:site:id" content="@jdsport" />

      <meta
        name="viewport"
        content="initial-scale=1, minimum-scale=1, maximum-scale=5, user-scalable=no, width=device-width"
      />

      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="id" href={url} />

      {jsonLDRenderer()}
    </Head>
  );
};

export default MetaData;
