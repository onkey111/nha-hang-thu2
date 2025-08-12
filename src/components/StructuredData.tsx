export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Nhà hàng Thu 2",
    "alternateName": "Thu 2 Restaurant",
    "description": "Nhà hàng chuyên phục vụ lẩu cua đồng và các món ăn đặc sản miền Bắc",
    "image": [
      "https://nha-hang-thu2.vercel.app/hero-image.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Đường ABC",
      "addressLocality": "Hà Nội",
      "addressRegion": "Hà Nội",
      "postalCode": "100000",
      "addressCountry": "VN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.0285,
      "longitude": 105.8542
    },
    "url": "https://nha-hang-thu2.vercel.app",
    "telephone": "+84-24-1234-5678",
    "priceRange": "$$",
    "servesCuisine": "Vietnamese",
    "acceptsReservations": true,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "10:00",
        "closes": "22:00"
      }
    ],
    "menu": "https://nha-hang-thu2.vercel.app#menu",
    "hasMenu": {
      "@type": "Menu",
      "hasMenuSection": [
        {
          "@type": "MenuSection",
          "name": "Lẩu cua đồng",
          "hasMenuItem": [
            {
              "@type": "MenuItem",
              "name": "Lẩu cua đồng đặc biệt",
              "description": "Cua đồng tươi sống, nước dùng đậm đà",
              "offers": {
                "@type": "Offer",
                "price": "350000-500000",
                "priceCurrency": "VND"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Nguyễn Thị Lan"
        },
        "reviewBody": "Lẩu cua đồng ở đây thực sự tuyệt vời! Cua tươi ngon, nước dùng đậm đà."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};
