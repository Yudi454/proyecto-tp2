import Article from "./Article"
import Aside from "./Aside"
import LangTable from "./LangTable"

const MainHome = ({lenguajes}) => {



  return (
    <div>
        <Aside/>
        <Article lenguajes={lenguajes}/>
        <LangTable lenguajes={lenguajes}/>
    </div>
  )
}

export default MainHome
