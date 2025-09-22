import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, Clock, Video, Users, ChevronRight } from "lucide-react";

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SchedulingModal = ({ isOpen, onClose }: SchedulingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const availableDates = [
    { date: "2026-01-15", day: "Mon", label: "Jan 15" },
    { date: "2026-01-16", day: "Tue", label: "Jan 16" },
    { date: "2026-01-17", day: "Wed", label: "Jan 17" },
    { date: "2026-01-18", day: "Thu", label: "Jan 18" },
    { date: "2026-01-19", day: "Fri", label: "Jan 19" },
  ];

  const availableTimes = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      setShowConfirmation(true);
      setTimeout(() => {
        setShowConfirmation(false);
        onClose();
        setSelectedDate(null);
        setSelectedTime(null);
      }, 3000);
    }
  };

  if (showConfirmation) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px]">
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Demo Scheduled!</h3>
            <p className="text-muted-foreground">
              We'll send you a calendar invite and meeting link to your email.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Schedule Your Demo</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Demo Info */}
          <div className="bg-card rounded-lg p-4 border border-border">
            <div className="flex items-start gap-3">
              <Users className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-medium mb-1">30-Minute Personalized Demo</h4>
                <p className="text-sm text-muted-foreground">
                  See how JAIM can transform your Shopify marketing with AI-powered ad creation
                </p>
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <label className="text-sm font-medium mb-3 block">Select a Date</label>
            <div className="grid grid-cols-5 gap-2">
              {availableDates.map((date) => (
                <button
                  key={date.date}
                  onClick={() => setSelectedDate(date.date)}
                  className={`p-3 rounded-lg border text-center transition-all ${
                    selectedDate === date.date
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-xs text-muted-foreground">{date.day}</div>
                  <div className="text-sm font-medium">{date.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="animate-fade-in">
              <label className="text-sm font-medium mb-3 block">Select a Time (EST)</label>
              <div className="grid grid-cols-3 gap-2">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 rounded-lg border transition-all ${
                      selectedTime === time
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{time}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Schedule Button */}
          {selectedDate && selectedTime && (
            <Button
              onClick={handleSchedule}
              className="w-full animate-fade-in"
              size="lg"
            >
              Confirm Demo Booking
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SchedulingModal;