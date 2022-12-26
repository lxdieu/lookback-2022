import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import CryptoJS from "crypto-js";
import { ICustomerData } from "src/interface";
import HomePage from "src/components/Homepage";
import NoData from "src/components/NoData";

const Home: NextPage = () => {
  const router = useRouter();
  const { d } = router.query;
  const data =
    d &&
    (() => {
      try {
        const wordsDecrypted = CryptoJS.enc.Base64.parse(d);
        return JSON.parse(CryptoJS.enc.Utf8.stringify(wordsDecrypted));
      } catch (e) {
        return null;
      }
    })();
  // const examData: ICustomerData = {
  //   name: "Lã Xuân Diệu",
  //   email: "dieu.lx@hsc.com.vn",
  //   id: "002990",
  //   first_stock: "HCM",
  //   first_date: "22/06/2022",
  //   longest_stock: "HCM",
  //   longest_hold_time: 256,
  //   largest_stock: "HPG",
  //   smallest_stock: "NVL",
  //   lastest_stock: "NVL",
  //   lastest_date: "30/12/2022",
  // };

  //data to base 64
  // const words = CryptoJS.enc.Utf8.parse(JSON.stringify(examData)); // WordArray object
  // const base64 = CryptoJS.enc.Base64.stringify(words); // string: 'SGVsbG8gd29ybGQ='

  //base64 to data
  // const wordsDecrypted = CryptoJS.enc.Base64.parse(base64);
  // var resultString = CryptoJS.enc.Utf8.stringify(wordsDecrypted);

  return (
    <>
      <Head>
        <title>Cùng HSC nhìn lại 1 năm đầu tư 2022 của {data?.AccountName?.trim()}</title>
        <meta property="fb:app_id" content="470827294432629" />
        <meta
          property="og:title"
          content={"Cùng HSC nhìn lại 1 năm đầu tư 2022"}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${process.env.ROOT_URL ?? ""}${router.basePath}${
            router.asPath
          }`}
        />
        <meta property="og:description" content="" />
        <meta
          property="og:image"
          content={`${process.env.ROOT_URL ?? ""}${
            router.basePath
          }/images/thumbnail-2022.jpg`}
        />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="480" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {data ? <HomePage data={data} /> : <NoData />}
    </>
  );
};

export default Home;
