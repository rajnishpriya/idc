import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Appointment | Indu Dental Clinic Siwan Bihar",
    description:
        "Book your dental appointment online with Indu Dental Clinic in Siwan. Fast and easy scheduling for all dental treatments.",
    openGraph: {
        title: "Book Your Appointment | Indu Dental Clinic",
        description:
            "Schedule your consultation or treatment at Siwan's premier dental clinic.",
        type: "website",
        images: [
            {
                url: "/images/hero.jpg",
                width: 1200,
                height: 630,
                alt: "Book Appointment at Indu Dental Clinic Siwan",
            },
        ],
    },
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
