import { useState } from "react";
import CommentForm from "./comment_form";
import CommentList from "./comment_list";

function Comments() {

  const [ comments, setComments ] = useState({
    nextPage: '',
    data: []
  });

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 pt-3">
      <div className="container-block">

        <CommentForm setComments={ setComments } />

        {/* SEPARATOR */} 
        <div className="relative mt-10 mb-10">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-2 bg-gray-100 text-sm text-gray-700">Muro de Ideas</span>
          </div>
        </div>

        <CommentList setComments={ setComments } comments={ comments } />
      
      </div>
    </div>
  );

}

export default Comments;