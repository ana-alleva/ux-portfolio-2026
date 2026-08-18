import { ChevronDown } from "lucide-react";

export function ScrollIndicator() {
  return (
    <div className="pointer-events-none">
      <div className="flex flex-col items-center gap-2 text-white/70">
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
}
