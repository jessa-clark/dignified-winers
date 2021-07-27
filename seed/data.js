import db from "../db/connection.js";
import Wine from "../models/wine.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  //reset database
  await db.dropDatabase();
  //creating user
  const user1 = new User({
    username: "benathan",
    email: "beingnathan@aol.com",
    password_digest: await bcrypt.hash("newestpassword", 11),
    wines: [],
  });

  await user1.save();
  //creating wine list
  const wines = [
    {
      name: "Fortuna Terrae Malbec",
      vineyard: "Catena Zapata Adrianna Vineyard",
      year: 2016,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143657/best-wine-adrianna-vineyard-luxe-digital%402x.jpg",
      description:
        "Selecting our overall best wine was no easy task but this 2016 Malbec is sure to be a winner no matter who’s pouring it. It’s an incredibly nuanced and detailed wine, promising depth and character from every sip. One of the highest rated wines, it’s a critic’s favourite and a rich, aromatic bottle to delight family and friends over dinner. \nThought to be perhaps the best ever wine produced by Catena, it’s dense and fresh, full-bodied and layered, flavourful and elegant all at once. It’s a wine to please the masses but a bottle that you’d be forgiven for saving for yourself. Featuring aromas of roses and pine needles with hints of spice and tobacco, it’s a wine that just keeps on giving. Enjoy it for its bold and structured notes.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "Pedropapablo",
          rating: 4.5,
          description: "Muy buen sabor final",
        },
        {
          author: "AntonioNoLaves",
          rating: 5,
          description: "Muy buen sabor final",
        },
      ],
    },

    {
      name: "A Shot In The Dark",
      vineyard: "Sine Qua Non",
      year: 2006,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143759/best-wine-sine-qua-non-luxe-digital%402x.jpg",
      description:
        "An extremely highly-rated wine, Sine Qua Non proved its expertise again with its 2006 Syrah. This is one of the most premium wines produced in California and comes with the price tag to match. Its popularity stems from its incredibly velvety tannins and dense, layered flavours. A Shot in the Dark is composed of 96.5% Syrah and 3.5% Viognier from the 11 Confessions Vineyard and is a rich and intense red wine with plenty of character. \nOnly 442 cases of this wine were produced and it’s one that’s best held onto for at least a few more years. It offers an aroma of blueberry pie, blackberries, Asian spices and forest floor with a hint of chocolate when sipped. It spent 32 months ageing in barrels before being bottled and is a stunning wine from start to finish.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "Kmcdonald",
          rating: 4.7,
          description: "Powerful, forward fruit has a massive burst of energy to start with sensational spice to follow.",
        },
        {
          author: "AlexFromme",
          rating: 5,
          description: "A real pleasure. robust yet smooth with nuances of plum.",
        },
        {
          author: "MrHeo",
          rating: 4.3,
          description: "i feel like BDM. anyway, SNQ is always good",
        },
      ],
    },

    {
      name: "Grgich Hills Estate Chardonnay",
      vineyard: "Grgich Hills Estate",
      year: 2016,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143718/best-wine-grgich-hills-estate-chardonnay-luxe-digital%402x.jpg",
      description:
        "Fresh and balanced, Grgich Hills produces distinctive wines and its 2016 Chardonnay is just that at an accessible price. A creamy and flavourful medium-bodied wine, it’s full and well-rounded with plenty of intense, fruity notes. It’s produced using biodynamically grown grapes and is beautifully structured with pear, apple, pineapple, peach and honey flavours.\nThe 2016 is one to open now, with a crisp acidity that’s balanced through from the first sip to the last. Aged in stainless steel barrels, it’s a classic vintage Chardonnay that’s known for being one of the best and relatively easy to get hold of. Enjoy each of its tropical layers to really get a feel for the structure that makes up this bottle.",
      type: "white",
      userId: user1,
      reviews: [
        {
          author: "aFernandez",
          rating: 4.5,
          description: "Apples. Pear. Some Vanilla and butter on the finish but it’s moderate. Acidity is perfect. Oak Balanced Chardonnay thanks to the acidity and low oak. Love but too expensive for price point imo. Other good comparables for $10 less",
        },  {
          author: "mishel",
          rating: 4,
          description: "Delicious Chardonnay coming from a non-Chardonnay fan. Hints of citrus and buttery smoothness make this a winner. Better vintages exist.",
        },  {
          author: "duane",
          rating: 2,
          description: "Excellent Chardonnay. Dry with a tart citrus fruit core. Slight oak tone to finish",
        },
      ],
    },

    {
      name: "Screaming Eagle Cabernet Sauvignon",
      vineyard: "Screaming Eagle",
      year: 2010,
      imgURL:
        "https://cdn.luxe.digital/media/2020/05/07134053/best-wine-screaming-eagle-cabernet-sauvignon-luxe-digital%402x.jpg",
      description:
        "Screaming Eagle is a name you’ll hear again and again when talking about high quality wine and takes the top spot for producing premium quality Cabernet Sauvignon. It’s an incredibly full-bodied wine, boasting a dark red colour with an entire bouquet of flavours. It’s produced on a limited basis, with the brand only selling between 400 and 600 cases of the wine each year. But if you can get hold of a bottle, it’s worth holding onto. \nThis opulent wine is a vintage worth talking about, with a range of firm, deep and rich flavours like spring flowers, graphite, creme de cassis, kirsch and liquorice. It’s aged in 65 percent new French oak barrels for almost two years before being bottled and sold and is one of the finest on the market.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "jimwalther",
          rating: 5,
          description: "Nice. Had it in mexico. Resort nizuc. Paired with great atmosphere happy b day. Live large. Be well.",
        },  {
          author: "neophytidius",
          rating: 4.3,
          description: "Had the privilege to try Screaming Eagle 2012. Nose was full of black fruit and red fruit and lots of spice and tobacco. Palate was outstanding with great structure and finish. Worths every penny",
        }
      ],
    },

    {
      name: "Heitz Cellar Cabernet Sauvignon",
      vineyard: " Heitz Cellar Martha's Vineyard",
      year: 2014,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143722/best-wine-heitz-cellar-martha-vineyard-cabernet-sauvignon-luxe-digital%402x.jpg",
      description:
        "Martha’s Vineyard is known for its unique microclimate and 2014 was an especially strong year for its grapes. This Cabernet Sauvignon is one of the best that money can buy; known for its aroma of bay leaf, mint, anise and dark chocolate and its distinctive palate.\nThis wine spent three years ageing in new French oak barrels, one in neutral oak and an additional year in bottle before being released on the market. With its strong flavours of sweet black fruit, fresh red plum and a touch of warm vanilla, it’s a smooth and classic red wine that’s a true pleasure to taste. Expect a crispness of red fruit and orange peel combined with a ripeness that’s only deepened over time.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "solomonjoel",
          rating: 4.5,
          description: "Deep, dark yummy rich wine. Agree with other comments that this cab was meant to be consumed with red meat. Plenty of room to age.",
        },  {
          author: "stueveve",
          rating: 4,
          description: "Maybe a new favorite. Well balanced with perfect oaky notes. Beautiful dark plum and red currant with slight vanilla tones. Super smooth start to finish.",
        },  {
          author: "lofgren",
          rating: 4.3,
          description: "Not familiar with American wines (yet) but I can sense this is a great one. Ruby red color, BIG but smooth. Much sensations on the noose, I find oak, vanilla, strawberry jam, dark chocolate, bell pepper, sweet licorice, eucalyptus, hints of coffee beans Smoother taste, cherry, boysenberry, tobacco, long aftertaste of cacao Tasted it 2 days later, a lot of eucalyptus has emerged.",
        },
      ],
    },

    {
      name: "Masseto",
      vineyard: "Masseto",
      year: 2016,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143739/best-wine-masseto-luxe-digital%402x.jpg ",
      description:
        "Think of a good Merlot and Masseto should come to mind. If it doesn’t, then it probably will once you’ve sampled the brand. Its 2016 release is a seamless wine that’s super concentrated without being overbearing. It’s dark, sumptuous and expressive; perfect for those who enjoy a dark red wine with an intense aroma. The 2016 combines rich and silky tannins with notes of dark fruit, spice, sweet tobacco and black cherry.\nA solid wine, it’s reminiscent of Masseto’s 2001 release and is best held onto until 2023 to enjoy the wide range of flavours. This 100 percent Merlot was aged for two years in oak barrels and is polished on the nose with a delicious finish. It’s a wine with plenty of structure with a bright and vibrant acidity.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "blagovest",
          rating: 4.2,
          description: "Compacted and thick with caressing and polished tannins that are powerful yet refined. Super concentration yet agile and energetic.",
        },  {
          author: "kirilov",
          rating: 4,
          description: "Dedicated to Carlo!! Good wines become great when tasted with special friends. The vintage is 2002, is it the right moment to open it?? I wait our meeting to uncork...",
        },  {
          author: "duane",
          rating: 5,
          description: "plum blackberry chocolate tobacco oak cherry leather vanilla black fruit black cherry licorice cassis dark fruit coffee cedar truffle earthy mushroom clove cigar box caramel toffee cigar sweet tobacco sandalwood smoke cinnamon pepper savory prune raisin fig dried fruit dried apricot nutty marzipan",
        },
      ],
    },

    {
      name: "Golden Mean",
      vineyard: "Wayfarer",
      year: 2014,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143814/best-wine-wayfarer-golden-mean-pinot-noir-luxe-digital%402x.jpg",
      description:
        "A good Pinot Noir is typically light to medium-bodied and fruit-forward and Wayfarer’s 2014 Golden Mean offers exactly that. A complex wine filled with earthiness and exotic Asian spice, it’s one to sip slowly to really take in each and every note. It’s an elegant wine that really comes through with a wide range of fruity and perfume hints, like raspberry, peach, violet and red cherries. \n A further sip will reveal notes of pomegranate, cinnamon stick and toast, making this compelling wine one to enjoy slowly. Over time, it promises to develop more spicy notes, making it a bottle that’s enjoyable now or even more so if left to age further.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "travloomis",
          rating: 4,
          description: "65% new French oak, organic, wild yeast fermented. Made from opposing Pinot Noir clones Pommard and Swann clone from different vineyard sites. Garnet color with a brownish tinge. Aromas of cranberry, a touch of spice, anise and cedar. Not as complex as I expected. Medium to full bodied. On the palate soft and round. Flavors of plum, raspberry, tobacco, cedar. Nice fine grained tannins, but overpowered with massive oak. I struggled to pick the classic Pinot Noir characteristics. Big wine, big price.",
        },  {
          author: "bobenslein",
          rating: 4,
          description: "Nice wine but outshone by some other producers like peay.",
        },  {
          author: "McMcCarter",
          rating: 4.5,
          description: "Delicious red berries and dry finish",
        },
      ],
    },

    {
      name: "Ramey Chardonnay",
      vineyard: "Rochioli Vineyard",
      year: 2016,
      imgURL:
        "https://cdn.luxe.digital/media/2020/07/06143747/best-wine-ramey-rochioli-vineyard-chardonnay-luxe-digital%402x.jpg",
      description:
        "The 2016 Rochioli Vineyard Chardonnay is a favourite wine for many; beautifully crafted with a wide range of dancing flavours and aromas. It’s a wine that’s both elegant and powerful, combining classic notes of white flowers, citrus and orchard fruits with spicy and buttery hints for a unique finish.\nIts standout texture blends perfectly with its crisp acidity, offering a medium to full body and an ever-growing foundation of flavours as it’s enjoyed. Some of this stems from its ageing process: this wine was aged in 21 percent new French oak for 20 months and offers subtle flavours of integrated oak as a result. It’s a creamy wine with enough savoury hints to make it a top choice for those looking for a strong Chardonnay.",
      type: "white",
      userId: user1,
      reviews: [
        {
          author: "bobenslein",
          rating: 4.5,
          description: "So well made. Elegant and unfolding, hints of oak, vanilla and cream...yet keeping the acidity balance and hints of citrus.",
        },  {
          author: "teamjarvis",
          rating: 4,
          description: "Sensational. Not for everyday and if you like a Chardonnay heavier in wood then this may not be for you. Either way, if you have the opportunity- enjoy!",
        },
      ],
    },
    
    {
      name: "Mary Ann Red",
      vineyard: "Gamble Family Vineyards",
      year: 2014,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/gamble-mary-ann.jpg?",
      description:
        "Interesting blends are quietly being made in Napa, though skittish winemakers don’t necessarily want to mention just how much Merlot might be part of the wine. While the movie Sideways put the nail in the coffin for Merlot, in truth, most Merlots of the 1980s and ’90s were not great wines, despite their popularity. But winemakers have learned a thing or two over the years, resulting in some Bordeaux blends in which Cabernet Sauvignon has only a bit part and varietals such as Merlot and Cabernet Franc star. Case in point: Tom Gamble’s Mary Ann ($185), which is composed of 53 percent Cab Franc and 37 percent Merlot, grown on the rugged terrain of Mt. Veeder’s hillsides. It has an intoxicatingly aromatic nose full of blueberry jam, just-baked waffle cones and wildflowers. Blackberry and strawberry come through on the palate, with lots of savory herbal notes. There’s plenty of structure to keep this wine aging for another decade.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "arivera",
          rating: 4.2,
          description: "I buy a case every year. Expensive, but excellent. Dark color, wonderful blackberry flavor, simultaneously smooth and complex.",
        },  {
          author: "tuckmemmoore",
          rating: 4,
          description: "2018 vintage. 4.6 Probably too early to open this one but fantastic in any case! Very silky feel, soft dark fruit, sharp pencil lead, lingering finish.",
        },  {
          author: "shtraus",
          rating: 3.7,
          description: "Nose is burgeoning with raspberry and blackberry components, a touch of oak. The palate is full of dark fruit. Young tannins. A fantastic effort.",
        },
      ],
    },
    
    {
      name: "Maya Napa Valley",
      vineyard: "Dalla Valle Vineyards",
      year: 2015,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/dalla-valle-vineyards-2015-maya-napa-valley.jpg",
      description:
        "Thirty-one years ago, in 1988, Dalla Valle’s Maya was launched out of vintner Naoko Dalla Valle’s love of Cabernet Franc—and named for her daughter, who had just been born the year before. While Cabernet Sauvignon leads in the blend, it’s the large proportion of Franc that lends vibrancy and aromatics. The 2015 Maya ($425, and made by highly regarded Napa winemaker Andy Erickson, with Michel Rolland as consultant) is no exception, leading with warm, exotic spice notes (cardamom comes to mind). A beautiful crushed-rock quality is layered under black cherry, strawberry and espresso, with a refreshing salinity cutting through. While the wine offers the texture of silk today, its power and richness will go for many years. In 2017, Maya herself took over as director of the winery. With a master’s degree in enology from Cornell University and another in vineyard and winery management from France’s Bordeaux Sciences Agro, the younger Dalla Valle brings hands-on experience at Pétrus and Château Latour, and more, to the table. She’s got this.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "torpedoledo",
          rating: 5,
          description: "One of the very best!",
        },  {
          author: "kolodny",
          rating: 5,
          description: "hahaaha.. thank you dad",
        },  {
          author: "amarella",
          rating: 2,
          description: "Had at crusader event! Amazaing !!!",
        },
      ],
    },
    
    {
      name: "Dom Pérignon",
      vineyard: " Abbey of Hautvillers",
      year: 2002,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/dom-perignon.jpg",
      description:
        "One of the qualities that gives Dom Pérignon its elite status is that the house makes wine only in years that are declared vintages in Champagne, so only in the best of times with the most optimal grapes. But the brand also does something unique with each vintage: It releases the wine in two stages, initially about eight years after going into bottle, then again after another eight years, in what Dom Pérignon calls its second plenitude, or P2. The portion held back remains on the lees to accumulate even more complexity. The 2002 P2 ($390) surpasses the 2000 and 1998 versions and is much more complex than the first-vintage 2002. The P2 is light, ethereal, with just 4 grams of dosage added. This is a cascade of creamy, nutty elegance, with refreshing fruit on the palate. It’s still vivid and energized, even 17 years post-harvest.",
      type: "specialty",
      userId: user1,
      reviews: [
        {
          author: "mogelonsky",
          rating: 5,
          description: "Great every day drinker. A little bit lighter and harsher than the 2008 we had in comparison. But don’t throw it away if you are offered a glass.",
        },  {
          author: "goodwinehunting",
          rating: 5,
          description: "Excellent champagne. Deliciously buttery and brioche notes, with great fruit acidity to cut through - well balanced with a very fine mousse.",
        },  {
          author: "theenglishwineguy",
          rating: 5,
          description: "Wow,love it, amazing flavour, nutty, caramel, chocolate, awesome, so balanced and fizz just starting hug me with huge caramel hug Dom 92!",
        },
      ],
    },
    
    {
      name: "Mod Rose",
      vineyard: "Vallée de la Marne",
      year: 2016,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/mod-selection-rose.jpg",
      description:
        "Fresh off tequila and American whiskey innovation—with DeLeón and Virginia Black, respectively—Brent Hocking (along with his partner, musician Drake) has turned his penchant for challenging tradition to Champagne. Working with a five-generations-old Champagne house, Hocking has created Mod Sélection Champagnes, in a style he describes as “pure, elegant, balanced and fresh.” It’s a profile in contrast to the weightier, yeasty, autolytic character often associated with wines from the region. The bubbles in his Mod Rosé Champagne ($400) are impossibly vibrant, creating an elegant tension. Delicate wild strawberry aromas lead to lively cherry and cranberry notes—intense but fresh and light-footed at once. And as you’d expect, Hocking’s out-of-the-box vision extends to the design of the bottle as well, with intricate, filigreed metallic etchings. A Mod Réserve brut ($300) joins the rosé in the brand’s first releases, with more in the works—promising to challenge traditional Champagne identity in a rather exquisite way.",
      type: "specialty",
      userId: user1,
      reviews: [
        {
          author: "sidnair",
          rating: 5,
          description: "Trying both the MOD Reserve and the MOD Rose champagne on the same day is an out-of-the-world experience. Fantastic bubbles with tremendous flavor that’s so distinctive.",
        },  {
          author: "winelover493",
          rating: 4,
          description: "Drank this exceptional MOD Sélection Rose Champagne in Dec 2020 in Tampa. This old Champagne House produces outstanding bubbly. Extremely beautifully packaged and expensive. It is crisp, aromatic, elegant and complex with aromas and flavors of vibrant ripe fruit and at times a mineral earthiness. Extremely well balanced with a lovely lingering finish. Pairs well with seafood.",
        },  {
          author: "taffenina",
          rating: 5,
          description: "Very smooth Champagne! Light, med acidity, apples, slight caramel, slight yeast. Incredible fine bubbles!",
        },
      ],
    },
   
    {
      name: "Grange",
      vineyard: "Penfolds",
      year: 2014,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/penfolds-grange-2014.jpg",
      description:
        "This wine isn’t just one of Australia’s great wines, but one of the world’s. Year after year Penfolds proves that Syrah—or Shiraz—is as powerful a varietal in Australia as Cabernet Sauvignon is in Napa, and Grange can be as consistent a bottle as the best wines of Bordeaux. While it is always very nearly 100 percent Shiraz (this year’s edition has just a splash of Cab), the grapes are sourced and blended from multiple parcels in South Australia, which do vary from vintage to vintage, and all always go into new American oak for 20 months. Part of the 2018 Penfolds Collection released last fall, the 2014 Grange ($750) is eminently drinkable right now, balanced as it is, but its strong structure and tannins mean it’s a collector’s dream. Winemaker Peter Gago calls them “tannins with attitude” that are also, happily, “nonetheless respectful.” Mushroom and hoisin present on the nose of this deep garnet wine, and it tastes more savory than fruity, like the caramelized sear on a premium cut of beef with red licorice notes, followed by hints of fresh sage and olive leaf.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "abrahamNOTlincoln",
          rating: 4.5,
          description: "blackberry vanilla oak leather chocolate plum cherry black fruit tobacco blackcurrant cassis jam black olive mulberry wild blueberry",
        },  {
          author: "polyakayak",
          rating: 5,
          description: "Fantastic wine! Explosion of intense fruit flavor-- blueberry, currant and plum, with notes of cocoa and #2 lead pencil. Balanced with solid tannins.",
        },  {
          author: "mishel",
          rating: 3.7,
          description: "My wife told me go buy a bottle of wine, but maybe a 6 liter Grange was not what she ment. Besides, she would quickly discover the price, nah better skip it today.",
        },
      ],
    },
    
    {
      name: "Felius Chardonnay",
      vineyard: "Vasse Felix",
      year: 2016,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/vasse-felix.jpg",
      description:
        "For those of us in the Northern Hemisphere, Chardonnay and Australia are not synonymous. But in one southwestern corner of the country, on a peninsula surrounded on three sides by ocean, sits the Margaret River growing region, ideal for maturing Cabernet Sauvignon and Chardonnay grapes. Winemaker Virginia Willcock makes the most of the area’s Mediterranean-like climate on an estate where the region’s first commercial vines were planted, in 1967—Vasse Felix. The 2016 Chardonnay ($45) smells of lemon pie crust and tropical pineapple, with a taste of buttery croissant and nougat on the palate. But it has enough acid to keep it vibrant and zingy. The wine spends nine months on the lees in French oak that’s a mix of old and new. Willcock is a passionate proponent of the use of wild, native yeasts in Australian winemaking, and this wine benefits from that innovation, as well as from hand-harvesting and a gentle, whole-cluster press.",
      type: "white",
      userId: user1,
      reviews: [
        {
          author: "papowles",
          rating: 4,
          description: "Very oaky and full of complexity. Butter, vanilla and some citrus notes such as lemon and grapefruit. A refined and interesting wine.",
        },  {
          author: "ycboey",
          rating: 3.5,
          description: "Great nose..Crisp citrus at the beginning with a robust body and light layers of butter oak vanilla, Almonds..minerals.. very decent..",
        },  {
          author: "hahahovel",
          rating: 3.9,
          description: "Nose of green apple, lemon, vanilla, hazelnut. A little bit of creaminess, but nice acidity and balance. Tastes lighter and brighter than Napa Chardonnay. A bit fruity in the flavor, with a bit of acidity Spends time on its fine lees,",
        },
      ],
    },
   
    {
      name: "Brunello di Montalcino Riserva",
      vineyard: "Biondi-Santi",
      year: 2011,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/biondi-santi.jpg",
      description:
        "This rich, balanced wine has the signature brown-tinged, ruby-red color of a great Brunello (one of the few made with 100 percent Sangiovese) and is rife with both dark red fruit and earthy, herbal notes. Held back until it was perfectly ready, the 2011 vintage ($566) from this historic Tuscan estate is at its peak of drinkability. But wines of its provenance have proven to improve across decades in the cellar, too, even to the century mark. Now overseen by the 6th and 7th generations of the family, Tancredi Biondi Santi and his father, the winemaking is approached with longevity in mind, aging in neutral oak barrels, so that any oak extraction takes a backseat to the grapes. The vines are the result of generations of cultivation of Sangiovese Grosso, leading the family to develop a clone of their own: BBS 11, for Brunello Biondi-Santi. It is this special strain that contributes to the one-of-a-kind beauty of such an elegant, savory wine.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "abrahamNOTlincoln",
          rating: 4.5,
          description: "cherry earthy leather oak tobacco plum mushroom raspberry red fruit licorice minerals balsamic tar cocoa forest floor truffle underbrush new leather graphite ginger game iron saline black truffle",
        },  {
          author: "overthevineyard",
          rating: 4,
          description: "I'm always excited when a wine delivery comes...sometime extra so. Today is such a day.. The Biondi Santi 2010 had finally arrived. I'm planning to leave them alone for a while so tasting notes will have to wait...in the meantime, the 5 star rating goes for my smile ☺ Happy weekend dear vivino friends. Keep shining.",
        },  {
          author: "montero",
          rating: 5,
          description: "bolder in the nose than the riserva. great wine",
        },
      ],
    },
    
    {
      name: "La Mouline Côte-Rôtie",
      vineyard: "Guigal",
      year: 2014,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/guigal-la-mouline.jpg",
      description:
        "In a mere three generations, the Guigal family has traveled from vineyard work to producing some of the most highly acclaimed wines from almost every district in the Rhône Valley. And while the familiar E. Guigal Côtes du Rhône label shouts value the world over, it is the family’s tiny productions from post-stamp vineyards in the likes of Côte-Rôtie, Saint-Joseph and Hermitage that prompt collectors to sleuth out bottles on the secondary market. La Mouline, in Côte-Rôtie, is the oldest of the Guigals’ vineyards. In fact, it’s considered the oldest in the AOC itself, with walls dating back some 2,400 years. Replanted in the 1890s, after the scourge of phylloxera, the vineyard’s current vines average about 90 years old. The E. Guigal 2014 La Mouline ($390) shows what gorgeous balance vine age can produce. Its dark berry fruit is concentrated and layered with an earthy smoked-meat character, with delicate floral aromas, and there’s a subtle silky quality to the wine—likely the result of a full 11 percent Viognier cofermented with the Syrah.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "craigmeister",
          rating: 4.6,
          description: "Truly and experience. Intense powerful flavors. Rich nose with balance of sweet and savory flavors. Though some fruit was present this wine was more about savory flavors. Stone, blood, leather , black pepper. Went perfect with a grilled lamb leg. An unforgettable wine.",
        },  {
          author: "sam",
          rating: 4,
          description: "One of the best wine i tasted this year. Very well balanc of fruits oak and acidity. Long and clean palate.",
        },
      ],
    },
    
    {
      name: "Cuvée Sir Winston Churchill",
      vineyard: "Pol Roger",
      year: 2008,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/pol-roger.jpg",
      description:
        "Myths abound about the wartime PM and his Pol Roger (that he drank a bottle of it every day—before he got out of bed in the morning), but the truth is that after World War II, Churchill formed a lasting friendship with the captivating Odette Pol-Roger, and thereafter, the wine was his Champagne of choice. In 1975, 10 years after his death, the wine family approached the politician’s family—friends still—to ask their permission to create Cuvée Sir Winston Churchill in his honor. Vintage 2008 ($300), released last fall, embodies Churchill’s taste in Champagne—full-bodied, robust and mature. It is complex and chalky, with pinpoint balance between a delicately honeyed character and a briny oyster-shell quality. On the palate, citrus, pear and faint tropical flavors are layered with nuttiness and meringue. Are we cheating to go with a Champagne as our Best French White? Can you ever have too much Champagne?",
      type: "specialty",
      userId: user1,
      reviews: [
        {
          author: "senoritabarra",
          rating: 5,
          description: "Simplesmente maravilhoso! Diferente de todos que já tomei. Forte, potente. Sabor inigualável. Top!!!",
        },  {
          author: "digbyrigby",
          rating: 5,
          description: "This is my favourite champagne. It has a depth and depth which I have not seen in another. I have reviewed it before but this was my kast bottle 😭",
        },  {
          author: "mrgreen",
          rating: 5,
          description: "This is seriously excellent! This is a bold and full-bodied champagne. Toasty with notes of brioche. Slightly sweet with hints of peach. Long, creamy finish.",
        },
      ],
    },
  
    {
      name: "La Pelle Sauvignon Blanc",
      vineyard: "Napa Valley",
      year: 2016,
      imgURL: "https://robbreport.com/wp-content/uploads/2019/06/la-pelle.jpg",
      description:
        "This new brand—a very personal project for winemaker Maayan Koschitzky, viticulturist Miguel Luna and vineyard manager Pete Richmond—is their chance to create bottles with a sense of place at a time when the tools of the trade are taking on more and more technological bells and whistles. La Pelle means “the shovel” in French and, for the partners, symbolizes their process from the first dirt turned in the vineyard to the last tank shoveled out in the cellar. The particular place showing in their inaugural Sauvignon Blanc ($45), the 2016, is the St. Helena appellation, and the wine is a spectacular depiction of a trend taking hold in Northern California, turning Sauvignon Blanc into serious and complex wines. They barrel-fermented this one and aged it for 20 months in French oak. The result is complex textures and a beautiful richness, but at the same time, bright energy carries lime zest and tart nectarine flavors layered with white blossoms and a resiny herbal quality.",
      type: "white",
      userId: user1,
      reviews: [
        {
          author: "kirilov",
          rating: 4.5,
          description: "Complex textures and a beautiful richness, but at the same time, bright energy carries lime zest and tart nectarine flavors layered with white blossoms and a resiny herbal quality.",
        },  {
          author: "cappysinclair",
          rating: 4,
          description: "Amazing SB, great acidity, pale color, full citrus notes, with oak in the background, need to find more!",
        },  {
          author: "boydontudare",
          rating: 3.9,
          description: "Excellent Chardonnay. Dry with a tart citrus fruit core. Slight oak tone to finish",
        },
      ],
    },
   
    {
      name: "Lingua Franca Mimi’s Mind Pinot Noir",
      vineyard: "Eola–Amity Hills",
      year: 2015,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/lingua-franca.jpg",
      description:
        "Just when American taste for Pinot Noir is beginning to lean toward a more Burgundian style—and eyes turn to Oregon’s cool Willamette Valley, where earthy, savory Pinot is possible—a new winery has emerged there as a leader of the trend, with bottles that channel the French model in the best New World way. Lingua Franca was the vision of master sommelier Larry Stone, whose roots go deep in both restaurants (Rubicon and Charlie Trotter’s) and winery oversight (Rubicon Estate and Evening Land Vineyards). When legendary Burgundy vigneron Dominique Lafon saw the potential of Stone’s vineyard in Oregon, he signed on as consulting winemaker, working with his protégé Thomas Savre (also with illustrious experience in Burgundy) as the winemaker with boots on the ground. The team’s first stab at Mimi’s Mind, the 2015 vintage ($105), is a compelling debut—deep, complex and distinctly savory. Elegant structure and vibrant energy carry a mix of earthy mushroom, leather, herb and spice notes, along with tangy red and black fruit.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "blagovest",
          rating: 4.5,
          description: "Elegant structure and vibrant energy carry a mix of earthy mushroom, leather, herb and spice notes, along with tangy red and black fruit.",
        },  {
          author: "rocksterz",
          rating: 4,
          description: "Stunning! Silky soft and smooth tannins with red fruit aroma and leathery undertones. Super well balanced!",
        },  {
          author: "mrgreen",
          rating: 3.9,
          description: "Moderate aromas of baking spices and dark cherry. Clingy tannins that are well structured and balanced. Nice long finish. I think this is a very good wine that years will be great!",
        },
      ],
    },
    
    {
      name: "Hershey Vineyard on Howell Mountain",
      vineyard: "Dana Estates",
      year: 2016,
      imgURL:
        "https://robbreport.com/wp-content/uploads/2019/06/dana-estates-2016-1.jpg",
      description:
        "There’s no shortage of candidates for this award. From Napa Valley, Sonoma and California’s Central Coast to eastern Washington, producers have honed Cabernet Sauvignon to exquisite levels. But in Napa Valley, a region that always stands out, one producer consistently achieves perfect balance among structure, complexity and beautiful fruit: Dana Estates, shaped by the winemaking team of Chris Cooney and consultant Philippe Melka. While Dana produces deserving Cabernets from three different vineyards, it’s the winery’s 2016 Hershey Vineyard on Howell Mountain ($500) that gets our nod this year. With an intensity that reflects its mountain source, the wine manages elegance and finesse as well. Juicy dark berry flavors are layered with complex notes of spice, smoke, underbrush, espresso, dark chocolate and lovely minerality. The tannins have a grip that suggests this one will unfold beautifully over many years. Give it time.",
      type: "red",
      userId: user1,
      reviews: [
        {
          author: "McMcCarter",
          rating: 4.5,
          description: "Black fruit crazy. All sorts of balanced from earth to tannin's to color to boldness. A special wine for very special occasions.",
        },  {
          author: "kirilov",
          rating: 4,
          description: "Love the freshness and minerality of mountain fruit of Hershey vineyard. One of my favorites!!",
        },  {
          author: "fangacula",
          rating: 5,
          description: "Bold! Love it so much!",
        },
      ],
    },
  ];

  //insert wines into database

  await Wine.insertMany(wines);
  console.log("Created wines!!");

  //close the database connection

  db.close();
};
// wine data courtesy of
// https://www.wine-searcher.com/winespectator-top100
// and
// https://luxe.digital/lifestyle/dining/best-wine/
// review data courtesy of 
// https://www.vivino.com/

insertData();
