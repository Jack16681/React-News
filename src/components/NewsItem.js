import React from 'react';

const NewsItem = (props) => {

  let { title, description, imgurl, newsurl, author, publishedAt, source, mode } = props;

  const cardStyle = 
  {
    backgroundColor: mode === 'light' ? 'white' : '#454545',
    color: mode === 'light' ? 'black' : 'white'
  };

  return (
    <div className='my-2 mx-2'>
      <div className="card" style={cardStyle}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0',
          color: mode==='light'?'black':'white'
        }}
        >
          <span className="badge rounded-pill bg-warning" style={{ left: '90%', zIndex: 1 }}>
            {source}
          </span>
        </div>
        <img src={imgurl} className="card-img-top" alt="can't load image" />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <div classNmae="card-footer text-body-secondary my-2" style={cardStyle}>
            <b>Author:</b> {author}<br />
            <b>Published At:</b> {new Date(publishedAt).toGMTString()}
          </div>
          <a href={newsurl} target='_blank' className={`btn btn-sm btn-${mode==='light'?'dark':'light'}`}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
