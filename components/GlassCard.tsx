import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padded?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  padded = true,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-2xl border border-border",
        padded && "p-6",
        hover && "hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}