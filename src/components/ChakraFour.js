import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';   
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
            <Description data={data[3]} />
            <Introduction data={data[3]} />
            <Activation data={data[3]} />
        </div>
    )
}
export default ChakraFour;