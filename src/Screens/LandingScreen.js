import React from 'react'
import data from '../data.json'
import './LandingScreen.css'
import MoviesCard from '../Components/MoviesCard'

function LandingScreen(){
    return(
        <>
            {
                data.moviesData.map((elem, index) =>{
                    return<MoviesCard imgSrc = {elem.imageSrc} duration = {elem.duration} name = {elem.name} director = {elem.director} type = {elem.type} about = {elem.about} year ={elem.year} key = {index}/>
                })
            }
        </>
    )
}

export default LandingScreen;