import React, { useState } from "react";

const PlantProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Small");
  const [selectedImage, setSelectedImage] = useState(0);

  const plant = {
    name: "Monstera Deliciosa",
    price: 39.99,
    discount: 10,
    rating: 4.8,
    reviewCount: 127,
    sizes: ["Small", "Medium", "Large"],
    colors: ["Green", "Variegated"],
    images: ["/leaf_6.png", "/leaf_2.png", "/leaf_3.png", "/leaf_4.png"],
    description:
      "The Monstera Deliciosa, also known as the Swiss Cheese Plant, is a striking and easy-to-grow houseplant with unique perforated leaves. Perfect for adding a tropical touch to your home.",
    features: [
      "Low maintenance, ideal for beginners",
      "Air purifying qualities",
      "Unique fenestrated leaves",
      "Grows quickly in the right conditions",
    ],
    care: [
      "Water weekly, allowing soil to dry between waterings",
      "Prefers bright, indirect light",
      "Enjoys humid environments",
      "Feed with balanced fertilizer during growing season",
    ],
  };

  // Calculate discounted price
  const discountedPrice = plant.price - (plant.price * plant.discount) / 100;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const services = [
    {
      title: "Free Shipping",
      description: "Free shipping on all orders over $50",
      icon: "🚚",
    },
    {
      title: "Expert Plant Care Guidance",
      description: "Plant care guide included with every purchase",
      icon: "📗",
    },
    {
      title: "30-Day Guarantee",
      description:
        "We guarantee healthy plants upon arrival or your money back",
      icon: "✅",
    },
    {
      title: "Eco-Friendly Packaging",
      description: "All plants are shipped in sustainable packaging",
      icon: "♻️",
    },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="text-sm text-gray-500">
          Home / Plants / Indoor Plants / {plant.name}
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
              <img
                src={plant.images[selectedImage]}
                alt={plant.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {plant.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`rounded-md overflow-hidden border-2 ${
                    selectedImage === idx
                      ? "border-green-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${plant.name} view ${idx + 1}`}
                    className="w-full h-auto"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h1 className="text-3xl font-serif font-bold text-gray-800">
                {plant.name}
              </h1>

              <div className="flex items-center mt-2">
                <div className="flex items-center text-yellow-500">
                  {"★".repeat(Math.floor(plant.rating))}
                  {"☆".repeat(5 - Math.floor(plant.rating))}
                </div>
                <span className="ml-2 text-gray-600">
                  ({plant.reviewCount} reviews)
                </span>
              </div>

              <div className="mt-4 flex items-end">
                <span className="text-2xl font-bold text-gray-800">
                  ${discountedPrice.toFixed(2)}
                </span>
                {plant.discount > 0 && (
                  <>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${plant.price.toFixed(2)}
                    </span>
                    <span className="ml-2 text-sm bg-amber-50 text-green-700 px-2 py-1 rounded-full">
                      {plant.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  Description
                </h3>
                <p className="mt-2 text-gray-600">{plant.description}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {plant.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${
                        selectedSize === size
                          ? "bg-green-500 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex gap-3">
                  {plant.colors.map((color) => (
                    <button
                      key={color}
                      className="flex items-center gap-1 text-gray-800 hover:text-green-700"
                    >
                      <span
                        className={`w-6 h-6 rounded-full ${
                          color === "Green" ? "bg-green-500" : "bg-green-200"
                        } border border-gray-300`}
                      ></span>
                      <span>{color}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                <div className="mt-2 flex items-center border border-gray-300 rounded-md w-32">
                  <button
                    onClick={decrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:text-green-700"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full text-center border-none focus:ring-0"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-3 py-1 text-gray-600 hover:text-green-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button className="w-full py-3 px-4 rounded-md font-medium text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Add to Cart
                </button>
                <button className="w-full py-3 px-4 rounded-md font-medium text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap space-x-8">
              <button className="py-4 border-b-2 border-green-500 font-medium text-green-700">
                Details
              </button>
              <button className="py-4 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Care Guide
              </button>
              <button className="py-4 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Reviews
              </button>
            </div>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {plant.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6 mb-4">
              Care Instructions
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {plant.care.map((care, idx) => (
                <li key={idx}>{care}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-green-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-serif font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-amber-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
            Get Plant Care Tips
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for expert plant care advice and
            exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 flex-grow max-w-md"
            />
            <button className="px-6 py-2 bg-green-700 text-white font-medium rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantProductPage;
