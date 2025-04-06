import ConfigPresentation_01 from "./ConfigPresentation_01";
import FirstSlide from "./FirstSlide";


export default function PresentationConfig() {




  return (
    <div className="h-100 w-100 ">
      <div className=" carousel slide " data-bs-touch="false" data-bs-interval='false' id="tutorialPages">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <FirstSlide />
          </div>
          <div className="carousel-item ">
            <ConfigPresentation_01 />
          </div>
        </div>
      </div>
    </div >
  )
}