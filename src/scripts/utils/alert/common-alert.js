export default function (errors) {
  window._.forEach(errors || [], (value) => {
    if (value.length > 0) {
      window.toastr.info(value)
    }
  })
}
