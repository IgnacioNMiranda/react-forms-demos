import { OrForm, MlFormFieldProps, OrFormType } from './components'

const controls: MlFormFieldProps[] = [
  {
    id: 'firstName',
    name: 'firstName',
    placeholder: 'Name',
    type: 'text',
    errorMessage: '',
    required: false,
    maxLength: 15,
  },
  {
    id: 'lastName',
    name: 'lastName',
    placeholder: 'Last Name',
    type: 'text',
    errorMessage: '',
    required: false,
    maxLength: 20,
  },
  {
    id: 'email',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
    errorMessage: 'You have to enter a valid email',
    required: true,
  },
  {
    id: 'password',
    name: 'password',
    placeholder: 'Password',
    type: 'password',
    errorMessage: 'You have to enter a password',
    required: true,
  },
]

function App() {
  return (
    <main className="h-screen w-full flex justify-center items-center">
      <OrForm type={OrFormType.FORMIK} controls={controls} />
    </main>
  )
}

export default App
