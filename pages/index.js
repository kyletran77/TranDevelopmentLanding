import HomePage from "../container/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tran Development | AI & Data Solutions for Scalable Products</title>
        <meta name="title" content="Tran Development | AI & Data Solutions for Scalable Products" />
        <meta
          name="description"
          content="Tran Development specializes in end-to-end AI and data solutions, transforming academic research and business processes into scalable products. Expertise in EdTech, AI analytics, and enterprise AI integration."
        />
        <meta
          name="keywords"
          content="Tran Development, AI solutions, data solutions, academic research, scalable products, EdTech, AI analytics, enterprise AI integration, AI consultancy, Kyle Tran"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="copyright"
          content="Tran Development . © Copyright 2024, All Rights Reserved."
        ></meta>
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Tran Development" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tran Development | AI & Data Solutions for Scalable Products" />
        <meta
          property="og:description"
          content="Tran Development specializes in end-to-end AI and data solutions, transforming academic research and business processes into scalable products."
        />
        <meta property="og:image" content="/images/banner.jpeg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Tran Development | AI & Data Solutions for Scalable Products" />
        <meta
          property="twitter:description"
          content="Tran Development specializes in end-to-end AI and data solutions, transforming academic research and business processes into scalable products."
        />
        <meta property="twitter:image" content="/images/banner.jpeg"></meta>

        <link rel="icon" href="/images/TranDevPRKit/color_tdev_logo.svg" type="image/svg+xml"/>
        <meta name="theme-color" content="#272782"></meta>
      </Head>
      <HomePage />
    </>
  );
}
