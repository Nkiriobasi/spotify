import { useState, useEffect } from 'react';

function useBrowserHistory() {
    const [canGoBack, setCanGoBack] = useState(false);
    const [canGoForward, setCanGoForward] = useState(false);

    useEffect(() => {
        const checkBrowserHistory = () => {
            setCanGoBack(window.history.length > 1);
            setCanGoForward(window.history.length - window.history.state.index > 1);
        };

        checkBrowserHistory();

        const handlePopstate = () => {
            checkBrowserHistory();
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

  return { canGoBack, canGoForward };
}

export default useBrowserHistory;
