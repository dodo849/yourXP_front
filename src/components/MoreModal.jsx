import React from 'react'
import {
    MoreModalDiv,
    MoreModal,
    Text,
    Icon,
} from '../css/MoreModalStyle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShareNodes } from '@fortawesome/free-solid-svg-icons'

//신고하기,공유하기 버튼
function MoreButton() {
    return (
        <MoreModalDiv>
            <MoreModal>
                <Text>
                    신고하기
                </Text>
                <Icon>
                <FontAwesomeIcon icon={faBell} color='#767676'/>
                </Icon>
            </MoreModal>
            <hr/>
            <MoreModal>
                <Text>
                    공유하기
                </Text>
                <Icon>
                    <FontAwesomeIcon icon={faShareNodes} color='#767676' />
                </Icon>
            </MoreModal>
        </MoreModalDiv>
    )
}

export default MoreButton