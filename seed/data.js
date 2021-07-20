import db from "../db/connection.js"
import Wine from "../models/wine.js"

const insertData = async () => {
    //reset database 
    await db.dropDatabase()
    
    //creating wine list
    const wines = [
        {
            "name": "Fortuna Terrae Malbec",
            "vineyard": "Catena Zapata Adrianna Vineyard",
            "year": 2016,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143657/best-wine-adrianna-vineyard-luxe-digital%402x.jpg",
            "description": "Selecting our overall best wine was no easy task but this 2016 Malbec is sure to be a winner no matter who’s pouring it. It’s an incredibly nuanced and detailed wine, promising depth and character from every sip. One of the highest rated wines, it’s a critic’s favourite and a rich, aromatic bottle to delight family and friends over dinner. \nThought to be perhaps the best ever wine produced by Catena, it’s dense and fresh, full-bodied and layered, flavourful and elegant all at once. It’s a wine to please the masses but a bottle that you’d be forgiven for saving for yourself. Featuring aromas of roses and pine needles with hints of spice and tobacco, it’s a wine that just keeps on giving. Enjoy it for its bold and structured notes.",
            "type": "red"
        },

        {
            "name": "A Shot In The Dark",
            "vineyard": "Sine Qua Non",
            "year": 2006,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143759/best-wine-sine-qua-non-luxe-digital%402x.jpg",
            "description": 
            "An extremely highly-rated wine, Sine Qua Non proved its expertise again with its 2006 Syrah. This is one of the most premium wines produced in California and comes with the price tag to match. Its popularity stems from its incredibly velvety tannins and dense, layered flavours. A Shot in the Dark is composed of 96.5% Syrah and 3.5% Viognier from the 11 Confessions Vineyard and is a rich and intense red wine with plenty of character. \nOnly 442 cases of this wine were produced and it’s one that’s best held onto for at least a few more years. It offers an aroma of blueberry pie, blackberries, Asian spices and forest floor with a hint of chocolate when sipped. It spent 32 months ageing in barrels before being bottled and is a stunning wine from start to finish.",
            "type": "red"
        },

        {
            "name":  "Grgich Hills Estate Chardonnay",
            "vineyard": "Grgich Hills Estate",
            "year": 2016,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143718/best-wine-grgich-hills-estate-chardonnay-luxe-digital%402x.jpg",
            "description": "Fresh and balanced, Grgich Hills produces distinctive wines and its 2016 Chardonnay is just that at an accessible price. A creamy and flavourful medium-bodied wine, it’s full and well-rounded with plenty of intense, fruity notes. It’s produced using biodynamically grown grapes and is beautifully structured with pear, apple, pineapple, peach and honey flavours.\nThe 2016 is one to open now, with a crisp acidity that’s balanced through from the first sip to the last. Aged in stainless steel barrels, it’s a classic vintage Chardonnay that’s known for being one of the best and relatively easy to get hold of. Enjoy each of its tropical layers to really get a feel for the structure that makes up this bottle.",
            "type": "white"
        },

        {
            "name": "Screaming Eagle Cabernet Sauvignon",
            "vineyard": "Screaming Eagle",
            "year": 2010,
            "imgURL": "https://cdn.luxe.digital/media/2020/05/07134053/best-wine-screaming-eagle-cabernet-sauvignon-luxe-digital%402x.jpg",
            "description": "Screaming Eagle is a name you’ll hear again and again when talking about high quality wine and takes the top spot for producing premium quality Cabernet Sauvignon. It’s an incredibly full-bodied wine, boasting a dark red colour with an entire bouquet of flavours. It’s produced on a limited basis, with the brand only selling between 400 and 600 cases of the wine each year. But if you can get hold of a bottle, it’s worth holding onto. \nThis opulent wine is a vintage worth talking about, with a range of firm, deep and rich flavours like spring flowers, graphite, creme de cassis, kirsch and liquorice. It’s aged in 65 percent new French oak barrels for almost two years before being bottled and sold and is one of the finest on the market.",
            "type": "red"
        },

        {
            "name": "Heitz Cellar Cabernet Sauvignon",
            "vineyard": " Heitz Cellar Martha's Vineyard",
            "year": 2014,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143722/best-wine-heitz-cellar-martha-vineyard-cabernet-sauvignon-luxe-digital%402x.jpg",
            "description": "Martha’s Vineyard is known for its unique microclimate and 2014 was an especially strong year for its grapes. This Cabernet Sauvignon is one of the best that money can buy; known for its aroma of bay leaf, mint, anise and dark chocolate and its distinctive palate.\nThis wine spent three years ageing in new French oak barrels, one in neutral oak and an additional year in bottle before being released on the market. With its strong flavours of sweet black fruit, fresh red plum and a touch of warm vanilla, it’s a smooth and classic red wine that’s a true pleasure to taste. Expect a crispness of red fruit and orange peel combined with a ripeness that’s only deepened over time.",
            "type": "red"
        },

        {
            "name": "Masseto",
            "vineyard": "Masseto",
            "year": 2016,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143739/best-wine-masseto-luxe-digital%402x.jpg ",
            "description": "Think of a good Merlot and Masseto should come to mind. If it doesn’t, then it probably will once you’ve sampled the brand. Its 2016 release is a seamless wine that’s super concentrated without being overbearing. It’s dark, sumptuous and expressive; perfect for those who enjoy a dark red wine with an intense aroma. The 2016 combines rich and silky tannins with notes of dark fruit, spice, sweet tobacco and black cherry.\nA solid wine, it’s reminiscent of Masseto’s 2001 release and is best held onto until 2023 to enjoy the wide range of flavours. This 100 percent Merlot was aged for two years in oak barrels and is polished on the nose with a delicious finish. It’s a wine with plenty of structure with a bright and vibrant acidity.",
            "type": "red"
        },

        {
            "name": "Golden Mean",
            "vineyard": "Wayfarer",
            "year": 2014,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143814/best-wine-wayfarer-golden-mean-pinot-noir-luxe-digital%402x.jpg",
            "description": "A good Pinot Noir is typically light to medium-bodied and fruit-forward and Wayfarer’s 2014 Golden Mean offers exactly that. A complex wine filled with earthiness and exotic Asian spice, it’s one to sip slowly to really take in each and every note. It’s an elegant wine that really comes through with a wide range of fruity and perfume hints, like raspberry, peach, violet and red cherries. \n A further sip will reveal notes of pomegranate, cinnamon stick and toast, making this compelling wine one to enjoy slowly. Over time, it promises to develop more spicy notes, making it a bottle that’s enjoyable now or even more so if left to age further.",
            "type": "red"
        },

        {
            "name": "Ramey Chardonnay",
            "vineyard": "Rochioli Vineyard",
            "year": 2016,
            "imgURL": "https://cdn.luxe.digital/media/2020/07/06143747/best-wine-ramey-rochioli-vineyard-chardonnay-luxe-digital%402x.jpg",
            "description": "The 2016 Rochioli Vineyard Chardonnay is a favourite wine for many; beautifully crafted with a wide range of dancing flavours and aromas. It’s a wine that’s both elegant and powerful, combining classic notes of white flowers, citrus and orchard fruits with spicy and buttery hints for a unique finish.\nIts standout texture blends perfectly with its crisp acidity, offering a medium to full body and an ever-growing foundation of flavours as it’s enjoyed. Some of this stems from its ageing process: this wine was aged in 21 percent new French oak for 20 months and offers subtle flavours of integrated oak as a result. It’s a creamy wine with enough savoury hints to make it a top choice for those looking for a strong Chardonnay.",
            "type": "white"
        },
    ]

    //insert wines into database

    await Wine.insertMany(wines) 
    console.log("Created wines!!")

    //close the database connection

    db.close()
}

insertData()

