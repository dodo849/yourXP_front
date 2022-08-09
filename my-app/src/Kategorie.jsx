import React from 'react'
import {
    KategorieDiv,
    KategorieButton,
    BigTag,
} from './styledComponenet';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


//svg 파일 사용해야하는데 임시로 png파일 사용
import KateIcon1 from './img/icon/license.png';
import KateIcon2 from './img/icon/job.png';
import KateIcon3 from './img/icon/fitness.png';
import KateIcon4 from './img/icon/travel.png';
import KateIcon5 from './img/icon/etc.png';

function Kategorie() {
    return (
        <KategorieDiv>
            <KategorieButton>
                <img src={ KateIcon1 } width='22px' height='22px'/>
                <BigTag>자격증</BigTag>
                <FontAwesomeIcon icon={faAngleDown} size='xs' color='#000000'/>
            </KategorieButton>
            <KategorieButton>
                <img src={ KateIcon2 } width='22px' height='22px'/>
                <BigTag>취업</BigTag>
                <FontAwesomeIcon icon={faAngleDown} size='xs' color='#000000'/>
            </KategorieButton>
            <KategorieButton>
                <img src={ KateIcon3 } width='22px' height='22px'/>
                <BigTag>운동</BigTag>
                <FontAwesomeIcon icon={faAngleDown} size='xs' color='#000000'/>
            </KategorieButton>
            <KategorieButton>
                <img src={ KateIcon4 } width='22px' height='22px'/>
                <BigTag>여행</BigTag>
                <FontAwesomeIcon icon={faAngleDown} size='xs' color='#000000'/>
            </KategorieButton>
            <KategorieButton>
                <img src={ KateIcon5 } width='22px' height='22px'/>
                <BigTag>기타</BigTag>
                <FontAwesomeIcon icon={faAngleDown} size='xs' color='#000000'/>
            </KategorieButton>
        </KategorieDiv>
    )
}

export default Kategorie;