import React from 'react';
import "../Template/blog_template.css"
import {AnimatedChakraOne} from '../svg/Animated'
import {Link} from 'react-router-dom';
import ChakraTwo from '../asserts/chakratwo.svg'
import Home from '../svg/meditation.svg'
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description, Effect, BalancedState} from '../Template/BlogTemplate'
import {data} from '../data/chakras';

const ChakraOne = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimatedChakraOne/>
            </ChakraContainer>
            <SEOhelate data={data[0]} />
            <ContentHeader data={data[0]} />
            <Table data={data[0]} />
            <div style={{"maxWidth": "600px"}}>
                <Description data={data[0]} />
                <Introduction data={data[0]} />
                <Effect data={data[0]} />
                <BalancedState data={data[0]} />
                <Activation data={data[0]} />
            </div>
            <div className="footer">
                <Link to="/Svadhisthana">
                    <button>
                        <img src={ChakraTwo} width='45' height="45" alt="chakraTwo"/>
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
export default ChakraOne;