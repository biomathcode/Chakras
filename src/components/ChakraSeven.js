import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate,Effect,BalancedState, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {Link} from 'react-router-dom';
import ChakraSix from "../asserts/chakrasix.svg";
import {data} from '../data/chakras';
import {AnimeSeven} from '../svg/Animated';

const ChakraSeven = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimeSeven/>
            </ChakraContainer>
            <SEOhelate data={data[6]} />
            <ContentHeader data={data[6]} />
            <div>
                <Table data={data[6]} />
            </div>
            <Description data={data[6]} />
            <Introduction data={data[6]} />
            <Effect data={data[6]} />
            {/* <BalancedState data={data[6]} /> */}
            <Activation data={data[6]} />
            <div className="footer">
                <Link to="/Ajna" className="previousLink">
                    <button>
                        <img src={ChakraSix} width='45' height="45" alt="chakraTwo"/>
                    </button>
                </Link>
                
            </div>
        </div>
    )
}
export default ChakraSeven;