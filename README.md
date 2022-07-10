# `react-forms-demos`

## Description

Small Vite project built with learning purposes. It defines forms using React Libraries like `Formik`, `React Final Form`, and `React Hook Form`.

## Considerations

### 1. Native forms (with no packages)

Personal preference:

* Does not consider files for the sake of simplicity.

### 2. Package: Formik (v2.2.9)

Personal preference:

* Does not use `<Formik>` or `<Field>` components in order to make `MlFormField` independant of the selected form.
* Does not use `Yup` validation because things like *required*, *maxLength*, or *minLength* depends on the form field. Using nested Yup rules would be as verbose as not using them at all.

### 3. Package: React Final Form (v6.5.9)

Package behaviour:

* It seems like does not allow to identify if some field has errors before being filled (e.g. required fields), leading to false positive validations.

### 4. Package: React Hook Form (v7.33.1)

Package behaviour:

* It won't show errors or any feedback until the user submit the form.

## Author

[IgnacioNMiranda](https://www.linkedin.com/in/ignacio-miranda-figueroa/)

## License

[MIT](LICENSE)
