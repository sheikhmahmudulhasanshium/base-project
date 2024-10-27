"use client"
import Modal from "@/components/modals/basic-page-modal";
import Footer from "../../components/footer";
import Header from "../../components/header";
import RootLayout from "../layout";
import Body from "./components/body";
import { useOrigin } from "@/components/hooks/use-origin";
import { LoaderIcon } from "lucide-react";

export default function Home() {
  const origin = useOrigin();

  if (!origin) {
    return (
      <div className="w-full h-screen justify-center items-center flex">
        <LoaderIcon className="w-40 h-40 animate-spin text-blue-600"/>
      </div>
    );
  }
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
