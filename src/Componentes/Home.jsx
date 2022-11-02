import ImageSlider from "./ImageSlider";
export const Home = () => {

    const slides = [
        { url: "https://github.com/Juandi22001/Predicas/blob/master/UCRON.gif?raw=true", title: "beach" },
        { url: "https://www.fstelecom.com.br/wp-content/uploads/2020/05/4-caracter%C3%ADsticas-de-uma-estrutura-de-redes-efetiva.jpg", title: "boat" },

      ];
      const containerStyles = {
        width: "500px",
        height: "280px",
        margin: "0 auto",
      };  return (
        <div>
          <h1>Bienvenidos</h1>
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </div>)

}