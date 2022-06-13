import React, { useContext } from 'react'
import UserContext from '../lib/context';
import CommentRead from './comment_read';
import EditCommentForm from './edit_comment_form';

function Comment({data, editComment, setEditComment, setComments}) {
  
  const { user } = useContext(UserContext);
  

  const handleModeEdit = (id) => {
    setEditComment(id);
  }

  const canEdit = () => {
    return editComment === data.id && user.id === data.user.id;
  }

  return (<>
    {
      canEdit()
        ? <EditCommentForm handleModeEdit={ handleModeEdit } data={ data } setComments={ setComments } />
        : <CommentRead data={ data } setComments={ setComments } handleModeEdit={ handleModeEdit } />
    }
  </>)
}


export default Comment