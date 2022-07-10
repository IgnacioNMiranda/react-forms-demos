import { OrForm, OrFormType, OrFormProps } from './components'
import { finalFormControlsMock, formikControlsMock, hookFormControlsMock, nativeControlsMock } from './mocks'

function App() {
  const onSubmit: OrFormProps['handleSubmit'] = (values) => {
    // Here would send data to some service based on a serviceType prop or whatever.
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <main className="min-h-screen w-full flex flex-col justify-center items-center">
      <h1 className="pt-4 pb-20 lg:pb-40 text-4xl text-slate-700 font-bold text-center px-8">
        ⚛️ React Forms Demos 📃
      </h1>
      <div className="w-full flex flex-wrap justify-center gap-10 px-8 py-4">
        <div className="flex flex-col gap-2 w-full sm:w-64">
          <h2 className="text-center uppercase text-slate-600 font-bold">Native Form</h2>
          <OrForm type={OrFormType.NATIVE} controls={nativeControlsMock} handleSubmit={onSubmit} />
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-64">
          <h2 className="text-center uppercase text-slate-600 font-bold">Formik Form</h2>
          <OrForm type={OrFormType.FORMIK} controls={formikControlsMock} handleSubmit={onSubmit} />
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-64">
          <h2 className="text-center uppercase text-slate-600 font-bold">Final Form</h2>
          <OrForm type={OrFormType.FINAL_FORM} controls={finalFormControlsMock} handleSubmit={onSubmit} />
        </div>

        <div className="flex flex-col gap-2 w-full sm:w-64">
          <h2 className="text-center uppercase text-slate-600 font-bold">Hook Form</h2>
          <OrForm type={OrFormType.HOOK_FORM} controls={hookFormControlsMock} handleSubmit={onSubmit} />
        </div>
      </div>
    </main>
  )
}

export default App
