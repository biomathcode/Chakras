import React from 'react';

import {Table, ChakraContainer, ContentHeader, SEOhelate, Activation, Introduction, Description} from '../Template/BlogTemplate'
import {data} from '../data/chakras';
import {AnimeSeven} from '../svg/Animated';

const ChakraSeven = () =>{
    return(
        <div>
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