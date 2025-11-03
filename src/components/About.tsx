import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Heart, Sparkles, Eye, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              The Bridge to Your Property Dreams
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our brand represents trust, expertise, and the vital connection between people and their property dreams on both sides of every transaction.
            </p>
            
            {/* Vision and Mission */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--brand-light-blue)', borderLeft: '4px solid var(--brand-deep-blue)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
                  <h3 className="text-lg text-gray-900">Vision</h3>
                </div>
                <p className="text-gray-700">
                  To empower Australians to achieve wealth, security, and opportunity through strategic property decisions.
                </p>
              </div>
              
              <div className="p-6 rounded-xl" style={{ backgroundColor: 'var(--brand-light-gold)', borderLeft: '4px solid var(--brand-rich-gold)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <Target className="h-6 w-6" style={{ color: 'var(--brand-rich-gold)' }} />
                  <h3 className="text-lg text-gray-900">Mission</h3>
                </div>
                <p className="text-gray-700">
                  To connect people with property and potential — combining expert real estate representation with tailored financial insight.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <Award className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Trusted Expertise</h3>
                  <p className="text-gray-600">
                    Years of experience navigating the property market, ensuring you make informed decisions with confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <Users className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Client-Focused Approach</h3>
                  <p className="text-gray-600">
                    Your goals are our priority. We tailor our services to meet your unique needs and aspirations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <Heart className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Dedicated Partnership</h3>
                  <p className="text-gray-600">
                    We're with you every step of the way, building lasting relationships beyond the transaction.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: 'var(--brand-light-blue)' }}>
                  <Sparkles className="h-6 w-6" style={{ color: 'var(--brand-deep-blue)' }} />
                </div>
                <div>
                  <h3 className="text-xl text-gray-900 mb-2">Outstanding Results</h3>
                  <p className="text-gray-600">
                    Proven track record of successful transactions and satisfied clients on both sides of the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwYWdlbnR8ZW58MXx8fHwxNzYxMTc5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Real estate professionals"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 text-white p-8 rounded-xl shadow-xl max-w-xs" style={{ backgroundColor: 'var(--brand-deep-blue)' }}>
              <p className="text-4xl mb-2">500+</p>
              <p className="text-lg">Successful Transactions</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
