
import BlogList from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs,error, isPending} = useFetch('http://localhost:3000/blogs')
  
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} title="Blog List" /> }
    </div>
  );
}
 
export default Home;