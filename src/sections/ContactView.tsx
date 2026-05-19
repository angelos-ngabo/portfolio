import React, { useState } from 'react';

const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate API request trigger
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitted(false);
  };

  const currentDateString = new Date().toDateString();

  return (
    <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center lg:h-full py-4 lg:py-0">
      {/* Left Column: Form / Success Message */}
      <div className="flex flex-col justify-center space-y-6 select-text max-w-lg w-full justify-self-center">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-5 font-mono">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-semibold text-[#607B96]">
                _name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded border border-[#1E2D3D] bg-[#011221] px-4 py-2.5 text-sm text-[#E5E9F0] placeholder-[#607B96]/45 outline-none focus:border-[#FEA55F]/60 focus:ring-0 transition-colors"
                placeholder="Ngabo Angelos"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-[#607B96]">
                _email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded border border-[#1E2D3D] bg-[#011221] px-4 py-2.5 text-sm text-[#E5E9F0] placeholder-[#607B96]/45 outline-none focus:border-[#FEA55F]/60 focus:ring-0 transition-colors"
                placeholder="ngaoangelos2@gmail.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-semibold text-[#607B96]">
                _message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded border border-[#1E2D3D] bg-[#011221] px-4 py-2.5 text-sm text-[#E5E9F0] placeholder-[#607B96]/45 outline-none focus:border-[#FEA55F]/60 focus:ring-0 transition-colors resize-none"
                placeholder="Hey, let's collaborate on a fullstack system..."
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-[#1E2D3D] border border-[#314158] px-5 py-2.5 text-sm font-bold text-[#E5E9F0] transition-all hover:bg-[#314158] active:scale-95 shadow-md"
            >
              submit-message
            </button>
          </form>
        ) : (
          <div className="space-y-4 font-mono text-center sm:text-left py-8">
            <h3 className="text-xl font-bold text-[#E5E9F0]">Thank you! </h3>
            <p className="text-sm text-[#607B96] leading-relaxed">
              Your message has been processed successfully. I will get back to you shortly.
            </p>
            <button
              onClick={handleReset}
              className="rounded-lg bg-[#FEA55F] px-4 py-2 text-sm font-bold text-[#01080E] transition-all hover:bg-[#FEA55F]/90 active:scale-95"
            >
              send-new-message
            </button>
          </div>
        )}
      </div>

      {/* Right Column: Dynamic Code Preview */}
      <div className="flex items-center justify-center lg:border-l lg:border-[#1E2D3D]/30 lg:pl-12 h-full">
        <div className="w-full max-w-lg rounded-lg border border-[#1E2D3D] bg-[#01080E]/40 p-6 shadow-xl backdrop-blur-md select-text font-mono text-sm leading-relaxed overflow-x-auto">
          {/* Top Meta info */}
          <div className="mb-4 flex items-center justify-between border-b border-[#1E2D3D]/40 pb-2 text-xs text-[#607B96] select-none">
            <span>form_payload_sender.js</span>
            <span>JS</span>
          </div>

          <div className="space-y-0.5 whitespace-pre">
            <div>
              <span className="text-[#4D5BCE]">const</span>{' '}
              <span className="text-[#00D5BE]">button</span> ={' '}
              <span className="text-[#00D5BE]">document</span>.
              <span className="text-[#43D9AD]">querySelector</span>(
              <span className="text-[#FFA1AD]">&apos;#sendBtn&apos;</span>);
            </div>
            <div className="h-4" />
            <div>
              <span className="text-[#4D5BCE]">const</span>{' '}
              <span className="text-[#00D5BE]">message</span> = {'{'}
            </div>
            <div className="pl-6">
              <span className="text-[#E5E9F0]">name</span>:{' '}
              <span className="text-[#FFA1AD]">&quot;{formData.name || 'Ngabo Angelos'}&quot;</span>,
            </div>
            <div className="pl-6">
              <span className="text-[#E5E9F0]">email</span>:{' '}
              <span className="text-[#FFA1AD]">&quot;{formData.email || 'ngaoangelos2@gmail.com'}&quot;</span>,
            </div>
            <div className="pl-6">
              <span className="text-[#E5E9F0]">message</span>:{' '}
              <span className="text-[#FFA1AD]">&quot;{formData.message || 'Write a message...'}&quot;</span>,
            </div>
            <div className="pl-6">
              <span className="text-[#E5E9F0]">date</span>:{' '}
              <span className="text-[#FFA1AD]">&quot;{currentDateString}&quot;</span>
            </div>
            <div>{'}'}</div>
            <div className="h-4" />
            <div>
              <span className="text-[#00D5BE]">button</span>.
              <span className="text-[#43D9AD]">addEventListener</span>(
              <span className="text-[#FFA1AD]">&apos;click&apos;</span>, () =&gt; {'{'}
            </div>
            <div className="pl-6">
              <span className="text-[#00D5BE]">form</span>.
              <span className="text-[#43D9AD]">send</span>(
              <span className="text-[#00D5BE]">message</span>);
            </div>
            <div>{'});'}</div>
            {isSubmitted && (
              <>
                <div className="h-4" />
                <div className="text-[#43D9AD] font-semibold">
                  // message status: &quot;sent_successfully&quot;
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
