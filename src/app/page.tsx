'use client';

'use client';

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FeaturedDishesSection } from "@/components/FeaturedDishesSection";
import { LoadingSpinner } from "@/components/LoadingSpinner";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    datetime: '',
    guests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    alert(`Cảm ơn ${formData.name}! Chúng tôi sẽ liên hệ với bạn sớm để xác nhận đặt bàn.`);
    setFormData({ name: '', phone: '', datetime: '', guests: '' });
    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Nhà hàng Thu 2</h1>
              <p className="text-red-200 text-lg">Đệ nhất Lẩu cua đồng</p>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="hover:text-red-200 transition-colors">Trang chủ</button>
              <button onClick={() => scrollToSection('menu')} className="hover:text-red-200 transition-colors">Thực đơn</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-red-200 transition-colors">Giới thiệu</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-red-200 transition-colors">Liên hệ</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-image.jpg"
            alt="Lẩu cua đồng tại Nhà hàng Thu 2"
            fill
            sizes="100vw"
            className="object-cover scale-110 transition-transform duration-[20s] ease-out hover:scale-105"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="absolute top-20 left-10 w-4 h-4 bg-red-400/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-40 left-20 w-5 h-5 bg-orange-400/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-20 right-10 w-2 h-2 bg-red-300/30 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        </div>

        {/* Content with Animations */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* Main Title with Slide Up Animation */}
          <div className="animate-fade-in-up">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              <span className="inline-block animate-slide-in-left">Chào mừng</span>
              <br />
              <span className="inline-block animate-slide-in-right text-red-400">Nhà hàng Thu 2</span>
            </h2>
          </div>

          {/* Subtitle with Fade In */}
          <div className="animate-fade-in-up-delay">
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg leading-relaxed font-light">
              Trải nghiệm hương vị đặc biệt của
              <span className="text-yellow-300 font-semibold"> lẩu cua đồng tươi ngon</span>,
              được chế biến theo công thức truyền thống của miền Bắc
            </p>
          </div>

          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up-delay-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-10 py-4 rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold shadow-2xl transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">Đặt bàn ngay</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="group relative border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold shadow-2xl transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
            >
              <span className="relative z-10">Xem thực đơn</span>
              <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/70 text-sm mt-2">Cuộn xuống</p>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <FeaturedDishesSection />

      {/* Gallery Section */}
      <section className="py-16 bg-gradient-to-b from-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-red-800 mb-4">
              Hình ảnh nhà hàng
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <Image
                src="/hero-image.jpg"
                alt="Lẩu cua đồng đặc biệt"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-lg font-semibold">Lẩu cua đồng đặc biệt</h4>
                <p className="text-sm">Hương vị truyền thống</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300 inline-block group-hover:rotate-12">🦀</span>
                <h4 className="text-xl font-semibold text-red-800 mt-4">Cua đồng tươi</h4>
                <p className="text-red-600">Nguyên liệu chính</p>
              </div>
            </div>

            <div className="group relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-orange-100 to-yellow-200 flex items-center justify-center">
              <div className="text-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300 inline-block group-hover:rotate-12">🍲</span>
                <h4 className="text-xl font-semibold text-red-800 mt-4">Nước dùng đậm đà</h4>
                <p className="text-red-600">Công thức bí truyền</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-red-800 mb-6">
                Về Nhà hàng Thu 2
              </h3>
              <p className="text-gray-700 mb-4">
                Với hơn 15 năm kinh nghiệm trong nghề, Nhà hàng Thu 2 tự hào là
                địa chỉ uy tín chuyên phục vụ lẩu cua đồng và các món ăn đặc sản miền Bắc.
              </p>
              <p className="text-gray-700 mb-4">
                Chúng tôi cam kết sử dụng nguyên liệu tươi ngon nhất, cua đồng được
                chọn lọc kỹ càng từ các vùng nước ngọt sạch.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Nguyên liệu tươi sống hàng ngày
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Không gian ấm cúng, thoải mái
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Phục vụ tận tình, chu đáo
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Giá cả hợp lý, chất lượng cao
                </li>
              </ul>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero-image.jpg"
                alt="Không gian nhà hàng Thu 2"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-red-800 mb-12">
            Thực đơn đặc biệt
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Lẩu cua đồng đặc biệt</h4>
              <p className="text-gray-600 mb-3">Cua đồng tươi sống, nước dùng đậm đà</p>
              <p className="text-red-600 font-bold text-lg">350.000đ - 500.000đ</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Bún riêu cua đồng</h4>
              <p className="text-gray-600 mb-3">Bún riêu cua đồng truyền thống</p>
              <p className="text-red-600 font-bold text-lg">45.000đ - 65.000đ</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Cua rang me</h4>
              <p className="text-gray-600 mb-3">Cua đồng rang me chua ngọt</p>
              <p className="text-red-600 font-bold text-lg">280.000đ - 400.000đ</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Canh chua cua đồng</h4>
              <p className="text-gray-600 mb-3">Canh chua cua đồng với rau thơm</p>
              <p className="text-red-600 font-bold text-lg">120.000đ - 180.000đ</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Nem cua bể</h4>
              <p className="text-gray-600 mb-3">Nem cua bể chiên giòn thơm ngon</p>
              <p className="text-red-600 font-bold text-lg">15.000đ/cái</p>
            </div>
            <div className="bg-red-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-semibold text-red-800 mb-2">Rau củ tươi</h4>
              <p className="text-gray-600 mb-3">Rau củ tươi ngon ăn kèm lẩu</p>
              <p className="text-red-600 font-bold text-lg">30.000đ - 50.000đ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              Liên hệ & Đặt bàn
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-red-400 mx-auto rounded-full"></div>
            <p className="text-xl text-red-100 mt-6 max-w-2xl mx-auto">
              Hãy để chúng tôi phục vụ bạn những món ăn ngon nhất
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-8 text-yellow-200">Thông tin liên hệ</h4>
                <div className="space-y-6">
                  <div className="group flex items-center p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-medium">Địa chỉ</p>
                      <p className="text-white">123 Đường ABC, Quận XYZ, Hà Nội</p>
                    </div>
                  </div>

                  <div className="group flex items-center p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-medium">Điện thoại</p>
                      <p className="text-white">024.1234.5678</p>
                    </div>
                  </div>

                  <div className="group flex items-center p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M6 6h12a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-medium">Hotline</p>
                      <p className="text-white">0987.654.321</p>
                    </div>
                  </div>

                  <div className="group flex items-center p-4 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-yellow-200 font-medium">Giờ mở cửa</p>
                      <p className="text-white">10:00 - 22:00 (Hàng ngày)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h4 className="text-2xl font-semibold mb-8 text-yellow-200 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                  </svg>
                  Đặt bàn trực tuyến
                </h4>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="group">
                    <label className="block text-yellow-200 text-sm font-medium mb-2">Họ và tên</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nhập họ và tên của bạn"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 pl-12 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="group">
                    <label className="block text-yellow-200 text-sm font-medium mb-2">Số điện thoại</label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Nhập số điện thoại"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 pl-12 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>

                  {/* DateTime Input */}
                  <div className="group">
                    <label className="block text-yellow-200 text-sm font-medium mb-2">Thời gian đặt bàn</label>
                    <div className="relative">
                      <input
                        type="datetime-local"
                        name="datetime"
                        value={formData.datetime}
                        onChange={handleInputChange}
                        required
                        className="w-full p-4 pl-12 rounded-xl bg-white/20 border border-white/30 text-white focus:bg-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>

                  {/* Guests Input */}
                  <div className="group">
                    <label className="block text-yellow-200 text-sm font-medium mb-2">Số người</label>
                    <div className="relative">
                      <input
                        type="number"
                        name="guests"
                        placeholder="Số lượng khách"
                        value={formData.guests}
                        onChange={handleInputChange}
                        min="1"
                        max="20"
                        required
                        className="w-full p-4 pl-12 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:bg-white/30 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all duration-300 backdrop-blur-sm"
                      />
                      <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-yellow-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-red-900 p-4 rounded-xl font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <LoadingSpinner size="sm" color="red" />
                          <span className="ml-2">Đang xử lý...</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                          </svg>
                          Đặt bàn ngay
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </button>

                  {/* Additional Info */}
                  <div className="mt-6 p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/30">
                    <p className="text-yellow-200 text-sm text-center">
                      💡 <strong>Lưu ý:</strong> Chúng tôi sẽ gọi lại để xác nhận đặt bàn trong vòng 15 phút
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-red-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h5 className="text-xl font-bold mb-2">Nhà hàng Thu 2</h5>
          <p className="text-red-200 mb-4">Đệ nhất Lẩu cua đồng - Hương vị truyền thống</p>
          <p className="text-red-300 text-sm">
            © 2024 Nhà hàng Thu 2. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </footer>
    </div>
  );
}
