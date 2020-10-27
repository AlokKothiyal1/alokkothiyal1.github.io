import React from 'react'
import Styles from './HomePage.module.css'
import { MdLocationOn,MdCall,MdEmail } from 'react-icons/md';
import {Link} from 'react-router-dom'


class HomePage extends React.Component{

    render(){
        return (
            <div className={`container ${Styles.main_container}`}>

                <div className={`my-3 position-relative ${Styles.profile_container}`}>
                    <img src="profile.jpg" alt="profile"></img>
                    <div className={`position-absolute ${Styles.decorative_circle}`}></div>
                </div>

                <div className={Styles.name}>
                    Alok Kothiyal
                </div>

                <div className={Styles.profession}>
                    Full Stack Developer
                </div>
                <br></br>
                
                <div>
                    <Link to={{pathname:"https://www.linkedin.com/in/alok-kothiyal-025191119/"}} target="_blank">
                        <img src="linkedin.png" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                    <Link to={{pathname:"https://twitter.com/alok_kothiyal"}} target="_blank">
                        <img src="twitter.png" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                    <Link to={{pathname:"https://github.com/AlokKothiyal1"}} target="_blank">
                        <img src="github.svg" className="mx-4" alt="logo" width="40px"></img>
                    </Link>
                </div>


                <div className={`row m-4 ${Styles.details}`}>
                    <div className="col-sm-12 col-lg-4">
                        <MdLocationOn size="40px" color="#FFC831"/>
                        <br></br>
                       Dehradun,India
                    </div>

                    <div className="col-sm-12 col-lg-4">
                       <MdCall size="40px" color="#FFC831"/> 
                       <br></br>
                      +91 789 5108 898
                    </div>

                    <div className="col-sm-12 col-lg-4">
                        <MdEmail size="40px" color="#FFC831"/> 
                        <br></br>
                       alokkothiyal08@gmail.com
                    </div>
                </div>

                <div className={`mb-5 px-5 ${Styles.details}`}>
                    A passionate aspiring Full Stack Developer skilled in MERN stack.
                    Actively ready to join in a great
                    lively team in a good start-up environment and give my best.
                </div>

                <div className={ ` container ${Styles.skills}`}>
                    <img src="html-5.svg" alt="logo"></img>
                    <img src="css.svg" alt="logo"></img>
                    <img src="js.svg" alt="logo"></img>
                    <br></br>
                    <img src="react.svg" alt="logo"></img>
                    <img src="bootstrap.svg" alt="logo"></img>
                    <img src="github.svg" alt="logo"></img>
                </div>
                
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default HomePage