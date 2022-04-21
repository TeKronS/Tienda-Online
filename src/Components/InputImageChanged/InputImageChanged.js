import { useRef, useState, useEffect } from "react";
import { UploadImage } from "./../../firebase/firebase-storage";
import { Body, Input, BottomInput } from "./styles";

export const InputImageChanged = ({ setImage }) => {
  const [keyState, setKey] = useState(1);
  const isMount = useRef(true);
  const RefBody = useRef(null);
  const prevUrl = useRef(null);
  //-------------------------------

  useEffect(() => {
    const imgElement = RefBody.current.previousSibling;
    return () => {
      isMount.current = false;
      imgElement.style.opacity = "1";
    };
  }, []);

  function viewImg(e) {
    const files = e.target.files;
    setKey(keyState + 1);

    if (files) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        readFile(file);
      }
    }
  }
  //-------------------------------
  function readFile(file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      if (isMount.current) {
        addPreviewImg(e.target.result);
      }
    });

    reader.readAsDataURL(file);

    const fecha = new Date();
    const time = fecha.getTime();

    if (file instanceof File) {
      async function fileConvert() {
        let newresult = await fileToBlob(file);
        newresult.name = `${time}${file.name}`;
        getUrl(newresult);
      }
      fileConvert();
    } else {
      file.name = `${time}${file.name}`;
      getUrl(file);
    }
  }
  //-------------------------------

  function addPreviewImg(url) {
    prevUrl.current = RefBody.current.previousSibling.src;
    RefBody.current.previousSibling.style.opacity = "0.5";
    RefBody.current.previousSibling.src = url;
    RefBody.current.style.visibility = "visible";
    setImage({
      campo: url,
      loading: true,
      new: false,
    });
  }
  //-------------------------------

  function getUrl(file) {
    UploadImage(file)
      .then((url) => {
        if (isMount.current) {
          if (url) {
            RefBody.current.previousSibling.style.opacity = "1";
            RefBody.current.style.visibility = "hidden";
            setImage({
              campo: url,
              loading: false,
              new: true,
            });
          } else {
            RefBody.current.previousSibling.src = prevUrl.current;
          }
        }
      })
      .catch((e) => {
        console.log({ error: e });
        if (isMount.current) {
          RefBody.current.previousSibling.src = prevUrl.current;
        }
      });
  }

  //---------------------------------

  return (
    <Body ref={RefBody}>
      <Input
        key={keyState}
        id={"ImageEdit"}
        type={"file"}
        accept="image/png,image/jpeg,image/jpg"
        onChange={viewImg}
      />
      <BottomInput
        onClick={(e) => {
          e.target.previousSibling.click();
        }}
      >
        Cambiar
      </BottomInput>
    </Body>
  );
};

async function fileToBlob(fileResult) {
  const blob = new Blob([new Uint8Array(await fileResult.arrayBuffer())], {
    type: fileResult.type,
  });
  return blob;
}
