export default function Article({ item }) {
  return (
    <div className='article'>
      <h3>{item.title}</h3>
      <div className='content'>
        <p className='date'><span>Date:</span> {item.createdOn.date}</p>
        <p className='source'><span>Source:</span> {item.source}</p>
        <p className='ai-summary highlighted'><span>AI Summary:</span> {item.summary}</p>
        <p className='categories'><span>Categories:</span> {item.categories.join(', ')}</p>
      </div>
      <div className='article-icons'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <title>Add to Favorites</title>
          <path d='M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z' />
        </svg>
        <a href={item.link} target='_blank' rel='noopener noreferrer'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <title>Go to Article</title>
            <path d='M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z' />
          </svg>
        </a>
      </div>
    </div>
  );
}