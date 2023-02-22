import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'
export default function FunctionContextComponent() {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    background: darkTheme ? '#CCC' : '#333',
    color: darkTheme ? '#333' : '#CCC',
    padding: '2rem',
    margin: '2rem',
  }
  return (
    <>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div class="wrapper" style={themeStyles}>Function Theme</div>
    </>
  )
}
