import React , {useState, useEffect}from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
    ListInfo,
    ListText,
    Title,
    Summary,
    Tag,
    Check,
    ListInfo2,
    Line,
} from "../css/ListCardSStyle"
import {
    List,
    Price,
} from "../css/ListCardBStyle"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

function ListCardB({ id, title, summary, tag, view, date, price, deadline}) {
    
    const ListLink = styled(Link)`
    text-decoration: none;
    `;

    return (
        <>
            <List>
                <ListLink to={`/buylist/${id}`}>
                    <ListInfo>
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
                </ListLink>
                <ListInfo2>
                    <Price>
                        <p>Point</p>&nbsp;
                        <span>{price}</span>&nbsp;
                        <p>마감</p>&nbsp;
                        <span>{deadline}</span>
                    </Price>
                </ListInfo2>
            </List>
            <Line/>
        </>
    )
    }

export default ListCardB