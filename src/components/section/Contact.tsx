import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { contactData } from "@/data/contact";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-4 py-28 md:px-8 md:py-40"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Badge variant="outline">{contactData.badge}</Badge>

        <h2 className="mt-8 text-5xl leading-none text-white md:text-7xl">
          {contactData.title}
        </h2>

        <p className="mt-8 max-w-2xl text-base leading-7 text-primary md:text-xl">
          {contactData.description}
        </p>

        <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
          <Button asChild size="lg">
            <a
              href={contactData.buttons.linkedin.href}
              target="_blank"
              rel="noreferrer"
            >
              {contactData.buttons.linkedin.label}
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href={contactData.buttons.email.href}>
              {contactData.buttons.email.label}
            </a>
          </Button>

          <Button asChild size="lg" variant="outline">
            <a href={contactData.buttons.cv.href} download>
              {contactData.buttons.cv.label}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
