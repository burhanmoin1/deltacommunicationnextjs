import DeltaNavbar from './Navbar';
import Cablegif from './Cablegif';
import DeltaInternetCard from './InternetPackageCard';
import RocketContainer from  './RocketContainer';


export default function Home() {
  return (
    <main>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"/>
      <DeltaNavbar />
      <Cablegif />
      <RocketContainer />
      <DeltaInternetCard/>
    </main>
  );
}
