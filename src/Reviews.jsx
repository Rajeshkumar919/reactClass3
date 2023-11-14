import Carousel from 'react-bootstrap/Carousel';
import download from '..assets/download.jpg';
const sellerReview=[
{
    id: 1,
    customerName: 'Rajesh Kumar',
    reviewDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae distinctio eius eligendi eveniet excepturi, harum impedit magnam magni nam, natus numquam qui, quidem quod repudiandae voluptates voluptatibus.",
        starCount: 5,
        image: download
}]

const buyerReviews = [
    {
        id: 2,
        customerName: 'Hamza',
        reviewDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores assumenda beatae distinctio eius eligendi eveniet excepturi, harum impedit magnam magni nam, natus numquam qui, quidem quod repudiandae voluptates voluptatibus.",
        image: improsImage,
        starCount: 5
    }
]
export const BuyerReview = () => {
    return(
        <div className={"p-4"}>
            <Carousel data-bs-theme="dark">
                {
                    buyerReviews.map(review=> {
                        return <Carousel.Item>
                                <img
                                    height={400}
                                    className="d-block w-100"
                                    src={augierImage}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5>Customer Name: {review.customerName}</h5>
                                    <p>Customer Name: {review.reviewDescription}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                    })
                }

            </Carousel>
        </div>
    )
}

export const SellerReview = () => {
    return(
        <>
            <h1>Seller Review</h1>

        </>
    )
}