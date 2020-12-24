import React from 'react';
import "../Template/blog_template.css"
import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
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
            <Activation data={data[6]} />
        </div>
    )
}
export default ChakraSeven;