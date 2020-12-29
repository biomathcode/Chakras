import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader,Effect, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {Link} from 'react-router-dom';
import {data} from '../data/chakras';
import {AnimeThree} from '../svg/Animated'
import Home from '../svg/meditation.svg'
import ChakraTwo from '../asserts/chakratwo.svg';
import ChakraFour from '../asserts/chakrafour.svg';

const ChakraThree = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimeThree/>
            </ChakraContainer>
            <SEOhelate data={data[2]} />
            <ContentHeader data={data[2]} />
            <div>
                <Table data={data[2]} />
            </div>
            <div style={{"maxWidth": "600px"}}>
            <Description data={data[2]} />
            <Introduction data={data[2]} />
            <Effect data={data[2]} />
            <Activation data={data[2]} />  

            </div>
             
            <div className="footer">
                <Link to="/Svadhisthana" className="previousLink">
                    <button>
                        <img src={ChakraTwo} width='45' height="45" alt="chakraTwo"/>
                    </button>
                </Link>
                <Link to="/Anahata" className="nextLink">
                    <button>
                        <img src={ChakraFour} width='45' height="45" alt="chakraFour"/>
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
export default ChakraThree;