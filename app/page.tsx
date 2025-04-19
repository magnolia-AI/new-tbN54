import { Button } from '@/components/ui/button'
    import { Card, CardContent } from '@/components/ui/card'
    import { useToast } from '@/hooks/use-toast'

    export default function Home() {
      const { toast } = useToast()

      const showToast = () => {
        toast({
          title: 'Welcome!',
          description: 'Thanks for visiting the homepage.',
        })
      }

      return (
        <div className="min-h-full bg-gradient-to-b from-blue-50 to-white">
          <section className="container mx-auto px-6 pt-24 pb-20 text-center">
            <h1 className="text-6xl font-extrabold tracking-tight text-blue-900">
              Welcome to Your New Website
            </h1>
            <p className="mt-6 text-xl text-blue-700 max-w-xl mx-auto">
              A clean, modern homepage built with Next.js and Shadcn UI components.
            </p>
            <div className="mt-12 flex justify-center gap-6">
              <Button size="lg" className="px-10" onClick={showToast}>
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-10">
                Learn More
              </Button>
            </div>
          </section>

          <section className="container mx-auto px-6 py-20 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">Fast Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Experience lightning-fast load times and smooth interactions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">Fully Responsive</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Looks great on any device, from mobile phones to large desktops.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3 text-blue-900">Easy to Customize</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built with modular components that you can easily adapt to your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="container mx-auto px-6 py-20 text-center max-w-3xl">
            <h2 className="text-4xl font-bold tracking-tight mb-6 text-blue-900">
              Ready to build something amazing?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start customizing your site now with Next.js and Shadcn UI.
            </p>
            <Button size="lg" className="px-12">
              Get Started Today
            </Button>
          </section>
        </div>
      )
    }