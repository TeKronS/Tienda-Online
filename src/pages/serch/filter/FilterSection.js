import { useEffect, useRef } from "react";
import { Categorys } from "./categorySection/categorys";
import {
  FilterHeader,
  FilterBar,
  FilterType,
  FilterBarBoxPosition,
  Relleno,
} from "./styles";
import { Footer } from "./../../../footer/footer";
import { Location } from "./locationSection/location";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { StateSection } from "./stateSection/stateSection";
import { PriceSection } from "./priceSection/priceSection";

export const FilterSection = ({ filter, showFilter, filterResult }) => {
  const refFilterPosition = useRef(null);

  useEffect(() => {
    refFilterPosition.current.style.top = `140px`;
    let prevScrollpos = window.pageYOffset;

    function scrolin() {
      if (refFilterPosition.current) {
        const windowHeight = window.innerHeight;
        const currentScrollPos = window.pageYOffset;
        const filterTop = parseInt(refFilterPosition.current.style.top, 10);
        const scroll = prevScrollpos - currentScrollPos;
        const newTop = filterTop + scroll;

        if (windowHeight <= 600 && windowHeight > 400) {
          if (prevScrollpos < currentScrollPos) {
            if (newTop <= 10) {
              refFilterPosition.current.style.top = `10px`;
            } else {
              refFilterPosition.current.style.top = `${filterTop + scroll}px`;
            }
          } else {
            if (newTop >= 140) {
              refFilterPosition.current.style.top = `140px`;
            } else {
              refFilterPosition.current.style.top = `${filterTop + scroll}px`;
            }
          }
        } else if (windowHeight <= 400) {
          if (prevScrollpos < currentScrollPos) {
            if (newTop <= 10) {
              refFilterPosition.current.style.top = `10px`;
            } else {
              refFilterPosition.current.style.top = `${filterTop + scroll}px`;
            }
          } else {
            if (currentScrollPos <= 140) {
              refFilterPosition.current.style.top = `${
                140 - currentScrollPos
              }px`;
            }
          }
        } else {
          refFilterPosition.current.style.top = `140px`;
        }
        prevScrollpos = currentScrollPos;
      }
    }

    window.addEventListener("scroll", scrolin);
    return () => {
      window.removeEventListener("scroll", scrolin);
    };
  }, []);

  return (
    <FilterBarBoxPosition ref={refFilterPosition}>
      <FilterBar className={"desplege"}>
        <FilterHeader onClick={showFilter}>
          <FontAwesomeIcon icon={faCaretLeft} size="2x" />
        </FilterHeader>
        <FilterType>
          <section>
            <h3>Costo de Envio</h3>
            <label htmlFor={"free"}>
              Envio Gratis
              <input id={"free"} type={"checkbox"} />
            </label>
          </section>
          <StateSection filterResult={filterResult} />
          <PriceSection filter={filter} filterResult={filterResult} />
          <Categorys filterResult={filterResult} />
          <Location filterResult={filterResult} />
        </FilterType>
        <Footer />
        <Relleno className={"relleno"} />
      </FilterBar>
    </FilterBarBoxPosition>
  );
};
