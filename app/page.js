import Header from "./component/Header";
import Footer from "./component/Footer";
import Charger from "./component/Charger";
import Spacial from "./component/Spacial";
import Problem from "./component/Problem";
import Swip from "./component/Swip";
import Order from "./component/Order";


export default function Home() {
  return (
    <div className="">
      <main className="">
      
      <Header />
      <Charger />
      <Spacial />
      <Problem />
      <Swip />
      <Order />
      <Footer />
  
      </main>
    </div>
  );
}
