import { useEffect } from "react";

const useRouteTitle = (title) => {
    useEffect(() => {
      document.title = `Sports Market -${title}`;
    }, [title]);
  };

  export default useRouteTitle