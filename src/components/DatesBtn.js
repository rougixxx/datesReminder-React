import {Row, Col} from "react-bootstrap"
export const DatesBtn = ( {deleteData, viewData}) => {
    return (
        <Row className="justify-content-center my-2">
          <Col sm="8"  className="d-flex justify-content-between" >
             <button className="btn-style p-2" onClick={deleteData}>مسح الكل</button>
             <button className="btn-style p-2" onClick={viewData}>عرض البيانات</button>
          </Col>
        </Row>

    )
}