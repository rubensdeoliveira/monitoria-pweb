import { useRouter } from 'next/router'
import api, { addBearerToken } from '../services/api'
import {Formik} from 'formik'
import * as Yup from 'yup'

export default function Login () {
  const router = useRouter()

  return (
    <Formik
       initialValues={{ email: '', password: '' }}
       validationSchema={Yup.object({
         email: Yup.string().email('Invalid email address').required('Required'),
         password: Yup.string()
         .required('Required'),
       })}
       onSubmit={async (values, { setSubmitting }) => {
          try{
            const response = await api.post('sessions', values)

            addBearerToken(response.data.token)

            router.push('/dashboard')
          } catch {
            console.log('erro')
          }
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
 
           <label htmlFor="email">Email</label>
           <input id="email" type="email" {...formik.getFieldProps('email')} />
           {formik.touched.email && formik.errors.email ? (
             <div>{formik.errors.email}</div>
           ) : null}


          <label htmlFor="password">Senha</label>
           <input
             id="password"
             type="password"
             {...formik.getFieldProps('password')}
           />
           {formik.touched.password && formik.errors.password ? (
             <div>{formik.errors.password}</div>
           ) : null}
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
  )
}