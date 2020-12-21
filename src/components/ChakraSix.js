import React from 'react';

import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';
import {AnimeSix} from '../svg/Animated';

const ChakraSix = () =>{
    return(
        <div>
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
            <Activation data={data[5]} />
        </div>
    )
}
export default ChakraSix;