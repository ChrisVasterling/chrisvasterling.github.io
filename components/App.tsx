import React from 'react'
import { HashRouter } from 'react-router-dom'
import Router from '../pages/router'
import PrimaryButton from './PrimaryButton'

export default function App (props: any): JSX.Element {
  return (
    <>
      <h1>⚠️Under Construction⚠️</h1>
      <span>- Chris Vasterling</span>
      <hr />
      <PrimaryButton />
      <br />
      <HashRouter>
        <Router />
      </HashRouter>
    </>
  )
}
