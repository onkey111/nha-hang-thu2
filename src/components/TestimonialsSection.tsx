'use client';

import { useScrollAnimation, useStaggeredAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Lan",
    role: "Khách hàng thường xuyên",
    content: "Lẩu cua đồng ở đây thực sự tuyệt vời! Cua tươi ngon, nước dùng đậm đà. Tôi đã giới thiệu cho nhiều bạn bè và ai cũng khen ngợi.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    id: 2,
    name: "Trần Văn Minh",
    role: "Food blogger",
    content: "Không gian nhà hàng ấm cúng, phục vụ tận tình. Đặc biệt món bún riêu cua đồng rất đặc biệt, khác hẳn những nơi khác tôi từng thử.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    id: 3,
    name: "Lê Thị Hương",
    role: "Gia đình 4 người",
    content: "Đưa gia đình đến ăn rất hài lòng. Giá cả hợp lý, chất lượng tuyệt vời. Các con rất thích không gian và món ăn ở đây.",
    rating: 5,
    avatar: "👩‍👧‍👦"
  }
];

export const TestimonialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const { containerRef, visibleItems } = useStaggeredAnimation(testimonials.length, 200);

  return (
    <section 
      ref={elementRef as any}
      className="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-4xl font-bold text-red-800 mb-4">
            Khách hàng nói gì về chúng tôi
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hàng nghìn khách hàng đã tin tưởng và yêu thích hương vị đặc biệt của chúng tôi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={containerRef as any}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-red-100 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: visibleItems[index] ? '0ms' : `${index * 200}ms`
              }}
            >
              {/* Rating Stars */}
              <div className="flex justify-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-center mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{testimonial.avatar}</span>
                </div>
                <h4 className="font-semibold text-red-800 text-lg">{testimonial.name}</h4>
                <p className="text-red-600 text-sm">{testimonial.role}</p>
              </div>

              {/* Decorative Quote */}
              <div className="absolute top-4 left-4 text-red-200 text-4xl font-serif">"</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 mb-6">Bạn cũng muốn trải nghiệm hương vị tuyệt vời này?</p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg font-semibold">
            Đặt bàn ngay hôm nay
          </button>
        </div>
      </div>
    </section>
  );
};
