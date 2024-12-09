import { Outlet, useLocation } from 'react-router-dom';

const PageLayout = ({children}) => {
    return (
        <>{children}</>
    )
}

const pageVariants = {
    initial: {
        opacity: 0
    },
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};

const pageTransition = {
    type: 'tween',
    ease: 'linear',
    duration: 0.5
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </div>
    </PageLayout>
  );
};

export default AnimationLayout