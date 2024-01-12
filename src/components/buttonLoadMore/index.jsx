import "./style.css"

export const ButtonLoadMore = ({ onClick, disabled }) => (
  <button className='buttonLoadMore' disabled={disabled} onClick={onClick}>
    Load More
  </button>
)