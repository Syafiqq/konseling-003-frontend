export default function (base, keys, errors) {
  window._.forEach(keys || {}, (value) => {
    let formSel = window.$(`#${base}-${value}`)
    if (value in errors) {
      formSel.find('input').addClass('is-invalid')
      formSel.find('div.invalid-feedback').text(Array.isArray(errors[value]) ? errors[value][0] : errors[value])
    } else {
      formSel.find('input').removeClass('is-invalid')
    }
  })
}
