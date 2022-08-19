import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    List,
    ListInfo,
    ListText,
    Img,
    Title,
    Summary,
    Tag,
    Check,
    ListInfo2,
    Heart,
    Price,
    Line,
} from "../css/ListCardSStyle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import ToggledHeart from './ToggledHeart';

function ListCardS({ id, title, imgName, summary, tag1, tag2, tag3, view, date, heart, price }) {   
    const [isHeart, setIsHeart] = useState(true);

    const ListLink = styled(Link)`
    text-decoration: none;
    `;

    return (
        <>
            <List>
                <ListLink to={`/selllist/${id}`}>
                    <ListInfo>
                        <Img><img src={`https://port-0-yourxp-back-5faq24l6koz2gl.gksl1.cloudtype.app${imgName}`}/></Img>
                        <ListText>
                            <Title>{title}</Title>
                            <Summary>{summary}</Summary>
                            <Tag>#{tag1} #{tag2} #{tag3}</Tag>
                            <Check>
                                <h6>
                                    <FontAwesomeIcon icon={faEye} size='sm'color='#767676'/>&nbsp;{view}
                                    &nbsp;&nbsp;{date}
                                </h6>
                            </Check>
                        </ListText>
                    </ListInfo>
                </ListLink>
                <ListInfo2>
                    <Heart>
                        <ToggledHeart setIsHeart={setIsHeart}/>
                        <hr/>
                        <p>{heart}</p>
                    </Heart>
                    <Price>
                        <p>Point</p>
                        <span>{price}</span>
                    </Price>
                </ListInfo2>
            </List>
            <Line/>
        </>

    )
}

export default ListCardS;