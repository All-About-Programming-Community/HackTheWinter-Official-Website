

const Tracks = () => {
  let tracks = ["FrontEnd Development", "Backend Development", "Blockchain/Web3.0", "Data Science", "Cloud Computing", "Android Development"]
  return (
    <div className="px-28 py-28">
      <h1 className="text-5xl">Domains</h1>
      <ul className="pt-8">
        {tracks.map((track, idx) => {
          return (
          <li key={idx} className="text-2xl tracking-wide border-2 border-[#005550] py-6 my-6 text-white bg-[#005550] rounded-full text-center">
            <h2>{track}</h2>
          </li>
          )})}
      </ul>
    </div>
  )
}

export default Tracks