import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../store/currentUser'


function SplashPage() {
  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(setCurrentUser())
  })
  return <h1>This is the SplashPage</h1>
}

export default SplashPage
