import React from 'react'

import Helmet from 'react-helmet'

import { Global } from '@emotion/core'

const IndexPage = () => (
  <div>
    <Global styles={{ html: { fontFamily: 'Roboto' }, body: { width: 800, margin: '0 auto' } }} />
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
    </Helmet>
    <h1>ATTESTATION DE DÉPLACEMENT DÉROGATOIRE</h1>
    <p>
      En application de l’article 1er du décret du 16 mars 2020 portant réglementation des
      déplacements dans le cadre de la lutte contre la propagation du virus Covid-19 :
    </p>
    <p>Je soussigné(e)</p>
    <p>Mme / M.</p>
    <p>Né(e) le :</p>
    <p>Demeurant :</p>
    <p>
      certifie que mon déplacement est lié au motif suivant (cocher la case) autorisé par l’article
      1er du décret du 16 mars 2020 portant réglementation des déplacements dans le cadre de la
      lutte contre la propagation du virus Covid-19 :
    </p>
    <form>
      <p>
        déplacements entre le domicile et le lieu d’exercice de l’activité professionnelle,
        lorsqu’ils sont indispensables à l’exercice d’activités ne pouvant être organisées sous
        forme de télétravail (sur justificatif permanent) ou déplacements professionnels ne pouvant
        être différés ;
      </p>

      <p>
        déplacements pour effectuer des achats de première nécessité dans des établissements
        autorisés (liste sur gouvernement.fr) ;
      </p>

      <p>déplacements pour motif de santé ;</p>

      <p>
        déplacements pour motif familial impérieux, pour l’assistance aux personnes vulnérables ou
        la garde d’enfants ;
      </p>

      <p>
        déplacements brefs, à proximité du domicile, liés à l’activité physique individuelle des
        personnes, à l’exclusion de toute pratique sportive collective, et aux besoins des animaux
        de compagnie.
      </p>
    </form>

    <p>Fait à ................................., le......../......../2020</p>
    <p>(signature)</p>
  </div>
)

export default IndexPage
