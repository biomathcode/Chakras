import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';
import {AnimeTwo} from '../svg/Animated'
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
            <Activation data={data[1]} />
        </div>
    )
}
export default ChakraTwo;