import fetch from "isomorphic-fetch";
import Error from "next/error";
import Layout from "../components/Layout";
import style from "../scss/styles.scss";
import CommentList from "../components/CommentList";


class Story extends React.Component {
  static async getInitialProps({ req, res, query }) {
    let story;
    try {
      const storyId = query.id;
      const response = await fetch(
        `https://node-hnapi.herokuapp.com/item/${storyId}`
      );
      story = await response.json();
    } catch (err) {
        console.log(err);
        story = null;
    }
    return { story };
  }
  render() {
    const { story } = this.props
    if(!story){
        return <Error/>
    }
    return <Layout title={story.title} backButton={true}>
        <main>
            <h1 className={style.storyTitle}><a href={story.url}>{story.title}</a></h1>
            <div className={style.storyDetails}>
                <strong>{story.points} points</strong>
                <strong>{story.comments_count} comments</strong>
                <strong>{story.time_ago}</strong>
            </div>

            {story.comments.length > 0 ? (
                <CommentList comments={story.comments}/>
            ) : <div><p>No Comments for this post.</p></div>}
        </main>

    </Layout>;
  }
}
export default Story;
