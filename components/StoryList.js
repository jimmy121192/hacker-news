import style from '../scss/styles.scss'
import Link from 'next/link';
const StoryList = ({stories}) => {
    return (
        <div className={style.storyList}>
        {stories.map(story => (
            <div className={style.story} key={story.id}>
                <h3 className={style.storyTitle}>
                    <a href={story.url}>{story.title}</a>
                </h3>
                <div className={style.storyDetails}>
                    <span>{story.points || 0} points</span>            
                    <span>{story.comments_count || 0 } comments</span>
                    <Link href={`/story?id=${story.id}`}>
                        <a>Read More</a>
                    </Link>
                </div>
            </div>

            
        ))}
        </div>
    )
}

export default StoryList;

