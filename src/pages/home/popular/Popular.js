import { useState, useEffect, useRef } from "react";
import {
  BodySlider,
  CardContainer,
  ButtonLeft,
  Title,
  ButtonRight,
} from "./styles";
import { populares } from "./../../../firebase/firebase-querys";
import { PopularCard } from "./../../../Components/cards/cardPopular/PopularCrad";

export const PopularSection = () => {
  const refCardContainer = useRef(null);
  const [popular, setPopular] = useState(null);
  const point = useRef(0);

  useEffect(() => {
    //-------AÑADIENDO EVENTO RESIZE------------
    function resize() {
      const windowWidth = window.innerWidth;
      const numCard = Math.floor(windowWidth / 200);
      const widthBox = (windowWidth / numCard) * 15;
      const maxPoint = Math.round(widthBox / windowWidth);

      if (point.current > maxPoint - 1) {
        refCardContainer.current.style.transform = `translateX(calc(((100% - (100vw - 17px)) * -1)`;
        point.current = maxPoint - 1;
      }
    }

    window.addEventListener("resize", resize);
    //--OBTENIENDO POPULARES--------
    populares().then(setPopular);

    //---LIMPIAR EVENTOS----
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  function next() {
    const windowWidth = window.innerWidth;
    const numCard = Math.floor(windowWidth / 200);
    const widthBox = (windowWidth / numCard) * 15;
    const maxPoint = Math.round(widthBox / windowWidth);
    if (point.current < maxPoint - 2) {
      refCardContainer.current.style.transform = `translateX(calc((((100vw - 17px) * ${
        point.current + 1
      })) * -1))`;
      point.current = point.current + 1;
    } else if (point.current < maxPoint - 1) {
      refCardContainer.current.style.transform = `translateX(calc(((100% - (100vw - 17px)) * -1)`;
      point.current = maxPoint - 1;
    }
  }

  function previous() {
    if (point.current <= 0) return;
    refCardContainer.current.style.transform = `translateX(calc((((100vw - 17px) * ${
      point.current - 1
    })) * -1))`;
    point.current = point.current - 1;
  }

  return (
    <section className="box">
      <Title>Populares</Title>
      <BodySlider>
        <ButtonLeft
          onClick={previous}
          className={"buttonSlide"}
        >{`<`}</ButtonLeft>
        <CardContainer ref={refCardContainer}>
          {popular ? (
            popular.map((data) => {
              return <PopularCard key={data.id} data={data} />;
            })
          ) : (
            <>
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
              <PopularCard />
            </>
          )}
        </CardContainer>
        <ButtonRight onClick={next} className="buttonSlide">{`>`}</ButtonRight>
      </BodySlider>
    </section>
  );
};
