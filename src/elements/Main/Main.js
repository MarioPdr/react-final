import React from "react";
import Planos from "../Planos/Planos";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import NewsSection from "../NewsSection/NewsSection";
import Loja from "../Shop/Loja";
import MapaLocalizacao from "../Maps/MapaLocalizacao";

const Main = () => {
  return (
    <div>
      <NewsSection />
      <ClassSchedule />
      <Planos />
      <Loja />
      <MapaLocalizacao />
    </div>
  );
};

export default Main;
