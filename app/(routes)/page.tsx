import Modal from "@/components/modals/basic-page-modal";
import Footer from "../../components/footer";
import Header from "../../components/header";
import RootLayout from "../layout";
import Body from "./components/body";

export default function Home() {
  return (
    <RootLayout  params={{
      title: "Homepage",
      description: "Home page desciption will be here"
    }}>
      <Modal header={<Header/>} footer={<Footer/>} >
        <>
          <Body/>
        </>
        
      </Modal>
    </RootLayout>
  );
}
