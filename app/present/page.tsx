import { WaveAnimate } from "@/components/animate/Wave";
import { BannerComponent } from "@/components/module/Banner";
import { FormaComponent } from "@/components/module/Forma";
import { HeaderComponent } from "@/components/module/Header";
import "../../styles/App.scss";
import { ServiceComponent } from "@/components/module/Service";
import { FooterComponent } from "@/components/module/Footer";

export default function Present() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <WaveAnimate />
        <HeaderComponent />
        <BannerComponent />
        <FormaComponent />
        <ServiceComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
