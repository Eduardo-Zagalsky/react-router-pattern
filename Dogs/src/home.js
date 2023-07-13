const Home = ({ dogs }) => {
    console.log(dogs);
    return (
        <div>
            {dogs.map((dog) => {
                return (
                    <div id="dogs">
                        <img src={dog.src} alt={dog.name} />
                        <h1>{dog.name}</h1>
                    </div>
                )
            })}
        </div>

    )
}
export default Home;