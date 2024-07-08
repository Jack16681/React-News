import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {


  const capitaliseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  // static defaultProps = {
  //   country: 'in',
  //   pgSize: 10,
  //   category: 'general'
  // }
  // static propTypes = {
  //   country: PropTypes.string,
  //   pgSize: PropTypes.number,
  //   category: PropTypes.string
  // }

  

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //     loading: true,
  //     page: 1,
  //     author: this.author,
  //     publishedAt: this.publishedAt,
  //     source: this.source,
  //     totalResults: 0
  //   }
  //   document.title = `${this.capitaliseFirst(this.props.category)}` - "News";
  // }

  const update = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&pageSize=${props.pgSize}&apiKey=85007c8d78364e7f8dc3daee743a5f63`;
    // setState({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let pastData = await data.json();
    props.setProgress(70);
    setArticles(pastData.articles)
    setTotalResults(pastData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: pastData.articles,
    //   totalResults: pastData.totalResults,
    //   loading: false
    // });
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitaliseFirst(props.category)} - News`;
    update();
  }, [])


  // async componentDidMount() {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=1&pageSize=${this.props.pgSize}&apiKey=85007c8d78364e7f8dc3daee743a5f63`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let pastData = await data.json();
  //   // this.setState({articles:pastData.articles, 
  //   // totalResults:pastData.totalResults,
  //   // loading: false});

  //   this.update();
  // }

  // prev = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}page=${this.state.page-1}&pageSize=${this.props.pgSize}&apiKey=85007c8d78364e7f8dc3daee743a5f63`;
  //   // this.setState({loading: true})
  //   // let data = await fetch(url);
  //   // let pastData = await data.json();
  //   // this.setState({
  //   //   page:this.state.page-1,
  //   //   articles:pastData.articles,
  //   //   loading:false,
  //   // })

  //   this.setState(prevState => ({ page: prevState.page - 1 }), this.update);
  // }

  // next = async () => {
  //   // if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pgSize)))
  //   // {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&page=${this.state.page+1}&pageSize=${this.props.pgSize}&apiKey=85007c8d78364e7f8dc3daee743a5f63`;
  //   //   this.setState({loading: true});
  //   //   let data = await fetch(url);
  //   //   let pastData = await data.json();
  //   //   this.setState({
  //   //     page:this.state.page+1,
  //   //     articles:pastData.articles,
  //   //     loading:false,
  //   //   })
  //   // }

  //   this.setState(nextState => ({ page: nextState.page + 1 }), this.update);
  // }

  const fetchMoreData = async () => {
    setPage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+1}&pageSize=${props.pgSize}&apiKey=85007c8d78364e7f8dc3daee743a5f63`;

    let data = await fetch(url);
    let pastData = await data.json();
    setArticles(articles.concat(pastData.articles))
    setTotalResults(pastData.totalResults)
    // this.setState({
    //   articles: state.articles.concat(pastData.articles),
    //   totalResults: pastData.totalResults,
    //   page: nextpage
    // });
  };

  return (

    <div className="container-fluid my-3" style={{ paddingTop: '60px' }}>
      <h2 className='text-center my-3' style={{ margin:'35px 0px', marginTop:'90px'}}>News Today Headlines-{capitaliseFirst(props.category)}</h2>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            {articles.map((ele) => {
              console.log(ele);
              return <div className="col-md-3 mx-2 my-2" key={ele.url}>
                <NewsItem title={ele.title ? ele.title.slice(0, 50) : ""} description={ele.description ? ele.description.slice(0, 150) : ""} imgurl={ele.urlToImage ? ele.urlToImage : "https://i.ytimg.com/vi/t-L6Z3PF-w0/maxresdefault.jpg"} newsurl={ele.url} author={ele.author ? ele.author : "Unknown"} source={ele.source ? ele.source.name : "Unknown"} publishedAt={ele.publishedAt ? ele.publishedAt : "Unknown"} mode={props.mode}/>
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="flex d-flex justify-content-between mx-2 my-3">
          <button type="button" className="btn btn-dark" disabled={this.state.page <= 1} onClick={this.prev}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page === Math.ceil(this.state.totalResults / 20)} onClick={this.next}>Next&rarr;</button>
        </div> */}
    </div>
  )
}


News.defaultProps = {
  country: 'in',
  pgSize: 10,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pgSize: PropTypes.number,
  category: PropTypes.string
};

export default News;