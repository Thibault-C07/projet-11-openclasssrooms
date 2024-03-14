import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import logementsData from '../data/logements.json'
import LogementLayout from './Logements-layout'
import Slideshow from './Slideshow'
import Error from './Error'

const Caroussel = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [logement, setLogement] = useState(null)

  useEffect(() => {
    const selectedLogement = logementsData.find(
      (logement) => logement.id === id
    )
    if (!selectedLogement) {
      navigate('/404')
    }
    setLogement(selectedLogement)
  }, [id, navigate])

  const { pictures } = logement

  return !logement ? (
    <Error />
  ) : (
    <div>
      <Slideshow images={pictures} />
      <LogementLayout logement={logement} />
    </div>
  )
}

export default Caroussel
