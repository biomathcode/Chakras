import React from 'react';

import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';
import {AnimeFive} from '../svg/Animated'
const ChakraFive = () =>{
    return(
        <div>
            <ChakraContainer>
                <AnimeFive/>
            </ChakraContainer>
            <SEOhelate data={data[4]} />
            <ContentHeader data={data[4]} />
            <div>
                <Table data={data[4]} />
            </div>
            <Description data={data[4]} />
            <Introduction data={data[4]} />
            <Activation data={data[4]} />
        </div>
    )
}
export default ChakraFive;