import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description, BalancedState, Effect} from '../Template/BlogTemplate'
import {Link} from 'react-router-dom';
import {data} from '../data/chakras';
import {AnimeTwo} from '../svg/Animated'
import ChakraOne from '../asserts/chakraone.svg';
import ChakraThree from '../asserts/chakrathree.svg';
const ChakraTwo = () =>{
    return(
        <div  className="root">
            <ChakraContainer>
                <AnimeTwo/>
            </ChakraContainer>
            <SEOhelate data={data[1]} />
            <ContentHeader data={data[1]} />
            <div>
                <Table data={data[1]} />
            </div>
            <Description data={data[1]} />
            <Introduction data={data[1]} />
            <Effect data={data[1]} />
            <BalancedState data={data[1]} />
            <Activation data={data[1]} />
            <div className="footer">
                <Link to="/Muladhara" className="previousLink">
                    <button>
                        <img src={ChakraOne} width='45' height="45" alt="chakraOne"/>
                    </button>
                </Link>
                <Link to="/Manipura" className="nextLink">
                    <button>
                        <img src={ChakraThree} width='45' height="45" alt="chakraThree"/>
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default ChakraTwo;