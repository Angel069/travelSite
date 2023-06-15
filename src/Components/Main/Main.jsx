import React, {useEffect} from "react";
import './main.css'
import img from '../../assets/img (1).jpg'
import img2 from '../../assets/img (2).jpg'
import img3 from '../../assets/img (3).jpg'
import img4 from '../../assets/img (4).jpg'
import img5 from '../../assets/img (5).jpg'
import img6 from '../../assets/img (6).jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
      id: 1,
      imgSrc: img,
      destTitle: 'Machu Picchu',
      location: 'Peru',
      grade: 'CULTURAL RELAX',
      fees: '$500',
      description: 'Machu Picchu is an ancient Incan citadel located in the Peruvian Andes. It is one of the most popular tourist destinations in South America.'
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'CULTURAL RELAX',
      fees: '$600',
      description: 'The Taj Mahal is a white marble mausoleum located in Agra, India. It is considered one of the wonders of the world and an important UNESCO World Heritage site.'
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description: 'Mexico is a country rich in culture, with beautiful beaches, archaeological sites, and delicious cuisine. It features popular destinations such as Cancun, Mexico City, and Chichen Itza.'
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: 'Oslo',
      location: 'Norway',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      description: 'Norway is known for its stunning natural landscapes, fjords, mountains, and the Northern Lights. It is a popular destination for nature lovers and outdoor enthusiasts.'
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: 'Kioto',
      location: 'Japan',
      grade: 'CULTURAL RELAX',
      fees: '$900',
      description: 'Japan combines rich tradition with modern technology. Its vibrant cities, ancient temples, Zen gardens, and exquisite cuisine make it a fascinating destination to explore.'
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: 'Reikiavik',
      location: 'Iceland',
      grade: 'CULTURAL RELAX',
      fees: '$900',
      description: 'Iceland is known for its volcanic landscapes, geysers, waterfalls, and hot springs. It also offers the opportunity to see the Northern Lights and enjoy outdoor activities such as hiking and bathing in hot springs.'
    }
  ];
  

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-right" className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
            {
                Data.map (({id, imgSrc, destTitle, location, grade, fees, description}) => {
                    return (
                        <div key={id} data-aos="fade-up" className="singleDestination">

                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon"/>
                                    <span className="">{location}</span>
                                </span>

                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                </div>

                                <div className="desc">
                                    <p>{description}</p>
                                </div>

                                <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                                </button>
                            </div>
                        </div>
                    )
                })
            }

            </div>

        </section>
    )
}

export default Main