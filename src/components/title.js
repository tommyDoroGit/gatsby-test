import React from "react"

import styled from "styled-components"


/* React notes - This is a function declaration syntax to create component with props. 
No need to include render as that is required in React.Component constructor. 'This' is not available as it isn;t bound to the function declaration.
*/

const Title = styled.h1`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

export default function PageTitle(props) {
    return( 
        <Title>{props.title}</Title>
    )
}

PageTitle.defaultProps = {
    title: 'New Page'
};