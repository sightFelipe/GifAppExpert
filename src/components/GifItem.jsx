const GifItem = ({title, url, id}) => {
    
  return (
    // <ol>
    //   <li key={img.id}> 
    //         {img.title}
    //   </li>
    // </ol>

    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifItem
