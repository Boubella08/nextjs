
import Articleitem from "../../components/Article/articleitem";
import { Article } from "@/utiles/type"
import { error } from "console";

const page = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  
 
  
  const articles: Article[] = await response.json();
  console.log(articles)

  return (

    <section className="container m-auto px-5">
      <div className="flex items-center justify-center flex-wrap gap-4">

        {articles.map(item => (
          <Articleitem article={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}

export default page
