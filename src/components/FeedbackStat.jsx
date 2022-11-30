const FeedbackStat = ({feedbacks}) => {

    let avgRating = feedbacks.reduce((acc, curr) => {
        return acc + curr.rating
    }, 0)/ feedbacks.length

    avgRating = avgRating.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h3>{feedbacks.length} Ratings</h3>
            <h3>Averge Rating: {isNaN(avgRating)? 0:avgRating}</h3>
        </div>
    )
}

export default FeedbackStat;