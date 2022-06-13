import React from 'react'
import { useApi } from '../hooks/useApi';

function BtnLoadComments({ nextPage, setComments }) {

  const { callApi, loading } = useApi(true);

  const loadChunk = () => {
    callApi({
      method: 'get',
      url: nextPage
    },{
      200: (xhr) => {
        setComments(comments => ({
          nextPage: xhr.links.next,
          data: [...comments.data, ...xhr.data]
        }));
      },
    })
  }

  return (
    nextPage && 
    <button
      onClick={loadChunk}
      type="submit"
      disabled={ loading }
      className="mt-1 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Cargar mas ...
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
  )
}

export default BtnLoadComments