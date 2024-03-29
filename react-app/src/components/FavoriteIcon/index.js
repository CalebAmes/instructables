import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from '../../store/favorite'
import { getProjects } from '../../store/project'
import { getUsers } from '../../store/user'


function AddFavorite() {
  const dispatch = useDispatch()

  const projectItems = useSelector((state) => state.project)
  const userItems = useSelector((state) => state.user)
  const favoriteItems = useSelector((state) => state.favorite)

  const projects = Object.values(projectItems)
  const users = Object.values(userItems)
  const favorites = Object.values(favoriteItems)

  useEffect(() => {
    dispatch(getProjects())
    dispatch(getUsers())
    dispatch(getFavorite())
  }, [dispatch])

  return (
    <h1>here are some faves</h1>
  )

}

export default AddFavorite
