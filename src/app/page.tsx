import Header from "@/widgets/mainPageWidgets/header/ui/header";
import StartBlock from "@/widgets/mainPageWidgets/startBlock/ui/startBlock";
import OurServices from "@/widgets/mainPageWidgets/ourServices/ui/ourServices";
import OurTeam from "@/widgets/mainPageWidgets/ourTeam/ui/ourTeam";
import Gallery from "@/widgets/mainPageWidgets/gallery/ui/gallery";
import OurMission from "@/widgets/mainPageWidgets/ourMission/ui/ourMission";
import OurContacts from "@/widgets/mainPageWidgets/ourContacts/ui/ourContacts";
import Footer from "@/widgets/mainPageWidgets/footer/ui/footer";

export default function Home() {
  return (
      <>
        <Header/>
          <StartBlock/>
          <OurServices/>
          <OurTeam/>
          <Gallery/>
          <OurMission/>
          <OurContacts/>
        <Footer/>
      </>
  );
}
