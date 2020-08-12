import React from 'react'
import styled from 'styled-components/macro'


const StyledFormSection = styled.section`
background-color: #eb5b51;
color: #fff;
`
//röd färg eb5b51

export const FormSection = () => {
  return (
    <StyledFormSection>
      <h2>Få 10 gode råd om digital transformation</h2>
      <h3>Ja tak, jeg vil gerne höre mere om digital transformation</h3>

      {/* FORM KMMER HÄR */}
      {/* Button component komme rhär */}

      {/* Form Navn, Mobil, e-mail, postnr., by */}
      {/* knapp - ring mig op */}
    </StyledFormSection>
  )
}