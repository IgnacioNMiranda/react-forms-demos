import { MlFormFieldProps } from '../components'

/**
 * Multiple mocks were used just for the sake of simplicity. The ideal case is that
 * every form has fields with unique ids and names.
 */

export const nativeControlsMock: MlFormFieldProps[] = [
  {
    id: 'firstName',
    name: 'First Name',
    placeholder: 'Name',
    type: 'text',
    errorMessage: 'Name cannot contain more than 15 characters',
    required: false,
    maxLength: 15,
  },
  {
    id: 'lastName',
    name: 'Last Name',
    placeholder: 'Last Name',
    type: 'text',
    errorMessage: 'Last Name cannot contain more than 20 characters',
    required: false,
    maxLength: 20,
  },
  {
    id: 'email',
    name: 'Email',
    placeholder: 'Email',
    type: 'email',
    errorMessage: 'You have to enter a valid email',
    required: true,
  },
  {
    id: 'password',
    name: 'Password',
    placeholder: 'Password',
    type: 'password',
    errorMessage: 'You have to enter a password',
    required: true,
  },
]

export const formikControlsMock: MlFormFieldProps[] = [
  {
    id: 'age',
    name: 'Age',
    placeholder: 'Age',
    type: 'number',
    errorMessage: `You have to enter a valid age`,
    required: false,
    maxLength: 3,
    minLength: 1,
  },
  {
    id: 'formikFirstName',
    name: 'First Name',
    placeholder: 'First Name',
    type: 'text',
    errorMessage: 'Cannot contain more than 20 characters',
    required: true,
    maxLength: 20,
  },
  {
    id: 'company',
    name: 'Company ',
    placeholder: 'Company',
    type: 'text',
    errorMessage: 'You have to enter a valid company',
    required: false,
  },
  {
    id: 'formikEmail',
    name: 'Email',
    placeholder: 'Email',
    type: 'email',
    errorMessage: 'You have to enter a valid email',
    required: true,
  },
]

export const finalFormControlsMock: MlFormFieldProps[] = [
  {
    id: 'finalName',
    name: 'Name',
    placeholder: 'Name',
    type: 'text',
    errorMessage: 'Name cannot contain more than 15 characters',
    required: false,
    maxLength: 15,
  },
  {
    id: 'finalLastName',
    name: 'lastName',
    placeholder: 'Last Name',
    type: 'text',
    errorMessage: 'Last Name cannot contain more than 20 characters',
    required: false,
    maxLength: 20,
  },
  {
    id: 'finalEmail',
    name: 'Email',
    placeholder: 'Email',
    type: 'email',
    errorMessage: 'You have to enter a valid email',
    required: true,
  },
  {
    id: 'finalPassword',
    name: 'Password',
    placeholder: 'Password',
    type: 'password',
    errorMessage: 'You have to enter a password',
    required: true,
  },
]

export const hookFormControlsMock: MlFormFieldProps[] = [
  {
    id: 'ageHook',
    name: 'Age',
    placeholder: 'Age',
    type: 'number',
    errorMessage: `You have to enter a valid age`,
    required: false,
    maxLength: 3,
    minLength: 1,
  },
  {
    id: 'companyHook',
    name: 'Company ',
    placeholder: 'Company',
    type: 'text',
    errorMessage: 'You have to enter a valid company',
    minLength: 2,
    required: true,
  },
  {
    id: 'hookPassword',
    name: 'Password',
    placeholder: 'Password',
    type: 'password',
    errorMessage: 'You have to enter a password',
    minLength: 9,
    required: true,
  },
  {
    id: 'hookEmail',
    name: 'Email',
    placeholder: 'Email',
    type: 'email',
    errorMessage: 'You have to enter a valid email',
    required: true,
  },
]
