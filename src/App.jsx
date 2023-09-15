import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CardOne from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main">
        <Header title="Adopta un Perrito" />
        <div className="Tarjetas">
          <CardOne
            cardImg="https://media.istockphoto.com/id/1188948984/es/foto/toma-de-estudio-de-un-adorable-boston-terrier.jpg?s=612x612&w=0&k=20&c=ONRH54OoaMgjcC2qZoMXlsgv8E5Ca7dhlhu0NhOPPvA="
            cardTitle="Lucky"
            cardText="Son perros que responden bien al adiestramiento y adecuadamente socializados serán amigables. Son utilizados principalmente como perros de compañía."
            bgBadge="secondary"
            textBadge="Boston Terrier"
          />
          <CardOne
            cardImg="https://media.istockphoto.com/id/1189721237/es/foto/tiro-de-estudio-de-un-adorable-perro-de-raza-mixta-sentado-y-buscando-satisfecho.jpg?s=612x612&w=0&k=20&c=qMYSR7RpupZM2P6H6rjmtwuZnL1T2AZ2wlLHmtrlDNo="
            cardTitle="Boston"
            cardText="Es una raza independiente y fuerte, responsable de la guardia y capaz de llevar a cabo las tareas por sí mismos, sin asistencia humana. Por esta razón, como perro de compañía debe ser socializado desde joven y tener compañía apropiada."
            bgBadge="primary"
            textBadge="Raza Mixta"
          />
          <CardOne
            cardImg="https://media.istockphoto.com/id/1181622437/es/foto/perro-lindo-en-el-estudio-sobre-un-fondo-gris.jpg?s=612x612&w=0&k=20&c=vy5YegxsHUYKJ11smsq8DaGTwIT9xnoBiegVNok-HJU="
            cardTitle="Nala"
            cardText="Son afectuosos y generalmente no son agresivos, pero tampoco tímidos. Disfrutan de la compañía y aunque puedan mostrarse inicialmente fríos con los extraños."
            bgBadge="danger"
            textBadge="Raza Mixta"
          />
          <CardOne
            cardImg="https://media.istockphoto.com/id/1195402409/es/foto/american-hairless-terrier-miente.jpg?s=612x612&w=0&k=20&c=bPWzlWrZ1SmmVl5xoLgjToCnNxylA3umNAoLvnN2u00="
            cardTitle="Shacha"
            cardText="Es una raza muy antigua, originada, según algunos cálculos, hace más de tres mil años."
            bgBadge="warning"
            textBadge="Xoloitzcuintle"
          />
        </div>
        <p className="TextoMain">
          Explora nuestra galeria de adopcion de perritos para encontrar a tu
          compañero perfecto. Tenemos una gran variedad de perros con diferentes
          personalidades y tamaños, todos en busca de un hogar amoroso. Cada
          imagen captura su esencia unica.
        </p>
        <Footer footerText="Fundación Cachorro Sano, todos los derechos Reservados" />
      </div>
    </>
  );
}

export default App;
