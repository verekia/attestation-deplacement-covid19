import React from 'react'

import Helmet from 'react-helmet'
import SignatureCanvas from 'react-signature-canvas'

import '../styles.css'

const IndexPage = () => (
  <div>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
      <link
        href="https://fonts.googleapis.com/css?family=Permanent+Marker&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
    <h1>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</h1>
    <p>
      En application de l’article 1er du décret du 16 mars 2020 portant réglementation des
      déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
    </p>
    <p>Je soussigné(e)</p>
    <div>
      <p style={{ float: 'left', width: '20%' }}>Mme / M.</p>
      <textarea style={{ float: 'right', width: '80%' }}></textarea>
    </div>
    <div style={{ clear: 'both' }} />
    <div>
      <p style={{ float: 'left', width: '20%' }}>Né(e) le :</p>
      <textarea style={{ float: 'right', width: '80%' }}></textarea>
    </div>
    <div style={{ clear: 'both' }} />
    <div>
      <p style={{ float: 'left', width: '20%' }}>Demeurant :</p>
      <textarea style={{ float: 'right', width: '80%' }}></textarea>
    </div>
    <div style={{ clear: 'both' }} />
    <p>
      certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l’article
      1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la
      lutte contre la propagation du virus Covid-19 :
    </p>
    <form>
      <p>
        <input type="checkbox" />
        déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle,
        lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous
        forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant
        être différés ;
      </p>

      <p>
        <input type="checkbox" />
        déplacements pour effectuer des achats de première nécessité dans des établissements
        autorisés (liste sur gouvernement.fr) ;
      </p>

      <p>
        <input type="checkbox" /> déplacements pour motif de santé ;
      </p>

      <p>
        <input type="checkbox" />
        déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables ou
        la garde d’enfants ;
      </p>

      <p>
        <input type="checkbox" />
        déplacements brefs, à proximité du domicile, liés à l’activité physique individuelle des
        personnes, à l’exclusion de toute pratique sportive collective, et aux besoins des animaux
        de compagnie.
      </p>
    </form>

    <p>
      Fait à <input type="text" style={{ width: 200 }} />, le{' '}
      <input type="text" style={{ width: 30 }} />/<input type="text" style={{ width: 30 }} />
      /2020
    </p>
    <p>(signature)</p>
    <SignatureCanvas
      penColor="#3d3de6"
      canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
    />
  </div>
)

export default IndexPage
