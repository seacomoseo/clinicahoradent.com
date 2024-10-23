window.addEventListener('load', () => {
  const formLegalEs = document.querySelector('#contacto .contact__form-label--accept')
  formLegalEs && formLegalEs.insertAdjacentHTML('beforebegin',
    '<ul style="font-size:.75em;margin:0">' +
      '<li><strong>Responsable:</strong> Clínica Horadent.</li>' +
      '<li><strong>Finalidad:</strong> Dar respuesta a las consultas y/o gestión de citas.</li>' +
      '<li><strong>Legitimación:</strong> Consentimiento del interesado.</li>' +
      '<li><strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal.</li>' +
      '<li><strong>Derechos:</strong> Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.</li>' +
      '<li><strong>Información adicional:</strong> Puede consultar la información adicional y detallada sobre Protección de Datos Personales en el Aviso Legal y Política de Privacidad.</li>' +
    '</ul>'
  )
  const formLegalEn = document.querySelector('#contact .contact__form-label--accept')
  formLegalEn && formLegalEn.insertAdjacentHTML('beforebegin',
    '<ul style="font-size:.75em;margin:0">' +
      '<li><strong>Responsible:</strong> Horadent Clinic.' +
      '<li><strong>Purpose:</strong> To respond to queries and/or appointment management.' +
      '<li><strong>Legitimation:</strong> Consent of the interested party.' +
      '<li><strong>Addressees:</strong> No data will be transferred to third parties, except under legal obligation.' +
      '<li><strong>Rights:</strong> You have the right to access, rectify and delete the data, as well as other rights, as explained in the additional information.' +
      '<li><strong>Additional information:</strong> You can consult the additional and detailed information on Personal Data Protection in the Legal Notice and Privacy Policy.' +
    '</ul>'
  )
})
