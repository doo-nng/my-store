import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const getStripe = () => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(secretKey, {
    apiVersion: "2025-12-15.clover",
  });
};

// 제품 가격 매핑 (실제로는 데이터베이스에서 가져와야 함)
const productPrices: Record<string, { amount: number; currency: string }> = {
  shoes: { amount: 99000, currency: "krw" }, // 99,000원
  tshirt: { amount: 39000, currency: "krw" }, // 39,000원
  hoodie: { amount: 79000, currency: "krw" }, // 79,000원
};

const productNames: Record<string, string> = {
  shoes: "신발",
  tshirt: "티셔츠",
  hoodie: "후드",
};

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { productId, customerInfo } = await request.json();

    if (!productId || !productPrices[productId]) {
      return NextResponse.json(
        { error: "Invalid product ID" },
        { status: 400 }
      );
    }

    const price = productPrices[productId];
    const productName = productNames[productId];

    // Stripe Checkout 세션 생성
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: price.currency,
            product_data: {
              name: productName,
              description: `프리미엄 ${productName}`,
            },
            unit_amount: price.amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${request.headers.get("origin") || "http://localhost:3000"}/checkout/success?session_id={CHECKOUT_SESSION_ID}&product=${productId}`,
      cancel_url: `${request.headers.get("origin") || "http://localhost:3000"}/checkout/${productId}`,
      customer_email: customerInfo?.email,
      metadata: {
        productId: productId,
        customerName: customerInfo?.name || "",
        customerPhone: customerInfo?.phone || "",
        customerAddress: customerInfo?.address || "",
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error("Stripe checkout session creation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
