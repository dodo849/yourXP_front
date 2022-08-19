import React from 'react'
import {
    StandardModalDiv,
    Modal,
    Text,
} from '../css/StandardModalStyle';

function StandardModal() {
    return (
        <StandardModalDiv>
            <Modal>
                <Text>
                    최신순
                </Text>
            </Modal>
            <hr/>
            <Modal>
                <Text>
                    추천순
                </Text>
            </Modal>
            <hr/>
            <Modal>
                <Text>
                    조회순
                </Text>
            </Modal>
        </StandardModalDiv>
    )
}

export default StandardModal