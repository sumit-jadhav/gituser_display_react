import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import moment from "moment"
import { memo } from "react"

const UserCard = (props) => {
  console.log(props)
  const { name, avatar_url, public_gists, public_repos, created_at, login } =
    props
  const formateDate = moment(created_at).format("DD/MM/YYYY")
  console.log(name)
  return (
    <Card border="success" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avatar_url} />

      <Card.Body>
        <Card.Title>{login}</Card.Title>
        <ListGroup className="list-group-flush">
          {name ? (
            <ListGroup.Item>{name}</ListGroup.Item>
          ) : (
            <ListGroup.Item>Name not present</ListGroup.Item>
          )}
          <ListGroup.Item>
            <Row>
              <Col xs="auto">Public gists</Col>
              <Col xs="auto"> {public_gists}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs="auto">Public repos</Col>
              <Col xs="auto"> {public_repos}</Col>
            </Row>
          </ListGroup.Item>

          <ListGroup.Item>
            <Row>
              <Col xs="auto">Date</Col>
              <Col xs="auto"> {formateDate}</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default memo(UserCard)
