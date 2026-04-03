import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import EditableText from './EditableText';

const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
           <div>
             <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-4">
               <EditableText id="contactTitle" defaultText="Get in Touch" />
             </h2>
             <p className="text-gray-600">
               <EditableText id="contactDesc" defaultText="We would love to hear from you. Whether you have a question about features, feedback, or just want to say Salam, our team is ready to answer." multiline />
             </p>
           </div>

           <div className="space-y-6">
             <div className="flex items-start space-x-4">
               <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                 <Mail size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-800">Email</h4>
                 <p className="text-gray-600">
                    <EditableText id="contactEmail" defaultText="contact@learnkoran.de" />
                 </p>
               </div>
             </div>
             
             <div className="flex items-start space-x-4">
               <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                 <MapPin size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-800">Location</h4>
                 <p className="text-gray-600">
                    <EditableText id="contactLocation" defaultText="Berlin, Germany" />
                 </p>
               </div>
             </div>

             <div className="flex items-start space-x-4">
               <div className="p-3 bg-emerald-100 text-emerald-600 rounded-lg">
                 <Phone size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-gray-800">Phone</h4>
                 <p className="text-gray-600">
                    <EditableText id="contactPhone" defaultText="+49 30 12345678" />
                 </p>
               </div>
             </div>
           </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
           <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    <EditableText id="labelName" defaultText="Name" />
                </label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    <EditableText id="labelEmail" defaultText="Email" />
                </label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    <EditableText id="labelMessage" defaultText="Message" />
                </label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition"></textarea>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-emerald-200 transition flex items-center justify-center space-x-2">
                <Send size={20} />
                <span><EditableText id="btnSend" defaultText="Send Message" /></span>
              </button>
           </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;