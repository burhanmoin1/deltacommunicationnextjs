import DeltaNavbar from './Navbar';
import Cablegif from './Cablegif';
import DeltaInternetCard from './InternetPackageCard';
import RocketContainer from  './RocketContainer';
import Support from './Support';
import AboutUs from './AboutUs';
import Footer from './Footer';

export default function Home() {
  return (
    <main>
      <link rel="icon" href="./favicon.ico"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>      <DeltaNavbar />
      <Cablegif />
      <RocketContainer />
      <DeltaInternetCard/>
      <Support />
      <AboutUs />
      <Footer />
    </main>
  );
}
