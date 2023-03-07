import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from '../Todo'

test('Todo renders content', () => {
    const todo = {
      text: 'Test test test...',
      done: false
    }

    render(<Todo todo={todo}  onClickComplete={() => {}}  onClickDelete={() => {}} />)

    const element = screen.getByText('Test test test...')
    expect(element).toBeDefined()
  })
