import { useEffect, useState } from "react";
import "./App.css";
import AddGuineaPig from "./AddGuineaPig";
import ShowGuineaPigs from "./ShowGuineaPigs";
import Header from "./Header";
import { MainContainer } from "./styles";
import ErrorBoundary from "./ErrorBoundary";

export interface NewGuineapig {
  name: string;
  age: number;
  likes?: string;
}

export interface Guineapig extends NewGuineapig {
  _id: string;
}

function App() {
  const [guineapigs, setGuineapigs] = useState<Guineapig[]>([]);

  const getGuineapigs = () => {
    fetch("http://localhost:3000/guineapigs")
      .then((res) => res.json())
      .then((data: Guineapig[]) => {
        setGuineapigs(data);
      })
      .catch((error) => {
        console.log(error);
        throw new Error("Kan inte hämta marsvin");
      });
  };

  useEffect(() => {
    getGuineapigs();
  }, []);

  const addNewGuineaPig = (newPig: NewGuineapig) => {
    fetch("http://localhost:3000/guineapigs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPig),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getGuineapigs();
      });
  };

  return (
    <>
      <Header />
      {/* Stylingexempel med styled component (importeras från styles.tsx) */}
      <MainContainer>
        <AddGuineaPig addNewGuineapig={addNewGuineaPig} />
        <ErrorBoundary>
          <ShowGuineaPigs guineapigs={guineapigs} />
        </ErrorBoundary>
      </MainContainer>
    </>
  );
}

export default App;
