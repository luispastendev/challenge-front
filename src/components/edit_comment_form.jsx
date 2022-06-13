import React from 'react'
import routes from '../api/routes';
import { useApi } from '../hooks/useApi';
import { useForm } from '../hooks/useForm';

function EditCommentForm({data, handleModeEdit, setComments}) {
  
  const [form, handleInputChange, setInputErrors] = useForm({
    body: {
      value: data.body,
      error: ''
    }
  });
  const { callApi, loading } = useApi(true);

  const cancel = () => {
    handleModeEdit(null);
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    callApi({
      method: 'put',
      url: routes.update_comment(data.id),
      data: {
        body: form.body.value
      }
    },{
      200: (xhr) => {
        // xhr.data
        setComments(comment => ({
          ...comment,
          data: comment.data.map(item => item.id === xhr.data.id ? xhr.data : item)
        }))
        cancel();
      },
      422: (xhr) => {
        setInputErrors(xhr.errors);
      }
    });
  }

  
  return (
    <form onSubmit={handleSubmit} className="pb-3"> 
      <div className="mt-1">
        <textarea
          rows={5}
          name="body"
          id="body"
          onChange={ handleInputChange } 
          value={ form.body.value }
          disabled={ loading }
          className={`${ form.body.error && 'inputError' } shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md`}
        />
        <p className="mt-2 text-xs text-red-600" id="body-error">
          { form.body.error }
        </p>
      </div>
      <div className='flex flex-row-reverse'>
        <button
          type="submit"
          className="mt-1 inline-flex items-center px-3 py-2 border border-transparent text-sm rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Actualizar
          {
            loading
              ?
                <svg className="animate-spin -mr-1 ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-20" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                  <path className="opacity-70" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              : ''
          }
        </button>
        <button
          type="submit"
          onClick={ cancel }
          className="mt-1 mr-2 inline-flex items-center px-3 py-2 border border-transparent text-sm rounded-md shadow-sm text-white bg-black-500 hover:bg-black-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default EditCommentForm;