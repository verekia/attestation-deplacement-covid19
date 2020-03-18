import React, { useState, useEffect } from 'react'

import Helmet from 'react-helmet'
import SignatureCanvas from 'react-signature-canvas'

import '../styles.css'

const handColor = '#3d3de6'

const IndexPage = () => {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [address, setAddress] = useState('')
  const [place, setPlace] = useState('')

  const [proChecked, setProChecked] = useState(false)
  const [groceriesChecked, setGroceriesChecked] = useState(false)
  const [healthChecked, setHealthChecked] = useState(false)
  const [familyChecked, setFamilyChecked] = useState(false)
  const [sportChecked, setSportChecked] = useState(false)

  useEffect(() => {
    setName(localStorage.getItem('name') || '')
    setBirth(localStorage.getItem('birth') || '')
    setAddress(localStorage.getItem('address') || '')
    setPlace(localStorage.getItem('place') || '')
  }, [])

  const handleNameChange = e => {
    setName(e.target.value)
    localStorage.setItem('name', e.target.value)
  }

  const handleBirthChange = e => {
    setBirth(e.target.value)
    localStorage.setItem('birth', e.target.value)
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
    localStorage.setItem('address', e.target.value)
  }

  const handlePlaceChange = e => {
    setPlace(e.target.value)
    localStorage.setItem('place', e.target.value)
  }

  return (
    <div>
      <div className="page">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap"
            rel="stylesheet"
          ></link>
        </Helmet>
        <h1 style={{ textAlign: 'center', fontSize: 30, marginBottom: 30 }}>
          ATTESTATION DE DÉPLACEMENT DÉROGATOIRE
        </h1>
        <p>
          En application de l’article 1er du décret du 16 mars 2020 portant réglementation des
          déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
        </p>
        <p>Je soussigné(e)</p>
        <div>
          <p style={{ float: 'left', width: '20%' }}>Mme / M.</p>
          <textarea
            style={{ float: 'right', width: '80%' }}
            onChange={handleNameChange}
            value={name}
          />
        </div>
        <div style={{ clear: 'both' }} />
        <div>
          <p style={{ float: 'left', width: '20%' }}>Né(e) le :</p>
          <textarea
            style={{ float: 'right', width: '80%' }}
            onChange={handleBirthChange}
            value={birth}
          />
        </div>
        <div style={{ clear: 'both' }} />
        <div>
          <p style={{ float: 'left', width: '20%' }}>Demeurant :</p>
          <textarea
            style={{ float: 'right', width: '80%' }}
            onChange={handleAddressChange}
            value={address}
          />
        </div>
        <div style={{ clear: 'both' }} />
        <p>
          certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par
          l’article 1er du décret du 16 mars 2020 portant réglementation des déplacements dans le
          cadre de la lutte contre la propagation du virus Covid-19 :
        </p>
        <form>
          <label style={{ color: proChecked ? handColor : '#333' }}>
            <input
              type="checkbox"
              value={proChecked}
              onChange={e => setProChecked(e.target.checked)}
            />
            déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle,
            lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous
            forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne
            pouvant être différés;
          </label>

          <label style={{ color: groceriesChecked ? handColor : '#333' }}>
            <input
              type="checkbox"
              value={groceriesChecked}
              onChange={e => setGroceriesChecked(e.target.checked)}
            />
            déplacements pour effectuer des achats de première nécessité dans des établissements
            autorisés (liste sur gouvernement.fr);
          </label>

          <label style={{ color: healthChecked ? handColor : '#333' }}>
            <input
              type="checkbox"
              value={healthChecked}
              onChange={e => setHealthChecked(e.target.checked)}
            />{' '}
            déplacements pour motif de santé;
          </label>

          <label style={{ color: familyChecked ? handColor : '#333' }}>
            <input
              type="checkbox"
              value={familyChecked}
              onChange={e => setFamilyChecked(e.target.checked)}
            />
            déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables
            ou la garde d’enfants;
          </label>

          <label style={{ color: sportChecked ? handColor : '#333' }}>
            <input
              type="checkbox"
              value={sportChecked}
              onChange={e => setSportChecked(e.target.checked)}
            />
            déplacements brefs, à proximité du domicile, liés à l’activité physique individuelle des
            personnes, à l’exclusion de toute pratique sportive collective, et aux besoins des
            animaux de compagnie.
          </label>
        </form>

        <p>
          Fait à{' '}
          <input type="text" style={{ width: 200 }} onChange={handlePlaceChange} value={place} />
          <br />
          <br />
          Le <input type="number" style={{ width: 40, margin: '0 5px' }} />/
          <input type="number" style={{ width: 40, margin: '0 5px' }} />
          /2020
        </p>
        <p>(signature)</p>
        <div style={{ overflow: 'hidden' }}>
          <SignatureCanvas
            penColor="#3d3de6"
            canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
          />
        </div>
      </div>
      <div className="no-print" style={{ textAlign: 'center', marginTop: 60, marginBottom: 20 }}>
        <a href="https://twitter.com/verekia" target="_blank" style={{ color: 'blue' }}>
          @verekia
        </a>
      </div>
    </div>
  )
}

export default IndexPage
