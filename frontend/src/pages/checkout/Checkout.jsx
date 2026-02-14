import "./Checkout.css";
import { useMemo, useState } from "react";
import AddressForm from "../../components/checkout/AddressForm";
import AddressPicker from "../../components/checkout/AddressPicker";
import CheckoutSteps from "../../components/checkout/CheckoutSteps";
import DeliveryMethodSelector from "../../components/checkout/DeliveryMethodSelector";
import OrderReview from "../../components/checkout/OrderReview";
import SuccessPage from "../../components/checkout/SuccessPage";
import { useAppContext } from "../../context/AppContext";

const addresses = [
  {
    id: "addr-1",
    name: "Alex Johnson",
    line: "221B Baker Street, San Francisco, CA 94107",
    phone: "+1 (415) 555-0101",
  },
  {
    id: "addr-2",
    name: "Alex Johnson",
    line: "415 Market Street, San Francisco, CA 94105",
    phone: "+1 (415) 555-0144",
  },
];

const deliveryMethods = [
  { id: "standard", label: "Standard Delivery", eta: "3-5 business days", cost: 5.99 },
  { id: "express", label: "Express Delivery", eta: "1-2 business days", cost: 12.99 },
  { id: "pickup", label: "Store Pickup", eta: "Ready in 4 hours", cost: 0 },
];

export default function Checkout() {
  const { cartItems, clearCart } = useAppContext();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddressId, setSelectedAddressId] = useState("addr-1");
  const [selectedDeliveryId, setSelectedDeliveryId] = useState("standard");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const discount = 10;
  const selectedAddress = addresses.find((address) => address.id === selectedAddressId);
  const selectedDelivery = deliveryMethods.find((method) => method.id === selectedDeliveryId);
  const shipping = selectedDelivery?.cost || 0;

  const goNext = () => setCurrentStep((step) => Math.min(step + 1, 4));
  const goBack = () => setCurrentStep((step) => Math.max(step - 1, 1));

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <section className="checkout-page">
        <CheckoutSteps currentStep={1} onStepChange={setCurrentStep} />
        <div className="checkout-empty">Your cart is empty. Add products before checkout.</div>
      </section>
    );
  }

  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <CheckoutSteps currentStep={4} onStepChange={setCurrentStep} />
        <SuccessPage />
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <CheckoutSteps currentStep={currentStep} onStepChange={setCurrentStep} />

      <div className="checkout-content">
        {currentStep === 1 && (
          <>
            <AddressPicker
              addresses={addresses}
              selectedId={selectedAddressId}
              onSelect={setSelectedAddressId}
            />
            <AddressForm onSubmit={() => {}} />
          </>
        )}

        {currentStep === 2 && (
          <DeliveryMethodSelector
            methods={deliveryMethods}
            selectedId={selectedDeliveryId}
            onSelect={setSelectedDeliveryId}
          />
        )}

        {currentStep === 3 && (
          <OrderReview
            items={cartItems}
            address={selectedAddress}
            delivery={selectedDelivery}
            subtotal={subtotal}
            shipping={shipping}
            discount={discount}
          />
        )}

        {currentStep === 4 && <SuccessPage />}
      </div>

      <div className="checkout-actions">
        <button type="button" onClick={goBack} disabled={currentStep === 1}>
          Back
        </button>
        {currentStep < 3 ? (
          <button type="button" className="primary" onClick={goNext}>
            Continue
          </button>
        ) : (
          <button
            type="button"
            className="primary"
            onClick={() => {
              setOrderPlaced(true);
              clearCart();
            }}
          >
            Place Order
          </button>
        )}
      </div>
    </section>
  );
}
