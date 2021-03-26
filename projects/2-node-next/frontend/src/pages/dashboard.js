import { Formik } from "formik"
import { useCallback, useEffect, useState } from "react"
import api from "../services/api"
import * as Yup from 'yup'

export default function Dashboard () {
  const [books, setBooks] = useState([])
  const [book, setBook] = useState(null)

  const getBooks = useCallback(()=>{
    api.get('books').then(response => {
      setBooks(response.data)
    }).catch(err => {
      console.log(err)
    })
  },[])

  useEffect(()=>{
    getBooks()
  },[])

  const handleDeleteClick = useCallback(async (id)=>{
    try{
      await api.delete(`books/${id}`)

      getBooks()
    } catch (err) {
      console.log(err.response.data)
    }
  }, [books])

  const handleUpdateClick = useCallback(async (id)=>{
    try{
      await api.put(`books/${id}`, { title: 'Titulo alterado', pages: 100 })

      getBooks()
    } catch (err) {
      console.log(err.response.data)
    }
  }, [books])

  const handleShowClick = useCallback(async (id)=>{
    try{
      const { data:book } = await api.get(`books/${id}`)

      setBook(book)
    } catch (err) {
      console.log(err.response.data)
    }
  }, [])
  
  return (
    <>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title}
            <button type="button" onClick={() => handleDeleteClick(book.id)}>Deletar</button>
            <button type="button" onClick={() => handleUpdateClick(book.id)}>Atualizar</button>
            <button type="button" onClick={() => handleShowClick(book.id)}>Mostrar detalhes</button>
          </li>
        ))}
      </ul>

      {book 
        ? <>
          <p>Título: {book.title}</p>
          <p>Número de páginas: {book.pages}</p>
          <p>Criador do livro: {book.owner.name}</p>
        </> 
        : null}

     <Formik
       initialValues={{ title: '', pages: '' }}
       validationSchema={Yup.object({
         title: Yup.string().required('Required'),
         pages: Yup.number().required('Required'),
       })}
       onSubmit={async (values, { setSubmitting }) => {
          try{
            await api.post('books', values)

            getBooks()
          } catch (err) {
            console.log(err)
          }
       }}
     >
       {formik => (
         <form onSubmit={formik.handleSubmit}>
 
           <label htmlFor="title">Título</label>
           <input id="title" type="text" {...formik.getFieldProps('title')} />
           {formik.touched.title && formik.errors.title ? (
             <div>{formik.errors.title}</div>
           ) : null}


          <label htmlFor="pages">Quantidade de páginas</label>
           <input
             id="pages"
             type="number"
             {...formik.getFieldProps('pages')}
           />
           {formik.touched.pages && formik.errors.pages ? (
             <div>{formik.errors.pages}</div>
           ) : null}
 
           <button type="submit">Submit</button>
         </form>
       )}
     </Formik>
    </>
  )
}