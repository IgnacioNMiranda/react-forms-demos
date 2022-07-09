import { OrForm, MlFormFieldProps, OrFormType } from './components'

const controls: MlFormFieldProps[] = [
  {
    id: 'firstName',
    name: 'firstName',
    placeholder: 'Name',
    type: 'text',
    errorMessage: 'Name cannot contain more than 15 characters',
    required: false,
    maxLength: 15,
  },
  {
    id: 'lastName',
    name: 'lastName',
    placeholder: 'Last Name',
    type: 'text',
    errorMessage: 'Last Name cannot contain more than 20 characters',
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
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-center uppercase text-slate-600 font-bold">Formik Form</h2>
          <OrForm type={OrFormType.FORMIK} controls={controls} />
        </div>
      </div>
    </main>
  )
}

export default App
