import React from 'react'
import routes from '../api/routes';
import { useApi } from '../hooks/useApi';
import { useForm } from '../hooks/useForm';


function CommentForm({ setComments }) {
  const { callApi, loading } = useApi(true);
  const [form, handleInputChange, setInputErrors, setInputValues, cleanForm] = useForm({
    body: {
      value: '',
      error: ''
    }
  });
  const { body } = form;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    callApi({
      method: 'post',
      url: routes.store_comment(), 
      data: { body: body.value }
    },{
      201: (xhr) => {
        setComments(comments => ({
          ...comments,
          data: [ xhr.data,...comments.data ]
        }));
        cleanForm();
      },
      422: (xhr) => {
        setInputErrors(xhr.errors);
      }
    });
  }

  return (
      <div className='mt-20 max-w-[800px] mx-auto'>
        <h1 className='block font-bold text-2xl mb-5 underline underline-offset-8 decoration-red-500 decoration-4'>
          COMPARTE TU IDEA
        </h1>
        <form onSubmit={handleSubmit}> 
          <div className="mt-1">
            <textarea
              rows={5}
              name="body"
              id="body"
              onChange={ handleInputChange } 
              value={ body.value }
              disabled={ loading }
              className={`${ body.error && 'inputError' } shadow-sm focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md`}
            />
            <p className="mt-2 text-xs text-red-600" id="body-error">
              { body.error }
            </p>
          </div>
          <div className='flex flex-row-reverse'>
            <button
              type="submit"
              className="mt-1 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Publicar
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
          </div>
        </form>
      </div>

  );
}

export default CommentForm;