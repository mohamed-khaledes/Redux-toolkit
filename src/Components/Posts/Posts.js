import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../Redux/PostsSlice'

const Posts = () => {
    //==============================================================================================
    // the normal way to fetch data
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     const get=async()=>{
    //         const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
    //         setData(response)
    //     }
    //     get()
    // },[])
    //==============================================================================================
    const dispatch = useDispatch()
    const res = useSelector(state=>state.posts.posts)
    const loading = useSelector(state=>state.posts.loading)
    const error = useSelector(state=>state.posts.error)
    if(res){console.log(res)}
    useEffect(()=>{
        dispatch(getAllPosts('https://jsonplaceholder.typicode.com/todos'))
    },[])
  return (
    <div className='posts'>
        {
        error==null?
        <div>
        <h2>Api Posts</h2>
        {loading===false?
            res?
            res.map((item,index)=>{
                return(
                    <h5 key={index}>{item.title}</h5>
                )
            })
            :null
            :<h2>loading...</h2>
        }
        <div>
        </div>
        </div>
        :
        <div>
            <h2>{error}</h2>
        </div>
        }
    </div>
  )
}

export default Posts