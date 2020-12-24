import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';
import {AnimeThree} from '../svg/Animated'

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
            <Description data={data[2]} />
            <Introduction data={data[2]} />
            <Activation data={data[2]} />
        </div>
    )
}
export default ChakraThree;