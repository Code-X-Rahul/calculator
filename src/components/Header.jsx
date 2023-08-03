import React from 'react'

const Header = ({ result, number, number2, operator, showResult }) => {
  return (
    <header>

      {result === undefined && <p className='process'>{number} {operator} {number2}</p>}
      {result !== undefined && <p>{result}</p>}
    </header>
  )
}

export default Header