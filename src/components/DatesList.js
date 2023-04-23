import {Row ,Col } from 'react-bootstrap';
export const DatesList = ( {person}) => {
    return (
        <Row className="justify-content-center my-2">
        <Col sm="8"  >
             <div className="rectangle p-2">
              {person.length ? (person.map( (item) => {
                 return (
                  <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                  <img className="img-avatar"  src="pain.jpg" alt="image" />
                  <div className="px-3 ">
                   <p className="d-inline fs-5 ">{item.name}</p>
                   <p className=" fs-6 ">{item.date} </p>
                  </div>
               </div>
                )
              })): <h2>There is nothing</h2>}
             </div>
        </Col>
      </Row>
    )
}