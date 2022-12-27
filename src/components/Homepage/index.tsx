import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Opening from "../Openning";
import SeasonPackage1 from "../SeasonPackage-1";
import SeasonPackage2 from "../SeasonPackage-2";
import SeasonPackage3 from "../SeasonPackage-3";
import SeasonPackage4 from "../SeasonPackage-4";
import Ending from "../Ending";
import ShareGroup from '../ShareGroup';
import * as Style from "./styles";

const HomePage = ({ data }) => {
  const router = useRouter();
  const [packOpened, setPackOpened] = useState<number[]>([]);
  useEffect(() => {
    try {
      const lsOpenedPack = window.localStorage.getItem(
        process.env.NEXT_PUBLIC_STORAGE_KEY
      );
      const parsed = lsOpenedPack ? JSON.parse(lsOpenedPack) : [];
      setPackOpened(parsed);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleSelectPack = (id: number) => {
    if (packOpened && !packOpened.includes(id)) {
      window.localStorage.setItem(
        process.env.NEXT_PUBLIC_STORAGE_KEY,
        JSON.stringify([...packOpened, id])
      );
      setPackOpened([...packOpened, id]);
    }
    router.push({
      pathname: router.pathname,
      query: {
        d: router.query.d,
        p: id,
      },
    });
  };

  const handleBackHome = (e, forceHome = false) => {
    const homeUrl = `${router.pathname}?d=${router.query.d}`;
    const endUrl = `${router.pathname}?d=${router.query.d}&p=e`;
    router.push(forceHome || packOpened.length < 4 ? homeUrl : endUrl);
  };

  const listPack = [
    <SeasonPackage1 data={data} key="pack_1" handleBackHome={handleBackHome} />,
    <SeasonPackage2 data={data} key="pack_2" handleBackHome={handleBackHome} />,
    <SeasonPackage3 data={data} key="pack_3" handleBackHome={handleBackHome} />,
    <SeasonPackage4 data={data} key="pack_4" handleBackHome={handleBackHome} />,
  ];

  return (
    <Style.Wrapper>
      {router.query.p &&
        Number(router.query.p) < 4 &&
        Number(router.query.p) >= 0 &&
        listPack[router.query.p as keyof typeof listPack]}
      {router.query.p === "e" && <Ending handleBackHome={handleBackHome} />}

      {(!router.query.p ||
        (router.query.p &&
          router.query.p !== "e" &&
          Number(router.query.p) >= 4 &&
          Number(router.query.p) < 0)) && (
        <Opening
          handleSelectPack={handleSelectPack}
          data={data}
          packOpened={packOpened}
        />
      )}
      <ShareGroup />
    </Style.Wrapper>
  );
};

export default HomePage;
