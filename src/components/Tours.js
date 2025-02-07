import Card from "./Card"
function Tours({tours, removeTour}) {
      return(
        <div className ="container">
            <h2 className = "title" >Plan With Rajiv</h2>
            <div className = "cards">
                {
                    tours.map((tour) => {
                        return(
                            <div> 
                                <Card  key={tour.id} {...tour} removeTour = {removeTour}></Card>
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
      );

}

export default Tours;