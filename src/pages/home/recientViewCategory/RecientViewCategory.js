import { useState, useEffect } from "react";
import { recientViewCategory } from "./../../../firebase/firebase-querys";
import { Title, CardsContainer } from "./styles";
import { FlexCard } from "./../../../Components/cards/flexCard/FlexCard";

export const RecientViewCategoryComponent = ({ user }) => {
  const [docs, setDocs] = useState(null);

  useEffect(() => {
    let mount = true;
    if (user) {
      recientViewCategory(user.recientViews).then((response) => {
        if (mount) setDocs(response);
      });
    }
    return () => {
      mount = false;
    };
  }, [user]);

  return (
    <section className="box">
      {docs && (
        <>
          <Title>Categorias Recientes</Title>
          <CardsContainer>
            {docs.map((doc, key) => {
              return <FlexCard area={key} key={doc.id} data={doc} />;
            })}
          </CardsContainer>
        </>
      )}
    </section>
  );
};
