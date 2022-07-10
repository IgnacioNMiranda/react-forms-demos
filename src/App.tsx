import { OrForm, OrFormType, OrFormProps } from './components'
import { finalFormControlsMock, formikControlsMock, hookFormControlsMock, nativeControlsMock } from './mocks'

function App() {
  const onSubmit: OrFormProps['handleSubmit'] = (values) => {
    // This would send data to a service based on some serviceType prop or whatever.
    alert(JSON.stringify(values))
  }

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="pt-4 pb-20 lg:pb-40 text-4xl text-slate-700 font-bold">⚛️ React Forms Demos 📃</h1>
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-8 py-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-center uppercase text-slate-600 font-bold">Native Form</h2>
          <OrForm type={OrFormType.NATIVE} controls={nativeControlsMock} handleSubmit={onSubmit} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-center uppercase text-slate-600 font-bold">Formik Form</h2>
          <OrForm type={OrFormType.FORMIK} controls={formikControlsMock} handleSubmit={onSubmit} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-center uppercase text-slate-600 font-bold">Hook Form</h2>
          <OrForm type={OrFormType.NATIVE} controls={hookFormControlsMock} handleSubmit={onSubmit} />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-center uppercase text-slate-600 font-bold">Final Form</h2>
          <OrForm type={OrFormType.NATIVE} controls={finalFormControlsMock} handleSubmit={onSubmit} />
        </div>
      </div>
    </main>
  )
}

export default App
