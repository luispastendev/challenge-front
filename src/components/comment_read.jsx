import React, { useContext } from 'react'
import moment from 'moment';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';
import routes from '../api/routes';
import { useApi } from '../hooks/useApi';
import UserContext from '../lib/context';

function CommentRead({ data, setComments, handleModeEdit }) {

  const { callApi } = useApi(true);
  const { user } = useContext(UserContext);


  const isItUserComment = () => {
    return user.id === data.user.id;
  }
  const deleteComment = () => {
    if (window.confirm("Deseas Eliminar el registro?")) {

      callApi({
        method: 'delete',
        url: routes.delete_comment(data.id),
      },{
        200: (xhr) => {
          setComments(comment => ({
            ...comment,
            data: comment.data.filter(item => item.id !== data.id)
          }));
        },
        404: (xhr) => {
          console.log(xhr);
        }
      })

    }
  }

  return (
    <div className="bg-white shadow sm:rounded-lg mb-4">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-lg leading-6 font-medium text-black-900">{data.user.name}</h3>
        <p className="text-md leading-6 font-base text-black-400">{moment(data.created_at).format('Y/M/D')} - {moment(data.created_at).format('LT')}</p>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-[700px] text-sm text-black-500">
            <p className='text-black-400'>
              {data.body}
            </p>
          </div>
          <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
            <span className="relative z-0 inline-flex shadow-sm rounded-md">
              {
                isItUserComment() && (<>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-black-100 bg-white text-sm font-medium text-black-400 hover:bg-black-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    onClick={ () => handleModeEdit(data.id) }
                  >
                    <span className="sr-only">Edit</span>
                    <PencilAltIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-black-100 bg-white text-sm font-medium text-black-400 hover:bg-black-100 focus:z-10 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                    onClick={ () => deleteComment() }
                  >
                    <span className="sr-only">Delete</span>
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>)
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentRead;