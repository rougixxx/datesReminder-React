import { Button, Container, Row, Col } from "react-bootstrap";
import { person } from "./data";
import { DatesCount}  from "./components/DatesCount";
import { DatesList } from "./components/DatesList";
import { DatesBtn } from "./components/DatesBtn";
import { useState, useEffect } from "react";

function App() {
  const [personData, setPersonData] = useState(person)
  const onDeleteData = () => {
 
    setPersonData([])
  }
  const onViewData = () => {
    setPersonData(person)
  }
  useEffect(() => {
    setPersonData([])
  }, [])
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData}/>
        <DatesBtn deleteData={onDeleteData} viewData={onViewData}/>


      </Container>
      
    </div>
  );
}

export default App;
