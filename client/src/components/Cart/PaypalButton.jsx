import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"
function PaypalButton({amount, onSuccess, onError}) {
  return (
    <PayPalScriptProvider options={
      {
        "clientId": import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}>
      <PayPalButtons style={{ layout: 'vertical' }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: "USD",
                },
              },
            ],
        })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess)
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  )
}

export default PaypalButton