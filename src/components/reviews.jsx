import React from 'react'
import ReviewCard from './reviewcard'

import reviewdata from '../asset/data/reviewdata.json'

export default function Reviews() {
    const review1 = reviewdata[0]
    const review2 = reviewdata[1]
    const review3 = reviewdata[2]
    const review4 = reviewdata[3]
    const review5 = reviewdata[4]
    const review6 = reviewdata[5]
  return (
    <div className="reviewsection">
        <div className="hct_title">
            <span>Player's Review About Our Game</span>
        </div>
        <div className="reviews">
        <ReviewCard review={review1} />
        <ReviewCard review={review2} />
        <ReviewCard review={review3} />
        <ReviewCard review={review4} />
        <ReviewCard review={review5} />
        <ReviewCard review={review6} />
    </div>
    </div>
  )
}
