import React, { useState } from 'react';
import './ProductDetail.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import productOne from "../../Images/image-product-1.jpg";
import productTwo from "../../Images/image-product-2.jpg";
import productThree from "../../Images/image-product-3.jpg";
import productFour from "../../Images/image-product-4.jpg";
import thumbnailOne from "../../Images/image-product-1-thumbnail.jpg";
import thumbnailTwo from "../../Images/image-product-2-thumbnail.jpg";
import thumbnailThree from "../../Images/image-product-3-thumbnail.jpg";
import thumbnailFour from "../../Images/image-product-4-thumbnail.jpg";
import plus from "../../Images/icon-plus.svg";
import minus from "../../Images/icon-minus.svg";
import cart from "../../Images/editedCart.svg";
import arrowLeft from "../../Images/icon-previous.svg";
import arrowRight from "../../Images/icon-next.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Store/cartAction';

function ProductDetail() {
    const [activeImg, setActiveImg] = useState(productOne);
    const [fade, setFade] = useState(false);

    const dispatch = useDispatch();

    const [product, setProduct] = useState({
        company: "Sneaker Company",
        name: "Fall Limited Edition Sneakers",
        title: `These low-profile sneakers are your perfect casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything 
                the weather can offer.`,
        price: "125.00",
        discount: "50%",
        oldPrice: "250.00",
        quantity: 0, // Add quantity to the product object
        images: [
            { main: productOne, thumbnail: thumbnailOne },
            { main: productTwo, thumbnail: thumbnailTwo },
            { main: productThree, thumbnail: thumbnailThree },
            { main: productFour, thumbnail: thumbnailFour }
        ]
    });

    const increaseQuantity = () => {
        setProduct({
            ...product,
            quantity: product.quantity + 1
        });
    };

    const decreaseQuantity = () => {
        if (product.quantity > 0) {
            setProduct({
                ...product,
                quantity: product.quantity - 1
            });
        }
    };

    const handleThumbnailClick = (img) => {
        setFade(true);
        setTimeout(() => {
            setActiveImg(img);
            setFade(false);
        }, 300);
    };

    const handleMobileImages = (img, action) => {
        const mobileImages = [productOne, productTwo, productThree, productFour];
        const indexOfimg = mobileImages.indexOf(img);
        const lengthOfMobileImages = mobileImages.length - 1;

        setFade(true);

        setTimeout(() => {
            if (action === "pervious") {
                indexOfimg === 0
                    ? setActiveImg(mobileImages[lengthOfMobileImages])
                    : setActiveImg(mobileImages[indexOfimg - 1]);
            }

            if (action === "next") {
                indexOfimg === lengthOfMobileImages
                    ? setActiveImg(mobileImages[0])
                    : setActiveImg(mobileImages[indexOfimg + 1]);
            }

            setFade(false);
        }, 300);
    };

    return (
        <div className="product-detail">
            <div className="container">
                <div className="product-images">
                    <div className="main-image">
                        <div className="bg-wh-l" onClick={() => handleMobileImages(activeImg, "pervious")} >
                            <img className="arrow-left" src={arrowLeft} alt="Previous" />
                        </div>
                        <img
                            src={activeImg}
                            alt="Product"
                            className={`${fade ? "fade" : ""}`}
                        />
                        <div className="bg-wh-r" onClick={() => handleMobileImages(activeImg, "next")} >
                            <img className="arrow-right" src={arrowRight} alt="Next" />
                        </div>
                    </div>
                    <div className="thumbnail-images">
                        {product.images.map((img, index) => (
                            <div
                                key={index}
                                className={`thumbnail-image ${activeImg === img.main ? "active" : ""}`}
                                onClick={() => handleThumbnailClick(img.main)}
                            >
                                <img src={img.thumbnail} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="product-info">
                    <h4>{product.company}</h4>
                    <h1>{product.name}</h1>
                    <p>{product.title}</p>
                    <div className="price-section">
                        <div className="price-discount">
                            <h2>${product.price}</h2>
                            <span className="discount">{product.discount}</span>
                        </div>
                        <p className="original-price"><del>${product.oldPrice}</del></p>
                    </div>
                    <div className="quantity-cart-wrapper">
                        <div className="quantity-section">
                            <button onClick={decreaseQuantity} className="quantity-btn">
                                <img src={minus} alt="-" />
                            </button>
                            <span className="quantity">{product.quantity}</span>
                            <button onClick={increaseQuantity} className="quantity-btn">
                                <img src={plus} alt="+" />
                            </button>
                        </div>
                        <button
                            className="add-to-cart"
                            onClick={() => {
                                if (product.quantity > 0) {
                                    dispatch(addToCart({
                                        name: product.name,
                                        image: thumbnailOne,
                                        price: product.price,
                                        quantity: product.quantity, // Use the quantity from the product object
                                    }));
                                }
                            }}
                        >
                            <img src={cart} alt="Cart icon" className="cart-icon" />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
