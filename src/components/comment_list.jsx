import { useEffect, useState } from "react";
import routes from "../api/routes";
import { useApi } from "../hooks/useApi";
import BtnLoadComments from "./btn_load_comments";
import Comment from "./comment";


function CommentList({ setComments, comments }) {

  const { callApi, loading } = useApi(true);

  const [editComment, setEditComment] = useState(null);

  // load init comments
  useEffect(() => {
    callApi({
      method: 'get',
      url: routes.get_comments()
    },{
      200: (xhr) => {
        setComments(comments => ({
          nextPage: xhr.links.next,
          data: [...comments.data, ...xhr.data]
        }));
      }
    });
  }, []);

  return (<div className="mb-8"> 
    {
      comments.data.map((comment,key) => (
        <Comment key={ key } data={ comment } editComment={ editComment } setEditComment={ setEditComment } setComments={ setComments } />        
        ))
    }
    {
      loading && 
      <div className="flex justify-center items-center py-6">
        <svg className="animate-spin -mr-1 ml-3 h-10 w-10 text-black-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-20" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
          <path className="opacity-70" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    }
    <BtnLoadComments nextPage={comments.nextPage} setComments={setComments} />
  </div>);
}

export default CommentList;