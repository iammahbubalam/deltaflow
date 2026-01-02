"use client"

import { PageHeader } from "@/components/layout/PageHeader"
import { ContactForm } from "@/components/sections/ContactForm"
import { contactForm, siteConfig } from "@/lib/data"
import { Card } from "@/components/ui/Card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const handleSubmit = async (data: any) => {
    // Simulate API call
    console.log("Form submitted:", data)
    alert("Thanks for your message! We'll be in touch shortly.")
  }

  const fields = [
    { name: "fullName", label: "Full Name *", type: "text" },
    { name: "email", label: "Work Email *", type: "email" },
    { name: "company", label: "Company *", type: "text" },
    { name: "service", label: "Interested In *", type: "select", options: contactForm.serviceOptions },
    { name: "budget", label: "Budget Range", type: "select", options: contactForm.budgetOptions },
    { name: "timeline", label: "Timeline", type: "select", options: contactForm.timelineOptions },
    { name: "message", label: "Tell Us About Your Project *", type: "textarea" }
  ]

  return (
    <>
      <PageHeader 
        headline="Let's Build Something Great"
        subheadline="Tell us about your project and we'll get back to you within 24 hours"
      />
      
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-1 space-y-8">
               <div>
                 <h3 className="text-xl font-bold text-[--color-gray-900] mb-6">Contact Information</h3>
                 <div className="space-y-6">
                   <div className="flex items-start gap-4">
                     <Mail className="h-6 w-6 text-[--brand-green] mt-1" />
                     <div>
                       <div className="font-semibold text-[--color-gray-900]">Email</div>
                       <a href={`mailto:${siteConfig.email}`} className="text-[--color-gray-400] hover:text-[--brand-green]">{siteConfig.email}</a>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <Phone className="h-6 w-6 text-[--brand-green] mt-1" />
                     <div>
                       <div className="font-semibold text-[--color-gray-900]">Phone</div>
                       <a href={`tel:${siteConfig.phone}`} className="text-[--color-gray-400] hover:text-[--brand-green]">{siteConfig.phone}</a>
                     </div>
                   </div>
                   <div className="flex items-start gap-4">
                     <MapPin className="h-6 w-6 text-[--brand-green] mt-1" />
                     <div>
                       <div className="font-semibold text-[--color-gray-900]">Office</div>
                       <div className="text-[--color-gray-400]">
                         {siteConfig.address.city}, {siteConfig.address.state}<br/>
                         {siteConfig.address.country}
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               <Card className="bg-[--color-gray-50] border-none">
                 <h4 className="font-bold text-[--color-gray-900] mb-2">Office Hours</h4>
                 <p className="text-[--color-gray-400]">Monday - Friday<br/>9:00 AM - 6:00 PM EST</p>
               </Card>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-[--color-gray-200] p-8 sm:p-12 shadow-sm">
                <ContactForm 
                  fields={fields}
                  submitText="Send Message"
                  onSubmit={handleSubmit}
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}
