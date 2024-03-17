import React from 'react'

export const Carousal = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
        <div className='carousel-caption' style={{zIndex:"10"}}>
        <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
        </div>
  <div className="carousel-inner row">
    <div className="carousel-item active " >
      <img className="d-block w-25 img-fluid h-25 " src="https://source.unsplash.com/random/900×700?burger" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700?piza" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/random/900×700?cooldrink" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  )
}
