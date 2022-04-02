import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

//------COMPONETE SLIDE-----------------------------------------
const SlideShow = ({
  img,
  autoplay = false,
  controles = true,
  velocidad = "400",
  vIntervalo = "3000",
}) => {
  //-----REFERENCIAS--------------------------------------------
  const cSlide = useRef(null);
  const intervaloSlideshow = useRef(null);
  const inicioAutoplay = useRef(null);
  const cPrincipal = useRef(null);
  const porcentajeTranslate = useRef(0);
  const disponible = useRef(true);
  const [heigth, setHeigth] = useState(200);
  //------------------------------
  useEffect(() => {
    //-------Eventos para activar Y desactivar el autoplay --
    function addEvento() {
      cPrincipal.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });
      cPrincipal.current.addEventListener("mouseleave", () => {
        clearInterval(intervaloSlideshow.current);
        intervaloSlideshow.current = setInterval(siguiente, vIntervalo);
      });
    }
    //-------funcion que ubica las imagenes una al lado de otra--------
    function ubicarImagenes() {
      const imagenes = img.length + 1;
      let posicion = -100;
      if (imagenes > 0) {
        for (let i = 0; i <= imagenes + 1; i++) {
          posicion += 100;
          if (i <= imagenes - 1) {
            cSlide.current.children[i].style.left = `${posicion}%`;
          }
        }
      }
    }
    ubicarImagenes();
    //-------FUNCION EN CASO DE ACTIVAR EL AUTOPLAY-------------
    function intervalo() {
      clearInterval(intervaloSlideshow.current);
      intervaloSlideshow.current = setInterval(siguiente, vIntervalo);
    }
    //-------AÑADIENDO EVENTO RESIZE------------
    function resize() {
      setHeigth(cSlide.current.offsetHeight);
    }
    window.addEventListener("resize", resize);
    //--MODIFICAR ALTO DE IMAGENES--------
    setHeigth(cSlide.current.offsetHeight);
    if (autoplay && img) {
      addEvento();
      inicioAutoplay.current = setTimeout(intervalo, 1800);
    }
    //---LIMPIAR EVENTOS Y HE INTERVALOS----
    return () => {
      window.removeEventListener("resize", resize);
      clearTimeout(inicioAutoplay.current);
      clearInterval(intervaloSlideshow.current);
    };
  }, []);

  //-----FUNCION QUE DESPLAZA CONTENEDOR DE IMAGENES---------------------------------------------------
  function deslizar(mover, final, inicio, teleport) {
    if (disponible.current === true) {
      if (cSlide.current.style.transform === final) {
        cSlide.current.style.transition = "none";
        cSlide.current.style.transform = inicio;
        porcentajeTranslate.current = teleport;
        setTimeout(() => {
          disponible.current = false;
          porcentajeTranslate.current += mover;
          cSlide.current.style.transform = `translate(-${porcentajeTranslate.current}%)`;
          cSlide.current.style.transition = `all ${velocidad}ms ease-in-out 0s`;
        }, 10);
      } else {
        disponible.current = false;
        porcentajeTranslate.current += mover;
        cSlide.current.style.transform = `translate(-${porcentajeTranslate.current}%)`;
      }
    }
  }
  //-------FUNCION PARA CONTROLES DE SIGUIENTE Y ANTERIOR-------------------------------------------------
  function siguiente() {
    deslizar(
      100,
      `translate(-${(cSlide.current.children.length - 1) * 100}%)`,
      "translate(0%)",
      0
    );
  }

  function anterior() {
    deslizar(
      -100,
      "translate(0%)",
      `translate(-${(cSlide.current.children.length - 1) * 100}%)`,
      (cSlide.current.children.length - 1) * 100
    );
  }
  //-------SALIDA DEL COMPONENTE-------------------------------------------------
  return (
    <SlideshowP>
      <ContenedorPrincipal ref={cPrincipal}>
        <ContenedorSlide
          ref={cSlide}
          onTransitionEnd={() => {
            disponible.current = true;
          }}
          style={{
            transform: "translate(0%)",
            transition: `all ${velocidad}ms ease-in-out 0s`,
          }}
        >
          {img && (
            <>
              {img.map((img, key) => {
                return (
                  <Slide key={key}>
                    <img alt={""} src={img} height={heigth} />
                  </Slide>
                );
              })}
              <Slide>
                <img alt={""} src={img[0]} height={heigth} />
              </Slide>
            </>
          )}
        </ContenedorSlide>
        {controles && (
          <>
            <FlechaIzq onClick={anterior}>
              <div />
            </FlechaIzq>
            <FlechaDer onClick={siguiente}>
              <div />
            </FlechaDer>
          </>
        )}
      </ContenedorPrincipal>
    </SlideshowP>
  );
};
//-------COMPONENTES CONTENEDORES DEL SLIDE CON STYLOS-------------------------------------------------
const SlideshowP = styled.section`
  border-radius: inherit;
  width: 100%;
  height: 100%;
`;

const ContenedorPrincipal = styled.div`
  border-radius: inherit;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  :hover {
    div {
      visibility: visible;
    }
  }
`;

const ContenedorSlide = styled.section`
  border-radius: inherit;
  position: static;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Slide = styled.a`
  border-radius: inherit;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  img {
    object-fit: contain;
    border-left: 2px solid white;
    border-right: 2px solid white;
    margin: auto;
    overflow: hidden;
  }
`;

//-------COMPONENTES PARA LOS CONTROLES DE SIGUIENTE Y ANTERIOR-------------------------------------------------
const FlechaIzq = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0%;
  height: 100%;
  width: 40px;
  background: rgba(0, 0, 0, 0.4);
  box-sizing: content-box;
  z-index: 2;
  left: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 12px;
    height: 12px;
    border-top: 5px solid rgb(255, 255, 255);
    border-left: 5px solid rgb(255, 255, 255);
    border-radius: 3px;
    display: block;
    transform: rotate(-45deg);
  }
`;

const FlechaDer = styled.div`
  visibility: hidden;
  position: absolute;
  top: 0%;
  height: 100%;
  width: 40px;
  background: rgba(0, 0, 0, 0.4);
  box-sizing: content-box;
  z-index: 2;
  right: 0px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 12px;
    height: 12px;
    border-top: 5px solid rgb(255, 255, 255);
    border-left: 5px solid rgb(255, 255, 255);
    border-radius: 3px;
    display: block;
    transform: rotate(135deg);
  }
`;

export { SlideShow, Slide };
