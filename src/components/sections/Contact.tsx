
import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { cn } from '@/lib/utils';
import SocialButtons from '../common/SocialButtons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset the submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@johndoe.com',
      href: 'mailto:contact@johndoe.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,+CA',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          subtitle="Get In Touch"
          title="Contact Me"
          description="Have a project in mind or just want to say hello? I'd love to hear from you!"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message <span className="text-primary">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                  rows={5}
                  className="w-full p-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "btn-primary w-full sm:w-auto flex items-center justify-center gap-2",
                  (isSubmitting || submitted) && "opacity-80"
                )}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-lg border border-border hover:border-primary/30 transition-colors bg-card/50 hover:bg-card"
                >
                  <div className="p-3 rounded-lg bg-accent/50 text-primary">
                    <info.icon size={24} />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <SocialButtons iconSize={20} />
            </div>
            
            <div className="mt-8 p-6 rounded-lg bg-primary/5 border border-primary/10">
              <p className="text-muted-foreground italic">
                "I strive to respond to all inquiries within 24 hours. Looking forward to discussing how we can work together on your next project!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
