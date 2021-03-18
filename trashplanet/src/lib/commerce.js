import Commerce from '@chec/commerce.js'

// throw an error if no public key, dont forget
export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true)