"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, Users, PartyPopper } from "lucide-react";

interface BookingFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
}

export default function BookingForm() {
  // State for form data
  const [formData, setFormData] = useState<BookingFormData>({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  // Available times state
  const [availableTimes] = useState<string[]>([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]);

  // Handle input changes
  const handleInputChange = (
    field: keyof BookingFormData,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.date ||
      !formData.time ||
      !formData.guests ||
      !formData.occasion
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Generate confirmation number
    const confirmationNumber = `LR${Date.now()
      .toString()
      .slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`;

    // Save booking to localStorage for confirmation page
    const bookingData = {
      ...formData,
      confirmationNumber,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("lastBooking", JSON.stringify(bookingData));

    // Log form data (in real app, this would be sent to API)
    console.log("Booking submitted:", bookingData);

    // Redirect to confirmation page with booking details
    const params = new URLSearchParams({
      date: formData.date,
      time: formData.time,
      guests: formData.guests.toString(),
      occasion: formData.occasion,
      confirmation: confirmationNumber,
    });

    window.location.href = `/booking/confirmation?${params.toString()}`;
  };

  // Get today's date for min date validation
  const today = new Date().toISOString().split("T")[0];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
          <Calendar className="w-6 h-6 text-yellow-500" />
          Reserve a Table
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Selection */}
          <div className="space-y-2">
            <Label htmlFor="res-date" className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-yellow-500" />
              Choose date
            </Label>
            <Input
              type="date"
              id="res-date"
              value={formData.date}
              min={today}
              onChange={(e) => handleInputChange("date", e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Time Selection */}
          <div className="space-y-2">
            <Label htmlFor="res-time" className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-500" />
              Choose time
            </Label>
            <Select
              value={formData.time}
              onValueChange={(value) => handleInputChange("time", value)}
              required
            >
              <SelectTrigger id="res-time">
                <SelectValue placeholder="Select a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimes.map((time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Number of Guests */}
          <div className="space-y-2">
            <Label htmlFor="guests" className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-500" />
              Number of guests
            </Label>
            <Input
              type="number"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
              value={formData.guests}
              onChange={(e) =>
                handleInputChange(
                  "guests",
                  Number.parseInt(e.target.value) || 1
                )
              }
              required
              className="w-full"
            />
          </div>

          {/* Occasion Selection */}
          <div className="space-y-2">
            <Label htmlFor="occasion" className="flex items-center gap-2">
              <PartyPopper className="w-4 h-4 text-yellow-500" />
              Occasion
            </Label>
            <Select
              value={formData.occasion}
              onValueChange={(value) => handleInputChange("occasion", value)}
              required
            >
              <SelectTrigger id="occasion">
                <SelectValue placeholder="Select an occasion" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Birthday">Birthday</SelectItem>
                <SelectItem value="Anniversary">Anniversary</SelectItem>
                <SelectItem value="Date Night">Date Night</SelectItem>
                <SelectItem value="Business Dinner">Business Dinner</SelectItem>
                <SelectItem value="Family Gathering">
                  Family Gathering
                </SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3"
          >
            Make Your Reservation
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
