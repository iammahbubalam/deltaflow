import { Card } from "@/components/ui/Card"
import { DynamicIcon } from "@/components/ui/DynamicIcon"

interface TestimonialsProps {
  testimonials: Array<{
    quote: string
    author: string
    title: string
    company: string
    image: string
  }>
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-[--color-gray-900] sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="flex flex-col justify-between bg-[--color-gray-50] border-none">
              <div className="mb-6">
                 {/* Quote Icon */}
                 <div className="text-[--brand-green] mb-4">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                     <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
                   </svg>
                 </div>
                 <p className="text-lg text-[--color-gray-900] font-medium leading-relaxed">
                   "{t.quote}"
                 </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[--color-gray-200] flex items-center justify-center text-[--color-gray-400] font-bold overflow-hidden">
                  {/* <Image src={t.image} alt={t.author} width={40} height={40} /> */}
                  {t.author[0]}
                </div>
                <div>
                  <div className="font-bold text-[--color-gray-900]">{t.author}</div>
                  <div className="text-sm text-[--color-gray-400]">{t.title}, {t.company}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
