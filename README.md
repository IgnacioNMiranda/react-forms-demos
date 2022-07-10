# `react-forms-demos`

## Description

Small Vite project built with learning purposes. It defines forms using React Libraries like `Formik`, `Coming Soon`, and `Coming Soon`.

## Considerations

### Native

* Does not consider files for the sake of simplicity.

### Formik

* Does not use `<Formik>` or `<Field>` components in order to make `MlFormField` independant of the selected form.
* Does not use `Yup` validation because things like *required*, *maxLength*, or *minLength* depends on the form field. Using nested Yup rules would be as verbose as not using them at all.

## Author

[IgnacioNMiranda](https://www.linkedin.com/in/ignacio-miranda-figueroa/)

## License

[MIT](LICENSE)
