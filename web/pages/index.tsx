import {Contact} from "../components/organisms/Form/Contact/Contact";
import {IntroduceService} from "../components/organisms/IntroduceService/IntroduceService";
import Image from "next/image";
import {IntroducePrice} from "../components/organisms/IntroducePrice/IntroducePrice";

const Index = () => {
  return (
    <>
      <IntroduceService/>
      <IntroducePrice/>
      <Contact/>
    </>

  )
}

export default Index
