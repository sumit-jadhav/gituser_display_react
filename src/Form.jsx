import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useState } from "react"
import Card from "./User"

const InputForm = () => {
  const [userName, setUserName] = useState("")
  const [userData, setUserData] = useState(null)
  const handleChange = (e) => {
    setUserName(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if (response.ok) {
        const data = await response.json()
        setUserData(data)
        console.log(userData)
      } else {
        alert("User not found or an error occurred.")
      }
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Enter github username"
                value={userName}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Button type="submit" onClick={handleSubmit}>
                Search
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      {userData ? (
        <Card {...userData}></Card>
      ) : (
        <h2>Enter the valid user name</h2>
      )}
    </>
  )
}

export default InputForm
