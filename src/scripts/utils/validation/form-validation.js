export default function (base, keys, errors) {
  window._.forEach(keys || {}, (value, key) => {
    let formSel = window.$(`#${base}-${key}`)
    if (key in errors) {
      switch (value) {
        case 'input' :
          formSel.find('input').addClass('is-invalid')
          break
      }
      formSel.find('div.invalid-feedback').text(Array.isArray(errors[key]) ? errors[key][0] : errors[key])
    } else {
      switch (value) {
        case 'input' :
          formSel.find('input').removeClass('is-invalid')
          break
      }
    }
  })
}
