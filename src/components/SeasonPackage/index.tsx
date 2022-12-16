import React from "react";
import { useRouter } from "next/router";
import Carousel from "../Carousel";
import * as style from "./styles";

const SeasonPackage = ({ data }) => {
  const router = useRouter();
  const curPack = router.query.p;
  const renderBackground = () => {
    return <img src="" alt="" />;
  };
  return (
    <div>
      <style.StyledCarousel
        dot={{ sharp: "bar", playtimeEffect: true, placement: "t" }}
        navigation={{ type: "full" }}
        autoPlayTime={6}
      ></style.StyledCarousel>
    </div>
  );
};

export default SeasonPackage;
