import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <div className="header-info">
                    <h2>Taste the World, One Street at a Time</h2>
                    <p>From street food to gourmet cuisine, SavorStreet is your go-to destination for all things delicious. Our passion for food knows no bounds, and we invite you to explore our collection of recipes, cooking tips, and food stories that will ignite your love for the culinary world.</p>
                    <button>View Menu</button>
                </div>

                <div className="header-img">
                    <img src="./pizza-header.jpeg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header