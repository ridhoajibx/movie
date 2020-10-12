import React from 'react';
import ReactStars from "react-rating-stars-component";
import './review.css';
import image from '../../../../assets/profile.jpeg';

const Review = () => {
    const ratings = {
        size: 25,
        isHalf: true,
        onChange: newValue => {
          console.log(`Example 4: new value is ${newValue * 2}`);
        }
      };
    return (
        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="d-flex align-items-start">
                            <img src={image} className="rounded-circle mr-2" style={{ width: '4em' }} alt="" />
                            <div className="reviews">
                                <h5 className="font-weight-bold mb-0">Jumakri Ridho Fauzi</h5>
                                <form>
                                    <div className="mb-2">
                                        <ReactStars classNames="outlineNone" {...ratings} />
                                    </div>
                                    <div className="mb-2">
                                        <textarea className="form-control" name="comments" id="comments" cols="70" rows="5"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-main float-right">Comment</button>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex align-items-start">
                            <img src={image} className="rounded-circle mr-2" style={{ width: '4em' }} alt="" />
                            <div className="reviews">
                                <h5 className="font-weight-bold mb-0">Jumakri Ridho Fauzi</h5>
                                <div>
                                    <div className="mb-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta perspiciatis saepe eos. Laborum voluptas dicta ab cum tempore iure. Voluptatibus inventore voluptates, debitis non provident doloribus labore saepe veritatis? Asperiores sed provident odio, magni dolorum officiis deserunt quaerat cumque officia pariatur sit fugiat quia assumenda vitae nulla aliquam atque corrupti.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
