import "./style.css"

export const Card = ({ url, urlToImage, title, description, author }) => (
  <div className='CardNew' onClick={() => window.open(url, "_blank")}>
    <img className='imgNew' src={urlToImage || "no-image.jpg"} alt={title} />
    <h1 className='title'>{title}</h1>
    <p className='description'>{description}</p>
    <p className='AuthorNew'>Author: {author || "Not identified"}</p>
  </div>
)