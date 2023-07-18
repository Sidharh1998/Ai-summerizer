import { useEffect,useState } from "react"
//assets
import{copy,linkIcon,loader,tick} from '../assets'
//hook from store
import { useLazyGetSummaryQuery } from "../redux/article"
const Demo = () => {

  const [article,setArticle] = useState({
    url:'',
    summary:''
  })
  const [getSummary,{error , isFetching}] = useLazyGetSummaryQuery();
  const handleSubmit = async(e) =>{
    e.preventDefault();
     const {data} = await getSummary({articleUrl:article.url})

     if(data?.summary){
      const newArticle = {...article,summary: data.summary}

      setArticle(newArticle)

      console.log(newArticle);
     }

  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}
      <div className="flex flex-col w-full gap-2">
        <form className="relative flex justify-center items-center" onSubmit={handleSubmit}>
          {/* link img */}
          <img src={linkIcon} alt="link_icon" className="absolute left-0 my-2 ml-3 w-5"/>
          {/* input bar */}
          <input type="url" placeholder="Enter a URL" value={article.url} onChange={(e)=>setArticle({...article,url:e.target.value})} required
          className="url_input peer  "/>
          {/* search button */}
          <button type="submit" className="submit_btn peer-focus:border-gray-700
           peer-focus:text-gray-700">↵</button>
        </form>
        {/* Browser history */}

      </div>
    {/*Display Result */}
    </section>
  )
}

export default Demo
