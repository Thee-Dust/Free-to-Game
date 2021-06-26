import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../Context/AuthContext'

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signup } = useAuth()
  const [ error, setError ] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    if(passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (error) {
      setError("Failed to create an account")
    }
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2>Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmationRef} required/>
            </Form.Group>
            <Button type='submit'>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Already have an account? Log In
      </div>
    </div>
  )
}
