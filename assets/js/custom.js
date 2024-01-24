window.addEventListener('load', () => {
  const formLegal = document.querySelector('.contact__form-label--accept')
  formLegal && formLegal.insertAdjacentHTML('beforebegin',
    '<ul style="font-size:.75em;margin:0">' +
      '<li><strong>Responsable:</strong> Clínica Horadent.</li>' +
      '<li><strong>Finalidad:</strong> Dar respuesta a las consultas y/o gestión de citas.</li>' +
      '<li><strong>Legitimación:</strong> Consentimiento del interesado.</li>' +
      '<li><strong>Destinatarios:</strong> No se cederán datos a terceros, salvo obligación legal.</li>' +
      '<li><strong>Derechos:</strong> Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos, como se explica en la información adicional.</li>' +
      '<li><strong>Información adicional:</strong> Puede consultar la información adicional y detallada sobre Protección de Datos Personales en el Aviso Legal y Política de Privacidad.</li>' +
    '</ul>'
  )
})
