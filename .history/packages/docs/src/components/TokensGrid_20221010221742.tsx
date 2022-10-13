/* eslint-disable prettier/prettier */
import React from "react"
import '../styles/token-grid.css'

interface TokenGridProps {
  tokens: Record<string, string>
  hasRemValue?: 
}

export function TokensGrid({ tokens }: TokenGridProps) {
  return (
    <table className='tokens-grid'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
