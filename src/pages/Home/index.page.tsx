import * as S from "./styles";
import { Header } from "../../components/Global/Header";
import { CardProduct } from "../../components/Generic/CardProduct";
import { ButtonComponent } from "../../components/Generic/Button";
import { Alert } from "../../components/Generic/Alert";
import {Checkbox} from "../../components/Generic/Checkbox";
import {RadioButton} from "../../components/Generic/RadioButton";
import {Select} from "../../components/Generic/Select";
import { useState } from "react";

export function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <CardProduct
        productPhoto="http://i.ytimg.com/vi/ngElkyQ6Rhs/hqdefault.jpg"
        name="Star wars"
        price={200}
        productPhotoDescription="Star Wars"
      />

      <ButtonComponent onClick={() => setOpenModal(true)} />

      <Alert
        alertStatus={openModal}
        setAlertStatus={() => setOpenModal(false)}
        type='warning'
        message='mensagem de erro'
      />


      <Checkbox label='teste checkbox ' />
      <RadioButton label='teste radioButton'/>

      <Select label='teste select'/>
      
    </>
  );
}
