import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Home() {

  //  here for the card some data is fetched from backend and then card can display

  const [foodcat, setfoodcat] = useState([]);   //in this use state we declare[] because we want to use array
  const [fooditem, setfooditem] = useState([]);

  const loaddata = async () => {
    let response = await fetch("https://backend-food-delivery-app-mern.vercel.app/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })

    response = await response.json();
    // console.log(response[0] , response[1]);
    setfoodcat(response[1]);
    setfooditem(response[0]);
  }


  useEffect(() => {
    loaddata();
  }, [])


  // for search bar
  const [search , setsearch] = useState("");



  return (
    <>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>

          <div className="carousel-inner" id='coursel'>
            <div className="carousel-caption" style={{ zIndex: "1" }}>
            {/* search  bar */}
              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setsearch(e.target.value)}}/>
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://source.unsplash.com/random/900x400/?pizza" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x400/?chips" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://source.unsplash.com/random/900x400/?barbeque" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


      </div>


      {/* taking food category on the home page */}
      <div className="container">
        {
          foodcat.length > 0 ? (
            foodcat.map((data) => {
              return <div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>

                <hr />

                {
                  fooditem.length > 0 ? (
                    fooditem.filter((items) => (items.CategoryName === data.CategoryName) && (items.name.toLowerCase().includes(search.toLocaleLowerCase())))
                      .map(filterItems => {
                        return (
                          <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                            <Card
                              foodItem={filterItems}
                              options={filterItems.options[0]}
                            />
                          </div>
                        )
                      })
                  ) : (
                    <div>No items available for this category</div>
                  )
                }
              </div>
            })
          ) : (
            <div>No food categories available</div>
          )
        }
      </div>

      <div><Footer /></div>
    </>
  )
}

export default Home;
