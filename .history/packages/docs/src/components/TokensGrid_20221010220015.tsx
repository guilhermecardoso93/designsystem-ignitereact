/* eslint-disable prettier/prettier */
import React from 'react'

interface TokenGridProps {
  tokens: Record<string, string>
}

export default function TokensGrid({tokens}:TokenGridProps) {
  return (
    <table>
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
