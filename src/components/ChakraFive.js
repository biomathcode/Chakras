import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate,Effect, BalancedState, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {Link} from 'react-router-dom';
import ChakraFour from "../asserts/chakrafour.svg";
import ChakraSix from "../asserts/chakrasix.svg";
import Home from '../svg/meditation.svg'
import {data} from '../data/chakras';
import {AnimeFive} from '../svg/Animated'
const ChakraFive = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimeFive/>
            </ChakraContainer>
            <SEOhelate data={data[4]} />
            <ContentHeader data={data[4]} />
            <div>
                <Table data={data[4]} />
            </div>
            <div style={{"maxWidth": "600px"}}>
                <Description data={data[4]} />
                <Introduction data={data[4]} />
                <Effect data={data[4]} />
                <BalancedState data={data[4]} />
                <Activation data={data[4]} />
            </div>
            
            <div className="footer">
                <Link to="/Anahata" className="previousLink">
                    <button>
                        <img src={ChakraFour} width='45' height="45" alt="chakraTwo"/>
                    </button>
                </Link>
                <Link to="/Ajna" className="nextLink">
                    <button>
                        <img src={ChakraSix} width='45' height="45" alt="chakraFour"/>
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
export default ChakraFive;