import React, { useEffect, useState } from 'react'



function ClickProject() {
  const [projects, setProjects] = useState([])


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/projects')
      const data = await response.json()
      setProjects(data.projects)
    }
    fetchData()
  }, [])

  return <div class="clickable-div">

    </div>
}