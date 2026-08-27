export const easeOut = [0.16, 1, 0.3, 1];

export const springSoft = { type: 'spring', stiffness: 120, damping: 20 };
export const springSnappy = { type: 'spring', stiffness: 260, damping: 24 };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const letterReveal = {
  hidden: { opacity: 0, y: '0.55em' },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};
