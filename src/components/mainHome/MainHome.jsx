import Article from "./Article"
import Aside from "./Aside"
import LangTable from "./LangTable"

const MainHome = ({lenguajes}) => {



  return (
    <div>
        <Aside/>
        <Article lenguajes={lenguajes}/>
        <LangTable/>
    </div>
  )
}

export default MainHome
