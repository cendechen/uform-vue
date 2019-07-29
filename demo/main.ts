import createForm from '../packages/core/src'

console.log("hello world")
console.log(createForm)
const form = createForm({
  initialValues: {
    aa: 123,
    bb: 222
  },
  onSubmit: ({ formState }) => {
    console.log(formState)
  },
  onFieldChange: ({ formState }) => {
    console.log(formState)
  }
})

form.registerField('aa', {
  onChange(fieldState) {
    console.log(fieldState)
  }
})

setTimeout(() => {
  form.setValue('aa', 456)
  setTimeout(() => {
    form.submit()
  }, 1000)
}, 500)
