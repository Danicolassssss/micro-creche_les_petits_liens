import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("min-h-screen py-16 px-6 md:px-12 lg:px-20 flex flex-col justify-center", className)}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-8 max-w-3xl">
          {title && (
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-text-main/70 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

