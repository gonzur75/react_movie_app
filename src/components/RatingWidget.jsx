import {useState} from "react";

export function RatingWidget() {
    const [rating, setRating] = useState('')


    function handleOptionChange(e) {

        setRating(e.target.value)
        console.log(rating)
    }

    return (
        <>
            <fieldset className="rating">
                <input type="radio" id="star5" name="rating" value="5"
                       checked={rating === '5'}
                       onChange={handleOptionChange}
                />
                <label className="full" htmlFor="star5"
                       title="Awesome - 5 stars"></label>
                <input type="radio" id="star4half" name="rating" value="4 and a half"
                       checked={rating === '4 and a half'}
                       onChange={handleOptionChange}/>
                <label className="half"
                       htmlFor="star4half"
                       title="Pretty good - 4.5 stars"></label>
                <input type="radio" id="star4" name="rating" value="4"
                       checked={rating === '4'}
                       onChange={handleOptionChange}/>
                <label className="full"
                       htmlFor="star4"
                       title="Pretty good - 4 stars"></label>
                <input type="radio" id="star3half" name="rating" value="3 and a half"
                       checked={rating === '3 and a half'}
                       onChange={handleOptionChange}/><label
                className="half"
                htmlFor="star3half"
                title="Meh - 3.5 stars"></label>
                <input type="radio" id="star3" name="rating" value="3"
                       checked={rating === '3'}
                       onChange={handleOptionChange}/>
                <label className="full"
                       htmlFor="star3"
                       title="Meh - 3 stars"></label>
                <input type="radio" id="star2half" name="rating" value="2 and a half"
                       checked={rating === '2 and a half'}
                       onChange={handleOptionChange}/><label className="half"
                                                             htmlFor="star2half"
                                                             title="Kinda bad - 2.5 stars"></label>
                <input type="radio" id="star2" name="rating" value="2" checked={rating === '2'}
                       onChange={handleOptionChange}/>
                <label className="full"
                       htmlFor="star2"
                       title="Kinda bad - 2 stars"></label>
                <input type="radio" id="star1half" name="rating" value="1 and a half"
                       checked={rating === '1 and a halfgit t'}
                       onChange={handleOptionChange}/>
                <label className="half"
                       htmlFor="star1half"
                       title="Meh - 1.5 stars"></label>
                <input type="radio" id="star1" name="rating" value="1" checked={rating === '1'}
                       onChange={handleOptionChange}/>
                <label className="full"
                       htmlFor="star1"
                       title="Sucks big time - 1 star"></label>
                <input type="radio" id="starhalf" name="rating" value="half" checked={rating === 'half'}
                       onChange={handleOptionChange}/>
                <label
                    className="half" htmlFor="starhalf"
                    title="Sucks big time - 0.5 stars"></label>
            </fieldset>
        </>
    );
}