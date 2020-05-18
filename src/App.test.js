import React from 'react'
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from './App'

test('renders App without errors', () => {
     render(<App />)
})