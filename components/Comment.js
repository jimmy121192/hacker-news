import style from '../scss/styles.scss'

const Comment = ({comment}) => console.log(comment) || (
    <div className={style.comment}>
        <div className={style.commentUser}>{comment.user}</div>
        <div className={style.commentContent} dangerouslySetInnerHTML={{__html: comment.content}}>

        </div>

        {comment.comments && (
            <div className={style.nestedComments}>
                {comment.comments.map(nestedComment => (
                    <Comment key={nestedComment.id} comment={nestedComment}/>
                )
                )}
            </div>
        )}    
    </div>
)

export default Comment;