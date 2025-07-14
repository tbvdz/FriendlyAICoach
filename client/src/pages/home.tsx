import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/logo";
import { ContactForm } from "@/components/contact-form";
import { 
  Mail, 
  Book, 
  Users, 
  Briefcase, 
  MapPin, 
  Star, 
  ShoppingCart, 
  FileText,
  Menu,
  X
} from "lucide-react";
import heroImage from "@assets/358409824_10224350092086604_7037720930946379700_n_1752202910800.jpg";

import pexels_shvetsa_5257276 from "@assets/pexels-shvetsa-5257276.jpg";

import pexels_marcus_aurelius_6787970 from "@assets/pexels-marcus-aurelius-6787970.jpg";

import pexels_shvets_production_7545266 from "@assets/pexels-shvets-production-7545266.jpg";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Logo />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
              >
                Contact
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-lg font-medium transition-colors"
            >
              Book a Session
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-lg font-medium"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-lg font-medium"
                >
                  How It Works
                </button>
                <button 
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-lg font-medium"
                >
                  Testimonials
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 text-lg font-medium"
                >
                  Contact
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full text-lg font-medium"
                >
                  Book a Session
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover What AI Can Do for You
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Personal, one-on-one coaching for older adults — no tech experience required.
              </p>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-xl font-semibold transition-colors shadow-lg"
              >
                Book a Session
              </Button>
            </div>
            <div className="text-center animate-slide-up">
              <div className="relative group max-w-lg mx-auto">
                <img 
                  src={heroImage} 
                  alt="Your friendly AI coach ready to help" 
                  className="rounded-2xl shadow-2xl w-full h-auto transition-all duration-300 group-hover:brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white px-6">
                    <h3 className="text-2xl font-bold mb-3">Meet Bart - Your Friendly AI Coach</h3>
                    <p className="text-lg leading-relaxed">Hi, I’m Bart Van Der Zee — a lifelong learner, tech enthusiast, and experienced teacher.  With a background in music, technology, and digital media, I’ve spent over a decade helping people of all ages learn new skills. I created Friendly AI Coaching to make powerful tools like ChatGPT easy and approachable, especially for older adults.  
                    Whether you want help with emails, resumes, meal planning, or just understanding how AI works, I’ll guide you step-by-step in a relaxed, judgment-free setting. No tech experience needed — just curiosity.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What is Friendly AI Coaching?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">Friendly AI Coaching offers relaxed, personalized video sessions designed to help older adults learn how to use artificial intelligence in everyday life. In just one 60-minute call, you'll be gently guided through the basics of using today's most helpful AI tools, all at your own pace and comfort level.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src={pexels_marcus_aurelius_6787970} 
                alt="Mature woman in her 60s confidently using a laptop" 
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Learning</h3>
              <p className="text-gray-600 text-lg">Tailored to your specific needs and interests</p>
            </div>
            <div className="text-center">
              <img 
                src={pexels_shvets_production_7545266} 
                alt="Mature man in his 60s learning on a computer with guidance" 
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient Guidance</h3>
              <p className="text-gray-600 text-lg">Learn at your own comfortable pace</p>
            </div>
            <div className="text-center">
              <img 
                src={pexels_shvetsa_5257276} 
                alt="Older adult using technology to connect with family" 
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-World Benefits</h3>
              <p className="text-gray-600 text-lg">Connect better with family and friends</p>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Can AI Help You With?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the many ways AI can make your daily life easier and more enjoyable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Answering Emails</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Get help crafting thoughtful responses</p>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI can help you write professional emails, suggest better wording, and even translate messages to communicate clearly with anyone.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Finding Recipes</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Discover new meals based on what you have</p>
                <div className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">Tell AI what ingredients you have, and it will suggest delicious recipes, cooking tips, and even dietary modifications.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Connecting with Grandkids</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Better digital communication with family</p>
                <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI can help you understand social media, suggest conversation starters, and even help you create fun content to share with family.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Searching & Resume Help</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Update your resume and find opportunities</p>
                <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI can modernize your resume, suggest keywords for job applications, and help you practice interview questions.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning Travel or Events</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Organize trips and special occasions</p>
                <div className="absolute inset-0 bg-indigo-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI can create detailed itineraries, suggest destinations within your budget, and help plan memorable family gatherings.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Getting Book & Movie Recommendations</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Discover new entertainment you'll love</p>
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI learns your preferences and suggests books, movies, and shows you'll actually enjoy, saving you time browsing.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Creating Shopping Lists</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Organize your grocery and shopping needs</p>
                <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI can organize your shopping by store layout, suggest healthier alternatives, and even help you stick to your budget.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden">
              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Understanding Online Forms</h3>
                <p className="text-gray-600 group-hover:opacity-0 transition-opacity duration-300">Navigate digital paperwork with confidence</p>
                <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-white text-center">AI can explain confusing forms, help you fill them out correctly, and ensure you don't miss important details.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with AI is easier than you think. Here's how we'll help you every step of the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book Your Session</h3>
              <p className="text-lg text-gray-600">
                Choose a time that works for you and tell us what you'd like to learn about AI.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join a Relaxed Zoom Call</h3>
              <p className="text-lg text-gray-600">Connect with your friendly coach for a comfortable 60-minute session at your own pace.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Get Your Cheat Sheet</h3>
              <p className="text-lg text-gray-600">
                Receive a simple guide with everything you learned to reference anytime.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-4 italic">
                  "I was so intimidated by AI before, but my coach made everything so clear and simple. Now I use it to help write emails to my grandchildren and find new recipes to try!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Margaret Johnson</h4>
                    <p className="text-gray-500">Age 67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-4 italic">
                  "The session helped me plan my entire vacation to Europe! I learned how to use AI to find the best restaurants and activities. It saved me hours of research."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">RK</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Robert Kim</h4>
                    <p className="text-gray-500">Age 72</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-lg mb-4 italic">
                  "My coach was so patient and understanding. I never felt rushed or embarrassed about asking questions. The cheat sheet they gave me is sitting right next to my computer!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">DS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Dorothy Smith</h4>
                    <p className="text-gray-500">Age 69</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to give it a try?
          </h2>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            Join hundreds of older adults who have discovered the power of AI to make their daily lives easier and more enjoyable.
          </p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-full text-xl font-semibold transition-colors shadow-lg"
          >Schedule Your Friendly AI Coaching Session</Button>
          <p className="text-indigo-200 mt-4 text-lg">60-minute session • $99 • Life Changing Results</p>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discover what AI can do for you? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Logo white className="mb-4" />
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Helping older adults discover the power of AI through personalized, patient coaching sessions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 hello@friendlyaicoach.com</p>
                <p>📞 (555) 123-4567</p>
                <p>🕒 Mon-Fri 9am-6pm EST</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 Friendly AI Coach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
