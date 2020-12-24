import React from 'react';
import "../Template/blog_template.css"
import {AnimatedChakraOne} from '../svg/Animated'
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';

const ChakraOne = () =>{
    return(
        <div className="root">
            <ChakraContainer>
                <AnimatedChakraOne/>
            </ChakraContainer>
            <SEOhelate data={data[0]} />
            <ContentHeader data={data[0]} className="" />
                <Table data={data[0]} />
            <Description data={data[0]} />
            <Introduction data={data[0]} />
            <Activation data={data[0]} />
        </div>
    )
}
export default ChakraOne;