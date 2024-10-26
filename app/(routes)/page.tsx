import Modal from "@/components/modals/basic-page-modal";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <Modal header={<Header/>} footer={<Footer/>} >
      <div>
        bofu
      </div>
      
    </Modal>
  );
}
