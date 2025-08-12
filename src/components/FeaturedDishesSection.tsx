'use client';

import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const dishes = [
  {
    id: 1,
    icon: "🦀",
    title: "Lẩu cua đồng",
    description: "Cua đồng tươi sống, nước dùng thanh ngọt",
    color: "from-red-100 to-red-50"
  },
  {
    id: 2,
    icon: "🍲",
    title: "Bún riêu cua",
    description: "Bún riêu cua đồng đậm đà, thơm ngon",
    color: "from-orange-100 to-orange-50"
  },
  {
    id: 3,
    icon: "🥬",
    title: "Rau củ tươi",
    description: "Rau củ tươi ngon, sạch, an toàn",
    color: "from-green-100 to-green-50"
  }
];

export const FeaturedDishesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef, visibleItems } = useStaggeredAnimation(dishes.length, 150);

  return (
    <section 
      ref={elementRef as any}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-100 to-transparent"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-red-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-200 rounded-full blur-2xl animate-bounce-gentle"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-5xl font-bold text-red-800 mb-6 relative">
            Món ăn đặc sắc
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
          </h3>
          <div className="w-32 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-400 mx-auto rounded-full mb-6 shadow-lg"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Khám phá những món ăn đặc sản được chế biến từ nguyên liệu tươi ngon nhất
          </p>
        </div>
        
        {/* Enhanced Dishes Grid */}
        <div 
          ref={containerRef as any}
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto"
        >
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className={`text-center group cursor-pointer transition-all duration-700 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-90'
              }`}
              style={{
                transitionDelay: visibleItems[index] ? '0ms' : `${index * 150}ms`
              }}
            >
              {/* Enhanced Icon Container */}
              <div className={`bg-gradient-to-br ${dish.color} rounded-full w-40 h-40 mx-auto mb-8 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 hover-lift relative overflow-hidden`}>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500 relative z-10 group-hover:animate-wiggle">
                  {dish.icon}
                </span>
                
                {/* Floating Particles */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full animate-bounce-gentle"></div>
                <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Content */}
              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-red-800 mb-3 group-hover:text-red-600 transition-colors duration-300 group-hover:scale-105 transform">
                  {dish.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-lg">
                  {dish.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 mx-auto group-hover:w-16 transition-all duration-500 rounded-full"></div>
              </div>

              {/* Interactive Badge */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium shadow-md">
                  Đặc sản nhà hàng
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button 
            onClick={() => {
              const element = document.getElementById('menu');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-xl hover:shadow-2xl font-semibold text-lg relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Xem thực đơn đầy đủ
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};
