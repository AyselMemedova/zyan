import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header_prtf from "./components/header/header";
import Main_prtf from "./components/main/main";
import Footer_prtf from "./components/footer/footer";



function App() {
  return (
    <div className="App">
      <Header_prtf />
      <Main_prtf />
      <Footer_prtf/>
    </div>
  );
}

export default App;
