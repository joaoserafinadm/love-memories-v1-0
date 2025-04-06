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
            2
          </div>
        </div>
      </div>
    </div >
  )
}