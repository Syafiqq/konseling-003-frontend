export default function (errors) {
  window._.forEach(errors || {}, (value) => {
    window.toastr.info(value)
  })
}
