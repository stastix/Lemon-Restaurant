"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Calendar,
  Clock,
  Users,
  PartyPopper,
  MapPin,
  Phone,
  Mail,
  Download,
  Share2,
  Edit,
  Printer,
} from "lucide-react";
import Link from "next/link";

interface BookingDetails {
  confirmationNumber: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
}

export default function BookingConfirmation() {
  const searchParams = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get booking details from URL parameters or localStorage
    const date = searchParams.get("date");
    const time = searchParams.get("time");
    const guests = searchParams.get("guests");
    const occasion = searchParams.get("occasion");
    const confirmationNumber =
      searchParams.get("confirmation") || generateConfirmationNumber();

    if (date && time && guests && occasion) {
      setBookingDetails({
        confirmationNumber,
        date,
        time,
        guests: Number.parseInt(guests),
        occasion,
        customerName: searchParams.get("name") || "Guest",
        customerEmail: searchParams.get("email") || "",
        customerPhone: searchParams.get("phone") || "",
      });
    } else {
      // Try to get from localStorage as fallback
      const savedBooking = localStorage.getItem("lastBooking");
      if (savedBooking) {
        const parsed = JSON.parse(savedBooking);
        setBookingDetails({
          ...parsed,
          confirmationNumber:
            parsed.confirmationNumber || generateConfirmationNumber(),
        });
      }
    }
    setIsLoading(false);
  }, [searchParams]);

  const generateConfirmationNumber = () => {
    return `LR${Date.now().toString().slice(-6)}${Math.random()
      .toString(36)
      .substr(2, 3)
      .toUpperCase()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(Number.parseInt(hours), Number.parseInt(minutes));
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const generateCalendarEvent = () => {
    if (!bookingDetails) return;

    const startDate = new Date(
      `${bookingDetails.date}T${bookingDetails.time}:00`
    );
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later

    const formatDateForCalendar = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const eventDetails = {
      title: `Dinner at Lemon Restaurant - ${bookingDetails.occasion}`,
      start: formatDateForCalendar(startDate),
      end: formatDateForCalendar(endDate),
      description: `Reservation for ${bookingDetails.guests} guests at Lemon Restaurant. Confirmation: ${bookingDetails.confirmationNumber}`,
      location: "123 Mediterranean Ave, City, State 12345",
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title
    )}&dates=${eventDetails.start}/${
      eventDetails.end
    }&details=${encodeURIComponent(
      eventDetails.description
    )}&location=${encodeURIComponent(eventDetails.location)}`;

    window.open(googleCalendarUrl, "_blank");
  };

  const downloadICS = () => {
    if (!bookingDetails) return;

    const startDate = new Date(
      `${bookingDetails.date}T${bookingDetails.time}:00`
    );
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

    const formatDateForICS = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Lemon Restaurant//Booking Confirmation//EN
BEGIN:VEVENT
UID:${bookingDetails.confirmationNumber}@lemonrestaurant.com
DTSTAMP:${formatDateForICS(new Date())}
DTSTART:${formatDateForICS(startDate)}
DTEND:${formatDateForICS(endDate)}
SUMMARY:Dinner at Lemon Restaurant - ${bookingDetails.occasion}
DESCRIPTION:Reservation for ${
      bookingDetails.guests
    } guests at Lemon Restaurant. Confirmation: ${
      bookingDetails.confirmationNumber
    }
LOCATION:123 Mediterranean Ave, City, State 12345
BEGIN:VALARM
TRIGGER:-PT1H
ACTION:DISPLAY
DESCRIPTION:Reminder: Dinner at Lemon Restaurant in 1 hour
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `lemon-restaurant-reservation-${bookingDetails.confirmationNumber}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const shareReservation = async () => {
    if (!bookingDetails) return;

    const shareData = {
      title: "Lemon Restaurant Reservation",
      text: `I have a reservation at Lemon Restaurant on ${formatDate(
        bookingDetails.date
      )} at ${formatTime(bookingDetails.time)} for ${
        bookingDetails.guests
      } guests. Confirmation: ${bookingDetails.confirmationNumber}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareData.text);
      alert("Reservation details copied to clipboard!");
    }
  };

  const printConfirmation = () => {
    window.print();
  };

  if (isLoading) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your confirmation...</p>
        </div>
      </section>
    );
  }

  if (!bookingDetails) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md mx-auto">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-2xl">❌</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find your booking details. Please check your
              confirmation email or try booking again.
            </p>
            <Link href="/booking">
              <Button className="bg-yellow-500 hover:bg-yellow-600">
                Make New Reservation
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen bg-gray-50 py-12"
      role="main"
      aria-labelledby="confirmation-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <header className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle
              className="w-12 h-12 text-green-600"
              aria-hidden="true"
            />
          </div>
          <h1
            id="confirmation-heading"
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Reservation Confirmed!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for choosing Lemon Restaurant. We're excited to welcome
            you for an unforgettable Mediterranean dining experience.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Confirmation Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Details Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-yellow-500" />
                  Reservation Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-semibold">
                          {formatDate(bookingDetails.date)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-semibold">
                          {formatTime(bookingDetails.time)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Party Size</p>
                        <p className="font-semibold">
                          {bookingDetails.guests}{" "}
                          {bookingDetails.guests === 1 ? "Guest" : "Guests"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <PartyPopper className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-500">Occasion</p>
                        <Badge
                          variant="secondary"
                          className="bg-yellow-100 text-yellow-800"
                        >
                          {bookingDetails.occasion}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">#</span>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">
                        Confirmation Number
                      </p>
                      <p className="font-mono font-bold text-lg">
                        {bookingDetails.confirmationNumber}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card>
              <CardHeader>
                <CardTitle>Manage Your Reservation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={generateCalendarEvent}
                  >
                    <Calendar className="w-5 h-5" />
                    <span className="text-xs">Add to Google Calendar</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={downloadICS}
                  >
                    <Download className="w-5 h-5" />
                    <span className="text-xs">Download .ics</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={shareReservation}
                  >
                    <Share2 className="w-5 h-5" />
                    <span className="text-xs">Share</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex flex-col items-center gap-2 h-auto py-4"
                    onClick={printConfirmation}
                  >
                    <Printer className="w-5 h-5" />
                    <span className="text-xs">Print</span>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/booking" className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Edit className="w-4 h-4 mr-2" />
                        Modify Reservation
                      </Button>
                    </Link>
                    <Link href="/menu" className="flex-1">
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                        View Menu
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Information */}
          <aside className="space-y-6" role="complementary">
            {/* Restaurant Information */}
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-0.5" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <address className="text-sm text-gray-600 not-italic">
                      123 Mediterranean Ave
                      <br />
                      City, State 12345
                    </address>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+15551234567"
                      className="text-sm text-gray-600"
                    >
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@lemonrestaurant.com"
                      className="text-sm text-gray-600"
                    >
                      info@lemonrestaurant.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Information */}
            <Card className="bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="text-yellow-800">
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-yellow-700">
                <div>
                  <p className="font-semibold">Arrival Time</p>
                  <p>
                    Please arrive 10-15 minutes before your reservation time.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Cancellation Policy</p>
                  <p>
                    Free cancellation up to 2 hours before your reservation.
                  </p>
                </div>

                <div>
                  <p className="font-semibold">Dress Code</p>
                  <p>Smart casual attire recommended.</p>
                </div>

                <div>
                  <p className="font-semibold">Special Requests</p>
                  <p>
                    Please call us for dietary restrictions or special
                    accommodations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Changes */}
            <Card>
              <CardHeader>
                <CardTitle>Need to Make Changes?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  To modify or cancel your reservation, please contact us at
                  least 2 hours in advance.
                </p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+15551234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Restaurant
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="mailto:reservations@lemonrestaurant.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* What to Expect Section */}
        <section className="mt-12" aria-labelledby="what-to-expect">
          <Card>
            <CardHeader>
              <CardTitle id="what-to-expect">What to Expect</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="font-semibold mb-2">Fresh Ingredients</h3>
                  <p className="text-sm text-gray-600">
                    Every dish prepared with the freshest Mediterranean
                    ingredients, sourced daily.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🏛️</span>
                  </div>
                  <h3 className="font-semibold mb-2">Authentic Atmosphere</h3>
                  <p className="text-sm text-gray-600">
                    Enjoy our warm, Mediterranean-inspired ambiance perfect for
                    any occasion.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👨‍🍳</span>
                  </div>
                  <h3 className="font-semibold mb-2">Expert Service</h3>
                  <p className="text-sm text-gray-600">
                    Our experienced team is dedicated to making your dining
                    experience memorable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  );
}
