import React, { useState } from 'react'

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

function ListCardS({ title, summary, tag, view, date, heart, price }) {   
    const [isHeart, setIsHeart] = useState(true);

    return (
        <>
            <List>
                <ListInfo>
                    <Img></Img>
                    <ListText>
                        <Title>{title}</Title>
                        <Summary>{summary}</Summary>
                        <Tag>{tag}</Tag>
                        <Check>
                            <h6>
                                <FontAwesomeIcon icon={faEye} size='sm'color='#767676'/>&nbsp;{view}
                                &nbsp;&nbsp;{date}
                            </h6>
                        </Check>
                    </ListText>
                </ListInfo>
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