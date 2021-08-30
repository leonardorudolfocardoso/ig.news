import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripe } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const session = useSession();

  async function handleSubscribeClick() {
    if (!session) {
      await signIn('github');
      return;
    } 

    try {
      const res = await api.post('/subscribe')
      const { sessionId } = res.data;
      const stripeJs = await getStripe();

      await stripeJs.redirectToCheckout({ sessionId });
    } catch (error) {
      alert(error);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribeClick}
    >
      Subscribe now
    </button>
  )
}