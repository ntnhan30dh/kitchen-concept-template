import React, { useState, useEffect } from "react"
import Slider from "react-slick"

import ig1 from "../images/ig/ig1.png"
import ig2 from "../images/ig/ig2.png"
import ig3 from "../images/ig/ig3.png"

import { useStyle } from "./context/styleContext";

const Ig = () =>{

    const [insta, setInsta] = useState(undefined)

    const style = useStyle();

    const token = "IGQVJWRml3WEo0YndiY0VRN0pJVV9LSGVLamI0ZA2tfODJKaU9sckRtTEExNEEwaEJ2VUhNd3FudWdNanhFdkpQYXRNQVBnYm1kTjNDcGhiN3lscE9qdnh1UmVWLXNkWHM2YlVQOGZAQNGZAOaDJ6SVBydQZDZD1234"
   
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=${
    token
  }`

  const pics = [ig1, ig2, ig3,ig1, ig2, ig3]
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  }

  const IGlinks = "https://www.instagram.com/byeverydaysa/"

  useEffect(() => {
    setInsta(undefined)
    fetch(url)
      .then(data => data.json())
      .then(data => {
        setInsta(data.data)
        // console.log("insta",insta)
       // console.log("data", data)
      })
  }, [url])

  return (
      <section className="ig " id="ig">
      <div className={` ${style.mx} ${style.mt_md} ${style.mb_sm} max-w-lg`}>
        <a
          href={IGlinks}
          target="_blank"
          className="text-black "
          rel="noreferrer"
        >
          <h2
            className={`${style.text.h2} mb-2 md:mb-3`}
          >
            Follow us
          </h2>
        </a>
        <p className={`${style.text.body1} `}> Ningen pohuvis fäsade attefallshus, krorar.
Lörem ipsum prektigt ode, bisigon helänade. </p>
      </div>
      <a
          href={IGlinks}
          target="_blank"
          rel="noreferrer"
        >
      <Slider {...settings} className="">
        {insta
          ? insta
              .filter(photo => photo.media_type === "IMAGE")
              .map(photo => (
                <img src={photo.media_url} alt="pic" className=" igFeeds " />
              ))
          : pics.map(i => {
              return <img src={i} alt="" />
            })}
      </Slider>
      </a>
    </section>
  )
}

export default Ig