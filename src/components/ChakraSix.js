import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate,BalancedState, Activation, Introduction, Description, Effect} from '../Template/BlogTemplate'
import {Link} from 'react-router-dom';
import ChakraFive from "../asserts/chakrafive.svg";
import ChakraSeven from "../asserts/chakraseven.svg";
import {data} from '../data/chakras';
import {AnimeSix} from '../svg/Animated';

const ChakraSix = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimeSix/>
            </ChakraContainer>
            <SEOhelate data={data[5]} />
            <ContentHeader data={data[5]} />
            <div>
                <Table data={data[5]} />
            </div>
            <Description data={data[5]} />
            <Introduction data={data[5]} />
            <Effect data={data[5]} />
            <BalancedState data={data[5]} />
            <Activation data={data[5]} />
            <div className="footer">
                <Link to="/Vishuddha" className="previousLink">
                    <button>
                        <img src={ChakraFive} width='45' height="45" alt="chakraTwo"/>
                    </button>
                </Link>
                <Link to="/Sahasrara" className="nextLink">
                    <button>
                        <img src={ChakraSeven} width='45' height="45" alt="chakraFour"/>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default ChakraSix;