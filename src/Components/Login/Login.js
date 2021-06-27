import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../../Context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [ error, setError ] = useState('')
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try{
      setError('')
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (err) {
      setError('Email or password is incorrect')
    }
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2>Login</h2>
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
            <Button type='submit'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Don't have an account? <Link to='/signup'>Sign up</Link>  
      </div>
    </div>
  )
}
