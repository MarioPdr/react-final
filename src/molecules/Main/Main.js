import React from "react";
import Form from "../../components/Form";
import Planos from "../Planos/Planos";
import ClassSchedule from "../ClassSchedule/ClassSchedule";
import NewsSection from "../NewsSection/NewsSection";
import Loja from "../Shop/Loja";

const Main = () => {
  return (
    <div>
      <NewsSection />
      <ClassSchedule />
      <Planos />
      <Loja />
      <Form />
    </div>
  );
};

export default Main;