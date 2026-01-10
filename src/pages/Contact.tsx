import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  MessageSquare, 
  MapPin, 
  Phone, 
  Send, 
  Clock,
  CheckCircle,
  ExternalLink,
  FileText,
  User,
  Sparkles
} from 'lucide-react';
import ResumeDownload from '../components/ResumeDownload';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'superlightintellex@gmail.com',
      link: 'mailto:superlightintellex@gmail.com',
      label: 'Send a message',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/tinodashe-kayenie',
      link: 'https://www.linkedin.com/in/tinodashe-kayenie-a24954117',
      label: 'Connect professionally',
      color: 'from-blue-700 to-blue-900'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: 'github.com/slitechnologies',
      link: 'https://github.com/slitechnologies',
      label: 'Explore my code',
      color: 'from-gray-800 to-gray-900'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp',
      value: '+263 773 598 539',
      link: 'https://wa.me/263779598539',
      label: 'Start a chat',
      color: 'from-green-500 to-green-700'
    },
  ];

  const availability = [
    { day: 'Monday - Friday', hours: '5:00 AM - 11:00 PM', timezone: 'CAT (UTC+2)' },
    { day: 'Weekends', hours: 'Flexible availability', timezone: 'For urgent matters' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
                <Sparkles size={14} />
                Available for select projects & full-time roles
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                  Let's Build
                </span>
                <span className="block text-gray-900 mt-2">
                  Something Extraordinary
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Whether you're hiring, collaborating, or exploring humanitarian tech solutions, 
                I'm here to help turn visionary ideas into resilient, scalable systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-cyan-100">
                  <Send className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Send a Message</h2>
                  <p className="text-gray-600">I typically respond within 24 hours</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        Your Name
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        Email Address
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Project inquiry / Job opportunity"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                      placeholder="Tell me about your project, timeline, and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} text-white`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                        <p className="text-gray-700 text-sm mb-2">{method.value}</p>
                        <span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          {method.label}
                          <ExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Best Time to Reach Me</h3>
                </div>
                
                <div className="space-y-4">
                  {availability.map((slot, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-blue-100 last:border-0">
                      <div>
                        <p className="font-medium text-gray-900">{slot.day}</p>
                        <p className="text-sm text-gray-600">{slot.timezone}</p>
                      </div>
                      <p className="font-semibold text-blue-700">{slot.hours}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium text-gray-900">Based in Harare, Zimbabwe</p>
                      <p className="text-sm text-gray-600">Open to remote & hybrid opportunities worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Note */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-bold text-gray-900">Prefer a Direct Call?</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  For urgent matters or detailed technical discussions, feel free to call:
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+263773598539"
                    className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-xl hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Phone size={18} />
                    Call +263 773 598 539
                  </a>
                  <p className="text-sm text-gray-600">
                    Available for 30-minute discovery calls
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download Section */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl p-8 border border-blue-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Detailed Technical Profile</h3>
                  </div>
                  <p className="text-gray-700 max-w-2xl">
                    Download my comprehensive resume with detailed project case studies, 
                    technical architecture diagrams, and measurable impact metrics.
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <ResumeDownload />
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              "The best way to predict the future is to build it. Let's build together."
            </p>
            <a
              href="mailto:superlightintellex@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all hover:scale-105"
            >
              <Mail size={20} />
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;