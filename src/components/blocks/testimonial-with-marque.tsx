import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground",
      "min-h-screen flex items-center py-12 sm:py-16 px-0",
      className
    )}>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8 text-center sm:gap-12 md:gap-16 w-full py-8">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-6 md:gap-8">
          <h2 className="max-w-[720px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-[800px] font-medium text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-8">
          <div className="flex overflow-hidden p-2 [--gap:1rem] flex-row [--duration:30s]">
            <div className="flex shrink-0 gap-4 animate-marquee flex-row">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set1-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
            <div className="flex shrink-0 gap-4 animate-marquee flex-row" aria-hidden="true">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`set2-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-background sm:block" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-background sm:block" />
        </div>
      </div>
    </section>
  )
}