import { Col, Row } from "react-bootstrap"
import { PeopleFill, Receipt } from "react-bootstrap-icons"

type Competency = {
    item: {
        ability: string;
        where: string;
    }
    key: number

}

const SingleComp = (props: Competency) => {

    const random = (): number => {
        const min = 1;
        const max = 5;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const number = random()

    return (
        <Row >
            <Col className="mb-3">
                <p className="p-0 m-0 fw-bold ">{props.item.ability}</p>
                <div className="ps-2">
                    <div className="d-flex gap-2 align-items-center mb-1">
                        <Receipt size={20}/>
                        <p className="p-0 m-0"> {props.item.where}</p>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <PeopleFill size={20}/>
                        <p className="p-0 m-0">{number} {number ===1? 'conferma' : 'conferme'}</p>
                    </div>
                </div>

            </Col>
            <hr />
        </Row>
    )
}

export default SingleComp