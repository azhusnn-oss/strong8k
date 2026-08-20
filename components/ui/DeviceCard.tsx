import {
  Tv,
  Smartphone,
  Apple,
  MonitorPlay,
  Laptop,
  Box,
  type LucideIcon,
} from "lucide-react";
import { Device } from "@/lib/site-config";

const iconMap: Record<Device["icon"], LucideIcon> = {
  tv: Tv,
  firestick: MonitorPlay,
  androidtv: Tv,
  mobile: Smartphone,
  apple: Apple,
  windows: Laptop,
  box: Box,
  samsung: Tv,
  lg: Tv,
};

export function DeviceCard({ device }: { device: Device }) {
  const Icon = iconMap[device.icon];
  return (
    <div className="card-hover flex items-center gap-4 p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400/10 text-gold-300 ring-1 ring-inset ring-gold-400/20">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white">{device.name}</h3>
        <p className="text-xs text-slate-400">{device.setup}</p>
      </div>
    </div>
  );
}
