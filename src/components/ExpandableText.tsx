import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

interface Props {
    children: string;
}
function ExpandableText({children}: Props) {
    const [expended, setExpanded] = useState(false);
    const limit = 300;
    if(!children) return null;
    if(children.length <= limit) 
        return <Text>{children}</Text>
    const summary = expended ? children : children.substring(0,limit).concat('...');

    return (
        <Text>{summary} <Button size={'xs'} marginLeft={2} fontWeight={'bold'} colorScheme='yellow' 
        onClick={() => setExpanded(!expended)}>{expended ? 'show less' : 'show more'}</Button></Text>
    )
}

export default ExpandableText