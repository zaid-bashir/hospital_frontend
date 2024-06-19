/* eslint-disable react/prop-types */

const Biography = ({ imageUrl }) => {
    return (
        <div className="container biography" >
            <div className="banner">
                <img src={imageUrl} alt="aboutImg" />
            </div>
            <div className="banner">
                <p>Biography</p>
                <h3>Who Are We</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio at fugiat qui quasi dolore sequi adipisci debitis dolores delectus, provident a culpa quod necessitatibus modi excepturi, aut quos quaerat officiis atque ducimus voluptates iusto odio! Magni perferendis commodi voluptatum sint facere eum, harum non asperiores, repudiandae vel fugit totam, voluptatibus nulla dolor vitae consequuntur atque! Est ratione facilis in officia?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, voluptatibus?</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia optio nemo laboriosam repellendus quae eaque vero cum harum, voluptatum veritatis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facilis.</p>
            </div>
        </div>

    )
}

export default Biography