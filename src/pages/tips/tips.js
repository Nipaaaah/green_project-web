import React, { useState, useEffect, Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { GetTips } from '../../services/tips.service'

// export default class Tips extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       tipList: []
//     }
//   }

//   componentDidMount() {
//     this.getAllTips()
//   }

//   async getAllTips() {
//     try {
//       const res = await GetTips();
//       setTimeout(() => {
//         this.setState({ tipList: res.data.tips })
//       }, 2000)
//       console.log(this.state.tipList)
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }

//   render() {
//     if (this.state.tipList.length === 0) {
//       return (
//         <div>
//           <Container fluid>
//             <Row>
//               <Col>
//                 Loading...
//               </Col>
//             </Row>
//           </Container>
//         </div >
//       )
//     }
//     return (
//       <div>
//         <Container fluid>
//           <Row>
//             <Col>
//               {this.state.tipList[0].id}
//             </Col>
//           </Row>
//         </Container>
//       </div >
//     )
//   }
// }
// const Tips = () => {
//   const [tipList, setTipList] = useState([]);

//   function getAllTips() {
//     try {
//       const res = GetTips();
//       setTipList(res);
//       console.log(tipList)
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }


const Tips = () => {

  const [tipList, setTipList] = useState([])

  const getAllTips = async () => {
    const res = await GetTips();
    setTipList(res.data.tips);

  }

  useEffect(() => {
    setTimeout(
      () => {
        getAllTips();
      }
      , 1000)
  },
    [tipList],
  )

  if (tipList.length === 0) {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              Loading...
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
  else {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>
              {tipList[0].name}
            </Col>
          </Row>
        </Container>
      </div >
    )
  }
}

export default Tips;