import { useRef, useState, useEffect } from "react";
import { setSales } from "./../../firebase/fire-data-base";
import { CategoryList } from "./categorySection/categoriComponent";
import { PriceComponent } from "./priceSection/priceComponent";
import { ImageComponent } from "./../../Components/ImageUpload/ImageUpload";
import { StateComponent } from "./stateSection/stateComponent";
import {
  Body,
  Form,
  SliderBox,
  Input,
  Label,
  BoxTitle,
  BoxDescription,
  BoxAmount,
  BoxButton,
  ButtonBack,
  ButtonSend,
  ButtonNext,
} from "./styles";
import { useHistory } from "react-router-dom";

//-------------------------------
export const SellForm = ({ user }) => {
  let history = useHistory();
  useEffect(() => {
    if (!user.data) history.push("/LogIn");
  }, [user]);

  //------------------
  const [load, ReLoad] = useState(0);
  //---
  const imageState = useRef(["null"]);
  const sliderBox = useRef(null);
  const boxButton = useRef(null);
  const sliderPosition = useRef(0);
  const content = useRef({
    title: null,
    description: null,
    price: null,
    amount: null,
    state: null,
    category: null,
    subCategory: null,
    imgURL: [],
  });
  //------------------------------
  function titleChanged(e) {
    content.current.title = e.target.value;
    isEnableButtonNext("title");
  }
  function setCategoryandSub(category, subCategory) {
    if (category) {
      content.current.category = category;
    }
    content.current.subCategory = subCategory;
    return content.current.category;
  }
  function descriptionChanged(e) {
    content.current.description = e.target.value;
    isEnableButtonNext("description");
  }
  function priceChanged(value) {
    content.current.price = value;
    isEnableButtonNext();
  }
  function amountChanged(e) {
    content.current.amount = e.target.value;
    isEnableButtonNext();
  }
  function stateChanged(e) {
    content.current.state = e.target.id;
    isEnableButtonNext();
  }
  function setImageUrl(urls) {
    if (urls) content.current.imgURL = urls;
    return content.current.imgURL;
  }
  function setImageState(state) {
    if (state) imageState.current = state;
    return imageState.current;
  }

  //-------------------------
  function deslizarFormulario(value) {
    value = sliderPosition.current + value;
    if (value > 0 || value < -600) {
      return;
    }
    sliderPosition.current = value;
    sliderBox.current.style.transform = `translate(${value}%)`;
    visibilityButtons(value);
    isEnableButtonNext();
  }

  function visibilityButtons(value) {
    if (value === 0) {
      boxButton.current.children[0].style.visibility = "hidden";
      boxButton.current.children[1].style.display = "none";
      boxButton.current.children[2].style.visibility = "visible";
    } else if (value === -600) {
      boxButton.current.children[1].style.display = "block";
      boxButton.current.children[2].style.visibility = "hidden";
    } else {
      boxButton.current.children[0].style.visibility = "visible";
      boxButton.current.children[1].style.display = "none";
      boxButton.current.children[2].style.visibility = "visible";
    }
  }
  function enabledButton(button) {
    boxButton.current.children[button].style.opacity = "1";
    boxButton.current.children[button].style.pointerEvents = "auto";
  }
  function disabledButton(button) {
    boxButton.current.children[button].style.opacity = "0.6";
    boxButton.current.children[button].style.pointerEvents = "none";
  }
  function isEnableButtonNext() {
    switch (sliderPosition.current) {
      case 0:
        if (content.current.title && content.current.title.length > 4) {
          enabledButton(2);
        } else {
          disabledButton(2);
        }
        break;
      case -100:
        if (content.current.category && content.current.subCategory) {
          enabledButton(2);
        } else {
          disabledButton(2);
        }
        break;
      case -200:
        if (
          content.current.description &&
          content.current.description.length > 9
        ) {
          enabledButton(2);
        } else {
          disabledButton(2);
        }
        break;
      case -300:
        if (content.current.price && content.current.price > 0) {
          enabledButton(2);
        } else {
          disabledButton(2);
        }
        break;
      case -400:
        if (content.current.amount && content.current.amount > 0) {
          enabledButton(2);
        } else {
          disabledButton(2);
        }
        break;
      case -500:
        if (content.current.state) {
          enabledButton(2);
        } else {
          disabledButton(2);
        }
        break;
      case -600:
        if (imageState.current.length === 0) {
          enabledButton(1);
        } else {
          disabledButton(1);
        }
        break;
      default:
        console.log(`Sorry, we are out of ${sliderPosition.current}.`);
    }
  }
  //-----------------------
  function formValidation() {
    for (let key in content.current) {
      if (content.current[key] === null || content.current[key].length === 0) {
        return null;
      }
    }
    const physicalStore = user.data.physicalStore ? true : false;
    if (!imageState.current[0] && user.data) {
      return {
        ...content.current,
        uid: user.data.uid,
        city: user.data.city,
        visits: [],
        physicalStore,
      };
    }
  }
  //---
  async function onSubmit(e) {
    e.preventDefault();
    boxButton.current.children[1].style.opacity = "0.5";
    boxButton.current.children[1].style.pointerEvents = "none";
    const venta = formValidation();

    if (!venta) {
      alert("complete el formulario");
      boxButton.current.children[1].style.opacity = "1";
      boxButton.current.children[1].style.pointerEvents = "auto";
    } else {
      let newItemForSale = user.data.itemsForSale;

      if (newItemForSale.length > 6) {
        alert("Limite de Publicaciones Borre Alguna Venta Publicada");
        return;
      }
      const send = await setSales(venta);

      if (send) {
        newItemForSale.push(send.id);
        const newData = { ...user.data, itemsForSale: newItemForSale };
        user.setState(newData);
        alert("Articulo Publicado");
        reset(e);
      } else {
        boxButton.current.children[1].style.opacity = "1";
        boxButton.current.children[1].style.pointerEvents = "auto";

        alert("no se logro enviar, intente de nuevo");
      }
    }
  }

  function reset() {
    content.current = {
      title: null,
      description: null,
      price: null,
      amount: null,
      state: null,
      category: null,
      subCategory: null,
      imgURL: [],
    };
    imageState.current = ["null"];
    sliderPosition.current = 0;
    ReLoad(load + 1);
  }
  //-------------------------------
  function enterPress(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (boxButton.current.children[2].style.opacity === "1") {
        deslizarFormulario(-100);
      }
    }
  }
  return (
    <Body>
      <h2>Agrega Articulo para la Venta</h2>
      <Form tabIndex={"-1"} key={load} className={"box"}>
        <SliderBox ref={sliderBox} style={{ transform: "translate(0%)" }}>
          <BoxTitle onKeyPress={enterPress}>
            <Label tabIndex={"-1"}>Titulo</Label>
            <Input
              tabIndex={"-1"}
              placeholder={"Titulo"}
              type={"text"}
              onChange={titleChanged}
            />
          </BoxTitle>

          <CategoryList
            setCategoryandSub={setCategoryandSub}
            isEnableButtonNext={isEnableButtonNext}
          />

          <BoxDescription>
            <Label>Descripción</Label>
            <textarea
              tabIndex={"-1"}
              className={"box"}
              placeholder={"Descripción"}
              onChange={descriptionChanged}
            />
          </BoxDescription>

          <PriceComponent priceChanged={priceChanged} keyPress={enterPress} />

          <BoxAmount onKeyPress={enterPress}>
            <Label>Cantidad de Articulos</Label>
            <Input
              tabIndex={"-1"}
              placeholder={"Cantidad"}
              type={"number"}
              onChange={amountChanged}
            />
          </BoxAmount>

          <StateComponent stateChanged={stateChanged} />

          <ImageComponent
            key={2}
            setImageState={setImageState}
            setImageUrl={setImageUrl}
            isEnableButtonNext={isEnableButtonNext}
            quality={0.6}
            color={"#275a46"}
            max={4}
          />
        </SliderBox>

        <BoxButton ref={boxButton}>
          <ButtonBack
            type={"button"}
            onClick={() => {
              deslizarFormulario(100);
            }}
          >
            Anterior
          </ButtonBack>
          <ButtonSend type={"reset"} onClick={onSubmit}>
            Publicar
          </ButtonSend>
          <ButtonNext
            type={"button"}
            onClick={() => {
              deslizarFormulario(-100);
            }}
          >
            Siguiente
          </ButtonNext>
        </BoxButton>
      </Form>
      <div
        className={"spinner"}
        style={{ position: "absolute", visibility: "hidden", zIndex: "-1" }}
      />
    </Body>
  );
};
