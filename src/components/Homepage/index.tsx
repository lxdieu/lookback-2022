import React, { useState } from "react";
import { useRouter } from "next/router";
import Opening from "../Openning";
import SeasonPackage from "../SeasonPackage";
import * as Style from "./styles";

const HomePage = ({ data }) => {
  const router = useRouter();
  const { query } = router;
  console.log(query.p);
  const [curPack, setCurPack] = useState<number | null>(
    Number(query.p) || null
  );

  const handleSelectPack = (id: number) => {
    console.log(router);
    router.push({
      pathname: router.pathname,
      query: {
        d: router.query.d,
        p: id,
      },
    });
  };

  return (
    <div>
      {router.query.p ? (
        <SeasonPackage data={data}/>
      ) : (
        <Opening handleSelectPack={handleSelectPack} data={data} />
      )}
    </div>
  );
};

export default HomePage;
