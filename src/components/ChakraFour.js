import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader,Effect, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {Link} from 'react-router-dom';
import ChakraThree from "../asserts/chakrathree.svg";
import ChakraFive from "../asserts/chakrafive.svg";
import {data} from '../data/chakras';  
import Home from '../svg/meditation.svg' 
import {AnimeFour} from '../svg/Animated'

const ChakraFour = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimeFour />
            </ChakraContainer>
            <SEOhelate data={data[3]} />
            <ContentHeader data={data[3]} />
            <div>
                <Table data={data[3]} />
            </div>
            <div style={{"maxWidth": "600px"}}>
                <Description data={data[3]} />
                <Introduction data={data[3]} />
                <Effect data={data[3]} />
                <Activation data={data[3]} />
            </div>
           
            <div className="footer">
                <Link to="/Manipura" className="previousLink">
                    <button>
                        <img src={ChakraThree} width='45' height="45" alt="chakraTwo"/>
                    </button>
                </Link>
                <Link to="/Vishuddha" className="nextLink">
                    <button>
                        <img src={ChakraFive} width='45' height="45" alt="chakraFour"/>
                    </button>
                </Link>

            </div>
            <div className="homelink">
                <Link to="/">
                    <img src={Home} width="45" height="45" alt="home" />
                </Link>
            </div>
            
        </div>
    )
}
export default ChakraFour;