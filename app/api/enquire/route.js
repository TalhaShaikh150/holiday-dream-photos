import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    
    // TODO: Integrate Resend or SendGrid here using the 'body' data
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: body.email,
    //   subject: 'Private Event Enquiry Received',
    //   html: '<p>Thank you for your enquiry. We will check our availability for your preferred date and get back to you shortly.</p>'
    // });

    console.log("Private Event enquiry received:", body);

    return NextResponse.json(
      { message: "Successfully submitted private event enquiry." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error submitting form" },
      { status: 500 }
    );
  }
}
